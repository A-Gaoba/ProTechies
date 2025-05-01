import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { messages } = req.body;
  const lastUserMessage =
    messages
      ?.slice()
      .reverse()
      .find((m: any) => m.role === "user")?.content || "";
  const isArabic = /[\u0600-\u06FF]/.test(lastUserMessage);

  // Load JSON content
  const filePath = path.join(
    process.cwd(),
    "i18n",
    "dictionaries",
    isArabic ? "ar.json" : "en.json"
  );
  const jsonContent = fs.readFileSync(filePath, "utf-8");
  const siteData = JSON.parse(jsonContent);
  const flattened = flattenObject(siteData);

  const contextText = Object.values(flattened)
    .filter((v) => typeof v === "string")
    .join("\n");

  const englishPrompt = `
    You are an AI assistant for the ProTechies website.
    
    ⚠️ RULES (follow strictly):
    1. If the user message is only a greeting (like "hi", "hello", "hey"), your response must only be: "Hello! How can I help you?"
    2. DO NOT provide company descriptions or additional information when replying to greetings.
    3. Only answer questions using the content provided below.
    4. If the user's question is not related to this content, say: "Sorry, I don't have information on that topic."
    5. DO NOT assume, invent, or elaborate on topics beyond this data.
    6. Always keep responses short, helpful, and relevant.
    
    📦 USE THIS DATA ONLY:
    ${contextText}
    `;

  const arabicPrompt = `
    أنت مساعد ذكي لموقع ProTechies.
    
    ⚠️ تعليمات (اتبعها بدقة):
    1. إذا كانت الرسالة عبارة عن تحية فقط مثل: "مرحبا"، "أهلاً"، "هاي"، يجب أن تكون الإجابة فقط: "أهلاً! كيف يمكنني مساعدتك؟"
    2. لا تقدم أي وصف للشركة أو تفاصيل إضافية عند الرد على التحيات.
    3. أجب فقط باستخدام المعلومات الموجودة أدناه.
    4. إذا لم يكن السؤال ضمن هذا المحتوى، قل: "عذرًا، لا أملك معلومات حول هذا الموضوع."
    5. لا تفترض أو تخترع أو توسع الإجابة من نفسك.
    6. اجعل الردود مختصرة ومباشرة ومفيدة.
    
    📦 استخدم فقط المعلومات التالية:
    ${contextText}
    `;

  const systemPrompt = isArabic ? arabicPrompt : englishPrompt;

  try {
    const mistralRes = await fetch(
      "https://api.mistral.ai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "mistral-medium",
          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            ...messages,
          ],
        }),
      }
    );

    const data = await mistralRes.json();

    if (data?.error) {
      return res.status(500).json({ error: data.error });
    }

    const reply = data?.choices?.[0]?.message?.content;
    res.status(200).json({ response: reply });
  } catch (error) {
    console.error("Mistral API error:", error);
    res.status(500).json({
      error: { message: "Mistral API request failed. Please try again later." },
    });
  }
}

// Helper to flatten nested JSON
function flattenObject(obj: any, prefix = "", result: any = {}) {
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "object" && value !== null) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  return result;
}
