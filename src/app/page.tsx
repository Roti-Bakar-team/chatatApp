"use client";

import { useState, useEffect } from "react";
import {
  MessageSquare,
  TrendingUp,
  Clock,
  Zap,
  Shield,
  BarChart3,
  Menu,
  X,
  ArrowRight,
  Star,
  Users,
  BrainCircuit,
  Check,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [typedText, setTypedText] = useState("");
  const headlineText = "Tanpa Stres";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= headlineText.length) {
        setTypedText(headlineText.slice(0, currentIndex));
        currentIndex++;
      } else {
        currentIndex = 0;
        setTypedText("");
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-indigo-500 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <BrainCircuit className="w-8 h-8 text-indigo-400" />
              <span className="text-xl font-bold">Chatat AI</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/solusi" className="hover:text-indigo-400 transition-colors">Solusi</Link>
              <Link href="/fitur" className="hover:text-indigo-400 transition-colors">Fitur</Link>
              <Link href="#testimoni" className="hover:text-indigo-400 transition-colors">Testimoni</Link>
              <Link href="/kontak" className="hover:text-indigo-400 transition-colors">Kontak</Link>
              <Link
                href="/dashboard"
                className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-md transition-colors font-semibold"
              >
                Masuk
              </Link>
            </nav>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                 <Link href="/solusi" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800" onClick={() => setIsMenuOpen(false)}>Solusi</Link>
                 <Link href="/fitur" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800" onClick={() => setIsMenuOpen(false)}>Fitur</Link>
                 <Link href="#testimoni" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800" onClick={() => setIsMenuOpen(false)}>Testimoni</Link>
                 <Link href="/kontak" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800" onClick={() => setIsMenuOpen(false)}>Kontak</Link>
                <Link
                  href="/dashboard"
                  className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 px-5 py-3 rounded-md transition-colors mt-2"
                >
                  Masuk
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute top-0 left-0 -z-10 h-1/2 w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-slate-800 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-slate-700"
            >
              <Zap className="w-4 h-4 mr-2" />
              Solusi Cerdas untuk UMKM Modern
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-100 mb-6 leading-tight"
            >
              Kelola WhatsApp Bisnis
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400 mt-2">
                {typedText}<span className="animate-pulse">_</span>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Otomatisasi pesanan, pelacakan inventaris, dan pembukuan bisnis langsung dari WhatsApp. 
              Fokus pada pertumbuhan, biarkan Chatat yang mengurus operasional.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/dashboard" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-transform transform hover:scale-105 flex items-center justify-center">
                Mulai Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="#" className="bg-slate-800 border border-slate-700 text-slate-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-700 transition-colors">
                Lihat Demo
              </Link>
            </motion.div>
          </div>
        </section>

        {/* "Masalah" Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-100 mb-4">
                Masalah yang Sering Dihadapi UMKM
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Volume percakapan WhatsApp yang tinggi membuat bisnis Anda kewalahan?
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <MessageSquare className="w-6 h-6 text-red-400" />, title: "Chat Menumpuk", desc: "Ratusan pesan WhatsApp setiap hari membuat sulit membedakan pesanan, tanya jawab, dan chat penting lainnya." },
                { icon: <Clock className="w-6 h-6 text-orange-400" />, title: "Proses Manual Lambat", desc: "Memilah chat, mengekstrak data pesanan, dan memasukkan ke pembukuan memakan waktu berjam-jam setiap hari." },
                { icon: <TrendingUp className="w-6 h-6 text-purple-400" />, title: "Kehilangan Peluang", desc: "Respon lambat dan kesalahan manual menyebabkan kehilangan penjualan dan menurunkan kepuasan pelanggan." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-colors"
                >
                  <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mb-6">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* "Solusi" Section */}
        <section id="solusi" className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <div className="inline-flex items-center bg-slate-800 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-slate-700">
                  <Shield className="w-4 h-4 mr-2" />
                  Solusi Terintegrasi
                </div>
                <h2 className="text-4xl font-bold text-slate-100 mb-6">
                  Chatat: Solusi All-in-One untuk WhatsApp Bisnis
                </h2>
                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                  Platform cerdas yang mengubah chaos WhatsApp menjadi aliran pesanan terstruktur, 
                  otomatis, dan terukur untuk UMKM Anda.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Deteksi Pesanan dengan Kecerdasan Buatan", desc: "Otomatis mengenali dan ekstrak detail pesanan dari chat WhatsApp" },
                    { title: "Sinkronisasi Inventaris Real-time", desc: "Update stok otomatis saat pesanan masuk, hindari overbooking" },
                    { title: "Pembukuan Otomatis", desc: "Rekam keuangan otomatis, laporan siap pajak dalam satu klik" },
                    { title: "Respon Cerdas", desc: "Balasan cepat dan personal untuk tingkatkan kepuasan pelanggan" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="w-6 h-6 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-slate-100">{item.title}</h4>
                        <p className="text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 shadow-2xl shadow-indigo-900/20">
                  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: "Budi Santoso", order: "#1234", amount: "150K", color: "emerald" },
                        { name: "Siti Nurhaliza", order: "#1235", amount: "275K", color: "sky" },
                        { name: "Ahmad Fauzi", order: "#1236", amount: "89K", color: "purple" }
                      ].map(item => (
                         <div key={item.order} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                          <div className="flex items-center">
                            <div className={`w-8 h-8 bg-${item.color}-500/20 rounded-full flex items-center justify-center mr-3`}>
                              <Users className={`w-4 h-4 text-${item.color}-400`} />
                            </div>
                            <div>
                              <p className="font-medium text-slate-100">{item.order}</p>
                              <p className="text-sm text-slate-400">{item.name}</p>
                            </div>
                          </div>
                          <span className="text-indigo-400 font-semibold">Rp {item.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* "Fitur" Section */}
        <section id="fitur" className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-100 mb-4">
                Fitur Lengkap untuk Bisnis Anda
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Semua yang Anda butuhkan untuk mengelola WhatsApp bisnis secara profesional.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: <MessageSquare className="w-6 h-6 text-indigo-400" />, title: "Obrolan Cerdas", desc: "Kategorikan otomatis pesan berdasarkan jenis: pesanan, pertanyaan, komplain, atau informasi." },
                { icon: <BarChart3 className="w-6 h-6 text-sky-400" />, title: "Dasbor Analytics", desc: "Monitor performa bisnis real-time dengan dashboard komprehensif dan insight actionable." },
                { icon: <Shield className="w-6 h-6 text-purple-400" />, title: "Manajemen Inventaris", desc: "Pantau stok real-time dan notifikasi otomatis saat stok menipis." },
                { icon: <Clock className="w-6 h-6 text-orange-400" />, title: "Tanggapan Otomatis", desc: "Template balasan otomatis untuk pertanyaan umum, konfirmasi pesanan, dan follow-up." },
                { icon: <TrendingUp className="w-6 h-6 text-red-400" />, title: "Pelaporan Keuangan", desc: "Laporan keuangan otomatis dan analisis cash flow untuk pengambilan keputusan." },
                { icon: <Users className="w-6 h-6 text-teal-400" />, title: "Manajemen Pelanggan", desc: "Basis Data pelanggan terpusat dengan riwayat pembelian, preferensi, dan segmentasi otomatis." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
                >
                  <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mb-6">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* "Testimoni" Section */}
        <section id="testimoni" className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-100 mb-4">
                Dipercaya oleh Ribuan UMKM Indonesia
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Lihat bagaimana Chatat mengubah bisnis mereka.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { quote: "Chatat mengubah cara saya mengelola online shop. Dulu saya habiskan 3-4 jam setiap hari hanya untuk manage WhatsApp. Sekarang semuanya otomatis!", name: "Joko Susilo", company: "Owner, Fashion Store", initial: "JS", color: "emerald" },
                { quote: "Pembukuan yang dulu selalu tertunda, sekarang jadi rapi dan teratur. Laporan keuangan siap pajak dalam satu klik. Highly recommended!", name: "Siti Nurhasanah", company: "Owner, Kuliner Home Industry", initial: "SN", color: "sky" },
                { quote: "Customer satisfaction meningkat drastis karena response time lebih cepat. Stok tidak pernah kehabisan lagi karena update otomatis.", name: "Ahmad Fauzi", company: "Owner, Gadget Store", initial: "AF", color: "purple" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 text-amber-400 fill-current" />)}
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed italic">&ldquo;{item.quote}&ldquo;</p>
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-${item.color}-500/20 rounded-full flex items-center justify-center mr-4`}>
                      <span className={`text-${item.color}-300 font-semibold`}>{item.initial}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-100">{item.name}</p>
                      <p className="text-sm text-slate-400">{item.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Siap Mengubah Bisnis Anda?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Bergabunglah dengan ribuan UMKM yang telah meningkatkan efisiensi dan keuntungan mereka dengan Chatat.
            </p>
            <Link href="/dashboard" className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 transition-transform transform hover:scale-105">
              Mulai Gratis Sekarang
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/50 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="inline-flex items-center space-x-2 mb-4">
                <BrainCircuit className="w-8 h-8 text-indigo-400" />
                <span className="text-xl font-bold text-white">Chatat AI</span>
              </Link>
              <p className="text-sm leading-relaxed pr-8">
                Solusi cerdas untuk mengelola WhatsApp bisnis Anda secara otomatis dan efisien.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Produk</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#fitur" className="hover:text-white transition-colors">Fitur</Link></li>
                <li><Link href="#solusi" className="hover:text-white transition-colors">Solusi</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Demo</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/tentang" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link href="/kontak" className="hover:text-white transition-colors">Kontak</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Panduan</Link></li>
                <li><Link href="https://t.me/chatatcommunity" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Komunitas</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Chatat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
