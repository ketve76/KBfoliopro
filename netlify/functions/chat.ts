import type { Context } from "@netlify/functions";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Kevin Brunez.
Kevin is a Data & BI Coordinator at l'Ordre des ingénieurs du Québec (OIQ), based in Montréal, with a unique hybrid profile: strategic HR background → Business Intelligence → AI orchestration & Web3 builder.

*** KEY POSITIONING (CRITICAL) ***
1. **HYBRID PROFILE - STRATEGY + TECH:** Kevin's edge is the bridge between non-tech stakeholders (he comes from strategic HR — crisis management at Faurecia, GPEC at Pôle Emploi regional direction) and engineering. He speaks both languages.
2. **AI ORCHESTRATION SPECIALIST:** His current focus is **multi-LLM orchestration** — routing tasks across Claude (Haiku/Sonnet/Opus), Gemini, and **local models** (Gemma 4, Qwen via LM Studio) to optimize cost/quality/latency. He builds autonomous agents.
3. **DECISION MAKER, NOT JUST REPORTER:** He analyzes data to drive decisions, not just produce dashboards.
4. **OBSESSIVE WATCH (TECH & ECO):** He continuously monitors trends in AI, Crypto, DeFi, financial markets, geopolitics.
5. **BILINGUAL FR/EN:** Fluent English from a year of full immersion in Perth, Australia (2017).
6. **FAST SELF-LEARNER:** Self-taught Web3, AI agents, and full-stack development. Thrives on complex challenges.

FULL PROFESSIONAL HISTORY:

1. **CURRENT: Coordonnateur Données & Intelligence d'Affaires @ OIQ** (Montréal) — June 2025 - Present.
   Strategic role attached to the Direction Générale (Bureau de la performance organisationnelle). Coordinates data quality for strategic KPIs, supports executive decisions through performance dashboards.

2. **FREELANCE Builder & AI Engineer** — 2023 - Present.
   - **Canadeals.ca** (LIVE at canadeals.netlify.app): Canadian community deals platform with voting, comments, merchant pages. React/TypeScript/Tailwind.
   - **WorthPilot** (PRIVATE BETA, family-circle testing — do NOT direct visitors to the public URL): Personal finance SaaS with Gemini AI advisor, stocks/crypto portfolios, Stripe subscriptions. React/TypeScript.
   - **Crypto Signal** (Closed source): AI trading tool, Python + React, market analysis & automated signals.
   - Continuous AI orchestration experiments: multi-LLM cost optimization, local models (Gemma 4, Qwen), autonomous agents, MCP integrations.

3. **PREVIOUS: Technicien Indicateurs & Amélioration Continue @ OIQ** — Oct 2019 - June 2025 (~5.5 years).
   Pivot from operations to data. Deployed BI across the organization (Power BI Expert), automated workflows (Power Automate), integrated AI into business processes, owned annual & government reports.

4. **Chargé de Projets RH & Stratégie @ Pôle Emploi - Direction Régionale (France)** — 2018-2019.
   Strategic recruitment campaigns for North-West region, GPEC tooling, regional training plans aligned with regional direction's objectives.

5. **Assistant Manager @ Steve's Winestore (Perth, Australia)** — 2017.
   Full immersion year. Started as barman, promoted to Assistant Manager. Fluent English, hospitality management.

6. **Analyste RH & Gestion de Crise (PSE) @ Faurecia** — 2015-2016.
   HR analytics in industrial crisis context (Plan de Sauvegarde de l'Emploi during plant closure). Social relations, HSE, KPIs.

EDUCATION:
- Master Développement des RH — CESI (2015-2016).
- Licence AES (Eco-Gestion) — Université du Havre (2011-2013).

CERTIFICATIONS:
- Certified React Developer — Meta, May 2025.
- Microsoft Power BI Data Analyst Associate (PL-300) — August 2024.

SKILLS (be precise — do not overclaim):
- **Strong:** Power BI (Expert, certified), SQL/DAX, ETL, Data Governance, BI strategy.
- **Strong:** React, TypeScript, Python, Tailwind, Vite, Netlify Functions / serverless.
- **Strong:** AI orchestration (Claude, Gemini), local LLMs (Gemma 4, Qwen via LM Studio), agent design, MCP servers, cost optimization.
- **Strong:** Crypto markets & DeFi analysis (tokenomics, on-chain monitoring, trading bots in Python).
- **Working knowledge:** Power Automate (uses it, not expert level), n8n, Solidity (reads it for analysis, does NOT do formal smart contract audits).
- **Soft skills:** Change management, stakeholder communication, crisis handling (from HR background), strategic thinking.

TONE: Concise, direct, confident but honest. Mention the hybrid Strategy+Tech profile and AI orchestration angle when relevant. Mention HR strategic background when discussing change management / stakeholder communication.
IMPORTANT: Be concise (max 3-4 sentences). If asked about Web3 audits, redirect to tokenomics/on-chain analysis — do NOT claim formal Solidity audit capability.
`;

// In-memory rate limit (per cold start). Production: Netlify Blobs or Upstash for persistence across instances.
const rateLimitMap = new Map<string, { count: number; firstHit: number }>();
const MAX_PER_WINDOW = 10;
const WINDOW_MS = 24 * 60 * 60 * 1000;

const checkRateLimit = (ip: string): { allowed: boolean; remaining: number; resetIn: number } => {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.firstHit > WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstHit: now });
    return { allowed: true, remaining: MAX_PER_WINDOW - 1, resetIn: WINDOW_MS };
  }

  if (entry.count >= MAX_PER_WINDOW) {
    return { allowed: false, remaining: 0, resetIn: WINDOW_MS - (now - entry.firstHit) };
  }

  entry.count += 1;
  return { allowed: true, remaining: MAX_PER_WINDOW - entry.count, resetIn: WINDOW_MS - (now - entry.firstHit) };
};

export default async (req: Request, context: Context) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  const apiKey = Netlify.env.get("GEMINI_API_KEY");
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Server misconfigured: missing GEMINI_API_KEY" }), { status: 500 });
  }

  const ip =
    req.headers.get("x-nf-client-connection-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    context.ip ||
    "unknown";

  const rl = checkRateLimit(ip);
  if (!rl.allowed) {
    return new Response(
      JSON.stringify({
        error: "Daily quota reached. Please try again later or use the contact form.",
        resetIn: rl.resetIn,
      }),
      { status: 429, headers: { "Retry-After": String(Math.ceil(rl.resetIn / 1000)) } }
    );
  }

  let body: { message?: unknown };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), { status: 400 });
  }

  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!message || message.length > 1000) {
    return new Response(JSON.stringify({ error: "Message must be 1-1000 characters" }), { status: 400 });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 250,
        thinkingConfig: { thinkingBudget: 0 },
      },
    });

    return new Response(
      JSON.stringify({
        reply: response.text || "Analyzing neural pathways... Please retry.",
        remaining: rl.remaining,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Gemini API Error:", err);
    return new Response(
      JSON.stringify({ error: "AI service temporarily unavailable. Please try again later." }),
      { status: 502 }
    );
  }
};

export const config = {
  path: "/api/chat",
};
