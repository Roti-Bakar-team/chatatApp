'use client';

import { useState } from 'react';
import { Check, MessageSquare, TrendingUp, Clock, Users, Zap, Shield, BarChart3, Menu, X, ArrowRight, Star, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">Chatat</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">Beranda</Link>
              <Link href="/solusi" className="text-slate-600 hover:text-slate-900 transition-colors">Solusi</Link>
              <Link href="/fitur" className="text-slate-600 hover:text-slate-900 transition-colors">Fitur</Link>
              <Link href="/kontak" className="text-slate-600 hover:text-slate-900 transition-colors">Kontak</Link>

              <Link
                href="/auth/login"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow"
              >
                Masuk
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-4 py-2 space-y-1">
              <Link href="/" className="block px-3 py-2 text-slate-600 hover:text-slate-900">Beranda</Link>
              <Link href="/solusi" className="block px-3 py-2 text-slate-600 hover:text-slate-900">Solusi</Link>
              <Link href="/fitur" className="block px-3 py-2 text-slate-600 hover:text-slate-900">Fitur</Link>
              <Link href="/kontak" className="block px-3 py-2 text-slate-600 hover:text-slate-900">Kontak</Link>

              <Link
                href="/auth/login"
                className="block w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full text-center mb-3"
              >
                Masuk
              </Link>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Solusi Cerdas untuk UMKM Modern
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Kelola WhatsApp Bisnis
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                Tanpa Stres
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Otomatisasi pesanan, pelacakan inventaris, dan pembukuan bisnis langsung dari WhatsApp. 
              Fokus pada pertumbuhan, biarkan Chatat yang mengurus operasional
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-3">
              <Link href="/auth/login" className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center">
                Mulai Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="#" className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-colors">
                Lihat Demo
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8 text-slate-500">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-emerald-500 mr-2" />
                <span>Tanpa kartu kredit</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-emerald-500 mr-2" />
                <span>Siapkan instant</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-emerald-500 mr-2" />
                <span>Dukungan 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Masalah yang Sering Dihadapi UMKM
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Volume percakapan WhatsApp yang tinggi membuat bisnis Anda kewalahan?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Chat Menumpuk</h3>
              <p className="text-slate-600 leading-relaxed">
                Ratusan pesan WhatsApp setiap hari membuat sulit membedakan pesanan, tanya jawab, dan chat penting lainnya
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Proses Manual Lambat</h3>
              <p className="text-slate-600 leading-relaxed">
                Memilah chat, mengekstrak data pesanan, dan memasukkan ke pembukuan memakan waktu berjam-jam setiap hari
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Kehilangan Peluang</h3>
              <p className="text-slate-600 leading-relaxed">
                Respon lambat dan kesalahan manual menyebabkan kehilangan penjualan dan menurunkan kepuasan pelanggan
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="solusi" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Solusi Terintegrasi
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Chatat: Solusi All-in-One untuk WhatsApp Bisnis
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Platform cerdas yang mengubah chaos WhatsApp menjadi aliran pesanan terstruktur, 
                otomatis, dan terukur untuk UMKM Anda.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Deteksi Pesanan dengan Kecerdasan Buatan</h4>
                    <p className="text-slate-600">Otomatis mengenali dan ekstrak detail pesanan dari chat WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Sinkronisasi Inventaris Real-time</h4>
                    <p className="text-slate-600">Update stok otomatis saat pesanan masuk, hindari overbooking</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Pembukuan Otomatis</h4>
                    <p className="text-slate-600">Rekam keuangan otomatis, laporan siap pajak dalam satu klik</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Respon Cerdas</h4>
                    <p className="text-slate-600">Balasan cepat dan personal untuk tingkatkan kepuasan pelanggan</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                          <Users className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Pesanan #1234</p>
                          <p className="text-sm text-slate-500">Budi Santoso</p>
                        </div>
                      </div>
                      <span className="text-emerald-600 font-semibold">Rp 150K</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <Users className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Pesanan #1235</p>
                          <p className="text-sm text-slate-500">Siti Nurhaliza</p>
                        </div>
                      </div>
                      <span className="text-emerald-600 font-semibold">Rp 275K</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          <Users className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">Pesanan #1236</p>
                          <p className="text-sm text-slate-500">Ahmad Fauzi</p>
                        </div>
                      </div>
                      <span className="text-emerald-600 font-semibold">Rp 89K</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-slate-900">Total:</span>
                      <span className="text-2xl font-bold text-slate-900">Rp 514K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fitur" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Fitur Lengkap untuk Bisnis Anda
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Semua yang Anda butuhkan untuk mengelola WhatsApp bisnis secara profesional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Obrolan Cerdas</h3>
              <p className="text-slate-600 mb-4">
                Kategorikan otomatis pesan berdasarkan jenis: pesanan, pertanyaan, komplain, atau informasi.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                  Klasifikasi pesan dengan AI
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                  Pemberian tag pesan prioritas
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                  Penghitung pesan yang belum dibaca
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Dasbor Analytics</h3>
              <p className="text-slate-600 mb-4">
                Monitor performa bisnis real-time dengan dashboard komprehensif dan insight actionable.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                  Analisis tren penjualan
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                  Pelacakan perilaku pelanggan
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                  Perkiraan pendapatan
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Manajemen Inventaris</h3>
              <p className="text-slate-600 mb-4">
                Pantau stok real-time dan notifikasi otomatis saat stok menipis.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                  Pembaruan stok Real-time
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                  Peringatan stok rendah
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Tanggapan Otomatis</h3>
              <p className="text-slate-600 mb-4">
                Template balasan otomatis untuk pertanyaan umum, konfirmasi pesanan, dan follow-up.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                  Pesan terjadwal
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                  Dukungan Multi-bahasa
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Pelaporan Keuangan</h3>
              <p className="text-slate-600 mb-4">
                Laporan keuangan otomatis dan analisis cash flow untuk pengambilan keputusan.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                  Laporan Keuangan Laba/Rugi
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                  Pelacakan pengeluaran
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Manajemen Pelanggan</h3>
              <p className="text-slate-600 mb-4">
                Basis Data pelanggan terpusat dengan riwayat pembelian, preferensi, dan segmentasi otomatis.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                  Segmentasi pelanggan
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                  Pelacakan riwayat pembelian
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-emerald-500 mr-2" />
                  Program loyalitas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="testimoni" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Dipercaya oleh Ribuan UMKM Indonesia
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Lihat bagaimana Chatat mengubah bisnis mereka
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Chatat mengubah cara saya mengelola online shop. Dulu saya habiskan 3-4 jam setiap hari hanya untuk manage WhatsApp. Sekarang semuanya otomatis!
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-600 font-semibold">JS</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Joko Susilo</p>
                  <p className="text-sm text-slate-600">Owner, Fashion Store</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Pembukuan yang dulu selalu tertunda, sekarang jadi rapi dan teratur. Laporan keuangan siap pajak dalam satu klik. Highly recommended!
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">SN</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Siti Nurhasanah</p>
                  <p className="text-sm text-slate-600">Owner, Kuliner Home Industry</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Customer satisfaction meningkat drastis karena response time lebih cepat. Stok tidak pernah kehabisan lagi karena update otomatis.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">AF</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Ahmad Fauzi</p>
                  <p className="text-sm text-slate-600">Owner, Gadget Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Mengubah Bisnis Anda?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
            Bergabunglah dengan ribuan UMKM yang telah meningkatkan efisiensi dan keuntungan mereka dengan Chatat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/login" className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105">
              Mulai Gratis
            </Link>
            <Link href="#" className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors">
              Lihat Demo
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Link href="/" className="inline-flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Chatat</span>
                </Link>
              </div>
              <p className="text-sm leading-relaxed">
                Solusi cerdas untuk mengelola WhatsApp bisnis Anda secara otomatis dan efisien.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Produk</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/fitur" className="hover:text-white transition-colors">Fitur</Link></li>
                <li><Link href="/solusi" className="hover:text-white transition-colors">Solusi</Link></li>
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
                <li><Link href="https://t.me/chatatcommunity" className="hover:text-white transition-colors">Komunitas</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 Chatat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}