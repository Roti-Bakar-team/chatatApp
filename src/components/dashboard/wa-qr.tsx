"use client";

import { QRCodeSVG } from "qrcode.react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useWhatsApp } from "@/hooks/use-whatsapp"; // Import Hook Logika di sini
import {
  Loader2,
  RefreshCw,
  Smartphone,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export function WhatsAppQR() {
  // Panggil hook untuk mendapatkan data & status
  const { qrCode, isConnected, isLoading, refresh } = useWhatsApp();

  return (
    <Card className="w-full border-slate-200 shadow-sm overflow-hidden">
      <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
        <CardTitle className="text-lg text-slate-800 flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-indigo-600" />
          Koneksi WhatsApp
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center p-6 min-h-[320px]">
        {/* STATE 1: LOADING AWAL */}
        {isLoading && !qrCode && !isConnected ? (
          <div className="flex flex-col items-center gap-4 animate-pulse">
            <div className="relative">
              <div className="h-16 w-16 rounded-full border-4 border-slate-100 border-t-indigo-600 animate-spin"></div>
            </div>
            <p className="text-sm text-slate-500 font-medium">
              Menghubungkan ke Server...
            </p>
          </div>
        ) : /* STATE 2: SUDAH TERHUBUNG */
        isConnected ? (
          <div className="flex flex-col items-center gap-6 animate-in fade-in duration-500">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-75"></div>
              <div className="relative h-24 w-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border-2 border-emerald-100">
                <CheckCircle2 className="w-12 h-12" />
              </div>
            </div>

            <div className="text-center space-y-2">
              <h3 className="font-bold text-emerald-700 text-xl">Terhubung!</h3>
              <p className="text-sm text-slate-500 px-4 max-w-[250px]">
                Bot aktif & siap menerima pesan. Silakan kirim chat ke nomor WA
                ini untuk tes.
              </p>
            </div>

            <div className="w-full bg-emerald-50 py-2 px-4 rounded text-xs text-emerald-700 text-center font-mono border border-emerald-100">
              Status: ONLINE
            </div>
          </div>
        ) : /* STATE 3: MENAMPILKAN QR CODE (BELUM SCAN) */
        qrCode ? (
          <div className="flex flex-col items-center gap-6 animate-in zoom-in duration-300 w-full">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
              <div className="relative p-4 bg-white border-2 border-slate-100 rounded-xl shadow-sm">
                <QRCodeSVG
                  value={qrCode}
                  size={200}
                  level={"L"}
                  includeMargin={true}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-3 text-center w-full">
              <div>
                <p className="text-sm font-bold text-slate-700 uppercase tracking-wide">
                  Scan Sekarang
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  QR akan refresh otomatis
                </p>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-600 text-left space-y-1 border border-slate-100">
                <p>1. Buka WhatsApp di HP</p>
                <p>2. Menu {">"} Perangkat Tertaut</p>
                <p>3. Klik "Tautkan Perangkat"</p>
              </div>
            </div>
          </div>
        ) : (
          /* STATE 4: ERROR / SERVER MATI / MENUNGGU */
          <div className="text-center space-y-5">
            <div className="h-20 w-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto border-2 border-dashed border-slate-200">
              <AlertCircle className="w-10 h-10 text-slate-400" />
            </div>

            <div className="space-y-1">
              <p className="font-medium text-slate-700 text-lg">
                Tidak ada sinyal
              </p>
              <p className="text-sm text-slate-500 max-w-[200px] mx-auto">
                Pastikan server WA (Port 4000) sudah berjalan di laptop/railway.
              </p>
            </div>

            <Button
              variant="outline"
              onClick={refresh}
              className="gap-2 border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700"
            >
              <RefreshCw className="w-4 h-4" />
              Coba Refresh
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
