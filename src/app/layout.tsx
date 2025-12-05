import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chatat - Ubah chat jadi catatan",
  description:
    "Solusi untuk UMKM yang kewalahan mengelola pesanan WhatsApp. Otomatiskan pencatatan dari chat agar lebih rapi, cepat, dan bebas salah, sehingga operasional efisien dan pelanggan lebih puas",
  keywords: [
    "Chatat",
    "WhatsApp order management",
    "otomatisasi pesanan UMKM",
    "pencatatan pesanan otomatis",
    "manajemen chat WhatsApp",
    "efisiensi operasional UMKM",
    "solusi UMKM",
  ],
  authors: [{ name: "Chatat Developer" }],
  icons: {
    icon: "/public/favicon.png",
  },
  openGraph: {
    title: "Chatat - Ubah chat jadi catatan",
    description:
      "Solusi untuk UMKM yang kewalahan mengelola pesanan WhatsApp. Otomatiskan pencatatan dari chat agar lebih rapi, cepat, dan bebas salah, sehingga operasional efisien dan pelanggan lebih puas",
    url: "#",
    siteName: "Chatat",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chatat - Ubah chat jadi catatan",
    description:
      "Solusi untuk UMKM yang kewalahan mengelola pesanan WhatsApp. Otomatiskan pencatatan dari chat agar lebih rapi, cepat, dan bebas salah, sehingga operasional efisien dan pelanggan lebih puas",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
