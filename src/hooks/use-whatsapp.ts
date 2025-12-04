"use client";

import { useState, useEffect } from "react";

export function useWhatsApp() {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchQR = async () => {
    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_WA_API_URL || "http://localhost:4000";

      const res = await fetch(`${baseUrl}/`);
      const data = await res.json();

      if (data.connected) {
        setIsConnected(true);
        setQrCode(null);
      } else if (data.qrCode) {
        setQrCode(data.qrCode);
        setIsConnected(false);
      }
    } catch (error) {
      console.error("Gagal konek ke WA Server", error);
      setIsConnected(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQR();

    // Polling setiap 3 detik
    const interval = setInterval(fetchQR, 3000);

    // Cleanup saat component dicopot
    return () => clearInterval(interval);
  }, []);

  return { qrCode, isConnected, isLoading, refresh: fetchQR };
}
