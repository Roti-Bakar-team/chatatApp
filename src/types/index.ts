export interface ParsedItem {
  name: string;
  qty: number;
  note?: string;
  matchedProductId?: number; // ID dari database jika cocok
  priceEstimate?: number;
}

export interface ParsedOrder {
  isOrder: boolean;
  customerName?: string;
  customerPhone?: string;
  address?: string;
  items: ParsedItem[];
  summary?: string; // Ringkasan singkat dari AI
}

export interface ActionState {
  success: boolean;
  message: string;
  data?: ParsedOrder | null; // Make data type more specific and always present
}

// Tipe baru untuk respons AI yang lebih kaya
export type AiIntent =
  | "ORDER"
  | "QUESTION"
  | "OTHER"
  | "ADD_ITEMS"
  | "CONFIRMATION"
  | "GATHER_INFO"
  | "REJECT";

export interface AiResponse {
  intent: AiIntent;
  response: ParsedOrder | string | object;
  summary: string | null;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  image?: string;
}

export interface CreatedUser extends User {
  password: string;
}

export interface Product {
  id?: number;
  name: string;
  price: number;
  description?: string;
}
