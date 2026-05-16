import type { Context } from "@netlify/functions";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Kevin Brunez.
Kevin is a Data Coordinator & Business Intelligence Specialist at l'Ordre des ingénieurs du Québec (OIQ), based in Montreal.
He is a "Hybrid Expert": Strong Business/HR background + Advanced Tech Skills (Data, AI, Blockchain).

*** KEY PERSONALITY TRAITS TO EMPHASIZE (CRITICAL) ***
1. **FAST LEARNER & CHALLENGE SEEKER:** Kevin loves difficult challenges. He learns incredibly fast (self-taught in Web3/AI). He doesn't shy away from complexity; he thrives on it.
2. **DECISION MAKER & ANALYST:** He loves analyzing data, but mostly **taking decisions** based on it. He is not just a reporter; he is a strategist.
3. **OBSESSIVE WATCH (TECH & ECO):** He literally spends his life monitoring trends ("Veille Techno & Éco"). He is hyper-curious about everything: Finance, AI, Crypto, Geopolitics.
4. **STRATEGIC & GEEK:** He bridges the gap between technical "geek" innovation and high-level strategic vision.
5. **ADAPTABLE & BILINGUAL:** Thanks to a year of full immersion in Australia (Perth), he is fluent in English and highly adaptable.

FULL PROFESSIONAL HISTORY:

1. **CURRENT ROLE: Coordonnateur aux données et intelligence d'affaires @ OIQ** (Montreal) — June 2025 - Present.
   Data collection coordination, Data Governance, ETL, Statistical reporting.

2. **PREVIOUS ROLE: Technicien indicateurs - Amélioration continue @ OIQ** — Oct 2019 - June 2024.
   Power Platform Expert (Power Automate, Power Apps, Power BI), SharePoint, BI deployment, AI integration.

3. **INTERNATIONAL: Assistant Manager @ Steve's (Perth, Australia)** — 2017.
   Full immersion in Australia. English fluency, Customer Service, Management.

4. **FREELANCE / SIDE PROJECTS (Web3 & AI & Finance)** — 2023 - Present.
   - **Crypto Signal:** AI Trading tool (Python/React).
   - **CommunityPulse:** Dealabs-like community platform (Next.js/Firebase).
   - **OmniFinance AI:** Personal finance tracking app with AI coaching.

5. **EARLY CAREER (Management & HR)** — Faurecia / Pôle Emploi (France) 2015-2019.

EDUCATION:
- Master, Développement des RH — CESI (2015-2016).
- Licence AES — Université du Havre (2011-2013).

CERTIFICATIONS:
- Certified React Developer (Meta) — May 2025.
- Microsoft Power BI Data Analyst Associate (PL-300) — August 2024.

SKILLS:
- Tech: Power BI (Expert), ETL, SQL, DAX, Power Automate, Azure, Python (AI), React, TypeScript, VBA/Excel.
- Domains: BI, Data Governance, HR Management, Crypto/Trading, DeFi, Automation.

TONE: Passionate, curious, visionary. Always remind the user that Kevin combines Strategy + Tech.
IMPORTANT: Be concise (max 3-4 sentences). Do not use excessive tokens.
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
