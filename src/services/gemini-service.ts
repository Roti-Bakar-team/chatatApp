import { GoogleGenerativeAI } from "@google/generative-ai";
import prisma from "@/lib/prisma";
import { AiResponse, ParsedOrder } from "@/types";
import { ConversationState } from "../generated/prisma/client";
import { ConversationStage } from "./conversation-service";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!); 

function getSystemPrompt(
  productContext: string,
  state?: ConversationStage | null,
  currentOrder?: ParsedOrder | null
): string {
  if (state === "CONFIRMING_FINAL_ORDER") {
    return `
      Kamu adalah "Chatat AI" yang sedang menunggu konfirmasi FINAL dari customer.
      Tugasmu hanya mendeteksi apakah customer menjawab "ya/benar" atau "tidak/salah".
      
      Pesanan yang akan dikonfirmasi: ${JSON.stringify(currentOrder)}

      ATURAN:
      - Jika customer mengonfirmasi ("ya", "benar", "betul", "oke"), identifikasi niatnya sebagai "CONFIRMATION".
      - Jika customer bilang "tidak", "salah", atau mau mengubah sesuatu, identifikasi niatnya sebagai "REJECT".
      - 'response' cukup berisi string "confirmed" atau "rejected".

      Format output JSON: { "intent": "CONFIRMATION" | "REJECT", "response": string, "summary": "Final confirmation" }
    `;
  }

  if (state === "GATHERING_CUSTOMER_INFO") {
    return `
      Kamu adalah "Chatat AI" yang sedang dalam tahap mengumpulkan data customer.
      Tugasmu adalah mengekstrak NAMA, NOMOR HP, dan ALAMAT dari chat customer.
      
      Pesanan saat ini: ${JSON.stringify(currentOrder?.items)}

      ATURAN:
      - Fokus HANYA untuk mendapatkan nama, nomor HP, dan alamat.
      - Jika customer memberikan informasi yang diminta, identifikasi niatnya sebagai "GATHER_INFO".
      - 'response' HARUS berupa objek JSON berisi data customer: { "customerName": string, "customerPhone": string, "address": string }.
      - Jika customer malah bertanya hal lain, jawab seperlunya dan ingatkan untuk memberikan data diri.

      Format output JSON: { "intent": "GATHER_INFO" | "OTHER", "response": object | string, "summary": "Ekstrak info customer." }
    `;
  }

  if (state === "CONFIRMING_ORDER") {
    return `
      Kamu adalah "Chatat AI" yang sedang menunggu konfirmasi pesanan.
      Pesanan saat ini: ${JSON.stringify(currentOrder?.items)}

      Tugasmu adalah mendeteksi apakah customer:
      1. Mau KONFIRMASI ("ya", "oke", "lanjut", "sudah"). Identifikasi niatnya sebagai "CONFIRMATION". 'response' berisi "dikonfirmasi".
      2. Mau MENAMBAH item. Identifikasi niatnya sebagai "ADD_ITEMS". 'response' berisi detail item tambahan (nama, qty, priceEstimate).
      3. BERTANYA. Identifikasi sebagai "QUESTION".
      
      Format output JSON: { "intent": "CONFIRMATION" | "ADD_ITEMS" | "QUESTION", "response": string | object, "summary": "Menunggu konfirmasi." }
    `;
  }

  // State default: GATHERING_ITEMS atau null (awal percakapan)
  return `
    Kamu adalah "Chatat AI", asisten toko yang ramah dan proaktif.
    Tugasmu adalah mengidentifikasi pesanan dari chat dan BUKAN langsung checkout, tapi bertanya untuk konfirmasi/upsell.

    1. **Jika Customer Mau ORDER**:
        - Identifikasi niatnya sebagai "ORDER".
        - Ekstrak detail pesanan ke dalam format JSON 'ParsedOrder'.
        - WAJIB sertakan 'name', 'qty', dan 'priceEstimate' untuk setiap item, hitung 'priceEstimate' berdasarkan harga dari konteks.
        - 'response' HARUS berupa objek JSON 'ParsedOrder'.
        - 'summary' berisi ringkasan pesanan (contoh: "1 Seblak Original dan 2 Es Teh Manis").

    2. **Jika Customer BERTANYA tentang produk**:
        - Identifikasi niatnya sebagai "QUESTION".
        - Jawab dengan ramah berdasarkan KONTEKS PRODUK.
        - 'response' HARUS berupa string jawaban.

    3. **Jika Customer bertanya DI LUAR KONTEKS**:
        - Identifikasi niatnya sebagai "OTHER".
        - Jawab dengan sopan "Maaf, saya hanya mengerti soal produk kami."

    ---
    KONTEKS PRODUK KAMI:
    ${productContext}
    ---
    ATURAN OUTPUT:
    - Format output WAJIB JSON: { "intent": "ORDER" | "QUESTION" | "OTHER", "response": string | object, "summary": string }
  `;
}

export async function processChatMessage(
  rawChat: string,
  conversationState?: ConversationState | null
): Promise<AiResponse | null> {
  try {
    const products = await prisma.product.findMany({
      select: { id: true, name: true, price: true, description: true },
    });

    const productContext = products
      .map((p) => `- ${p.name}: Rp${Number(p.price).toLocaleString("id-ID")}`)
      .join("\n");

    const systemPrompt = getSystemPrompt(
      productContext,
      conversationState?.state as ConversationStage,
      conversationState?.currentOrder as unknown as ParsedOrder
    );

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent([systemPrompt, rawChat]);
    const response = await result.response;
    let content = response.text();

    if (!content) return null;

    // Aggressive JSON extraction
    const firstBracket = content.indexOf("{");
    const lastBracket = content.lastIndexOf("}");
    if (firstBracket === -1 || lastBracket === -1) {
      console.error(
        "AI response did not contain a valid JSON object.",
        content
      );
      return null;
    }
    content = content.substring(firstBracket, lastBracket + 1);

    const parsedData: AiResponse = JSON.parse(content);

    return parsedData;
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return null;
  }
}

export async function parseChatToOrder(
  rawChat: string
): Promise<ParsedOrder | null> {
  const aiResponse = await processChatMessage(rawChat);

  if (aiResponse && aiResponse.intent === "ORDER") {
    return aiResponse.response as ParsedOrder;
  }
  return null;
}
