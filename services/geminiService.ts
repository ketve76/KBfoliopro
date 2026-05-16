// Calls the Netlify serverless function at /api/chat.
// The Gemini API key NEVER leaves the server.

export interface ChatResponse {
  reply: string;
  remaining?: number;
  error?: string;
  resetIn?: number;
}

export const sendMessageToGemini = async (message: string): Promise<ChatResponse> => {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return {
        reply: data.error || "AI service temporarily unavailable.",
        error: data.error,
        resetIn: data.resetIn,
      };
    }

    return {
      reply: data.reply || "No response received.",
      remaining: data.remaining,
    };
  } catch (err) {
    console.error("Chat fetch error:", err);
    return { reply: "Network error. Please retry.", error: "network" };
  }
};
