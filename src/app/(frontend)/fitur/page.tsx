"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  MessageSquare,
  TrendingUp,
  Clock,
  Users,
  Zap,
  Shield,
  BarChart3,
  Star,
  ChevronDown,
  Package,
  Bot,
  Smartphone,
  Cloud,
  Cpu,
  Database
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    id: 1,
    category: 'chat-management',
    title: 'Manajemen Chat Cerdas',
    description: 'Kelola ribuan percakapan WhatsApp dengan organisasi berbasis AI.',
    icon: <MessageSquare className="w-8 h-8 text-indigo-400" />,
    details: [
      'Klasifikasi pesan otomatis berbasis AI',
      'Penandaan prioritas untuk pesan penting',
      'Penyaringan cerdas dan kemampuan pencarian',
      'Label dan sistem tag kustom',
    ],
    benefits: [
      'Mengurangi waktu respon hingga 70%',
      'Menghindari pesan terlewat',
      'Pengalaman pelanggan lebih baik',
    ]
  },
  {
    id: 2,
    category: 'automation',
    title: 'Otomatisasi Pesanan',
    description: 'Deteksi dan proses pesanan otomatis langsung dari WhatsApp.',
    icon: <Bot className="w-8 h-8 text-sky-400" />,
    details: [
      'Mendeteksi pola pesanan dari chat secara otomatis',
      'Ekstraksi detail pesanan otomatis (item, jumlah, alamat)',
      'Pembuatan invoice otomatis dan pengiriman ke pelanggan',
    ],
    benefits: [
      'Proses pesanan 3x lebih cepat',
      'Mengurangi human error hingga 90%',
      'Akurasi pesanan lebih tinggi',
    ]
  },
  {
    id: 3,
    category: 'inventory',
    title: 'Manajemen Stok',
    description: 'Pantau dan kelola stok secara real-time dengan sinkronisasi otomatis.',
    icon: <Package className="w-8 h-8 text-emerald-400" />,
    details: [
      'Sinkronisasi stok real-time di semua channel',
      'Peringatan stok menipis dan notifikasi otomatis',
      'Prediksi kebutuhan stok berbasis data penjualan',
    ],
    benefits: [
      'Mencegah kehabisan stok hingga 95%',
      'Optimalkan level persediaan',
      'Mengurangi biaya penyimpanan',
    ]
  },
  {
    id: 4,
    category: 'analytics',
    title: 'Analitik Lanjutan',
    description: 'Dashboard komprehensif dengan business intelligence.',
    icon: <BarChart3 className="w-8 h-8 text-rose-400" />,
    details: [
      'Dashboard penjualan real-time',
      'Analitik perilaku pelanggan',
      'Perkiraan pendapatan dan cash flow',
      'Metrik performa produk terlaris',
    ],
    benefits: [
      'Pengambilan keputusan berbasis data',
      'Identifikasi tren pasar lebih awal',
      'Wawasan untuk strategi marketing',
    ]
  },
  {
    id: 5,
    category: 'crm',
    title: 'Customer Relationship Management',
    description: 'Database pelanggan terpusat dengan tampilan 360 derajat.',
    icon: <Users className="w-8 h-8 text-amber-400" />,
    details: [
      'Database pelanggan terpusat',
      'Pelacakan riwayat pembelian dan interaksi',
      'Segmentasi pelanggan otomatis',
      'Manajemen program loyalitas',
    ],
    benefits: [
      'Meningkatkan retensi pelanggan hingga 40%',
      'Pengalaman pelanggan lebih personal',
      'Targeting promosi yang lebih efektif',
    ]
  },
  {
    id: 6,
    category: 'security',
    title: 'Keamanan Enterprise',
    description: 'Keamanan data tingkat enterprise dengan standar compliance.',
    icon: <Shield className="w-8 h-8 text-purple-400" />,
    details: [
      'Enkripsi end-to-end pada semua data',
      'Backup data harian otomatis dan pemulihan',
      'Pencatatan akses dan monitoring aktivitas mencurigakan',
    ],
    benefits: [
      'Melindungi data sensitif pelanggan',
      'Memenuhi persyaratan regulasi data',
      'Meningkatkan kepercayaan pelanggan',
    ]
  }];

const categories = [
    { id: 'all', name: 'Semua Fitur', icon: <Star className="w-4 h-4" /> },
    { id: 'chat-management', name: 'Chat Management', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'automation', name: 'Automation', icon: <Bot className="w-4 h-4" /> },
    { id: 'inventory', name: 'Inventory', icon: <Package className="w-4 h-4" /> },
    { id: 'analytics', name: 'Analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'crm', name: 'CRM', icon: <Users className="w-4 h-4" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-4 h-4" /> }
];

export default function FiturPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeCategory);

  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
                <div className="inline-flex items-center bg-slate-800 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-slate-700">
                    <Zap className="w-4 h-4 mr-2" />
                    Fitur Bisnis Modern
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-slate-100 mb-6 leading-tight">
                    Semua yang Dibutuhkan
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400 mt-2">
                        untuk Mengelola WhatsApp Bisnis
                    </span>
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                    Chatat menyediakan fitur untuk mengoptimalkan operasional bisnis
                </p>
            </motion.div>
        </div>
      </section>
      
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category.id
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    {category.icon}
                    <span className="ml-2">{category.name}</span>
                  </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredFeatures.map((feature) => (
                  <motion.div
                    key={feature.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden"
                    onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
                  >
                    <div className="p-8 cursor-pointer group">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-slate-700 transition-colors">
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-100">{feature.title}</h3>
                          <p className="text-sm text-slate-400">{feature.category}</p>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${
                          expandedFeature === feature.id ? 'rotate-180' : ''
                        }`} />
                      </div>
                      <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                    </div>
                    
                    <AnimatePresence>
                    {expandedFeature === feature.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-700 pt-6 px-8 pb-8">
                          <div className="mb-6">
                            <h4 className="font-semibold text-slate-100 mb-3">Fitur Detail:</h4>
                            <ul className="space-y-2">
                              {feature.details.map((detail, index) => (
                                <li key={index} className="flex items-start">
                                  <Check className="w-4 h-4 text-indigo-400 mr-2 mt-1 flex-shrink-0" />
                                  <span className="text-sm text-slate-300">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-100 mb-3">Keuntungan Bisnis:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {feature.benefits.map((benefit, index) => (
                                <div key={index} className="bg-slate-700/50 p-2 rounded-lg">
                                  <p className="text-xs text-slate-300">{benefit}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">
              Spesifikasi Teknis
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Teknologi terkini untuk performa dan keandalan maksimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Smartphone className="w-8 h-8 text-blue-400" />, title: "Perangkat Seluler", desc: "Responsive design untuk semua device" },
              { icon: <Cloud className="w-8 h-8 text-green-400" />, title: "Cloud", desc: "Hingga 99.9%" },
              { icon: <Cpu className="w-8 h-8 text-purple-400" />, title: "Didukung AI", desc: "Model Kolosal Ai, Gemini AI" },
              { icon: <Database className="w-8 h-8 text-orange-400" />, title: "Basis Data", desc: "Tangani jutaan pesan" },
            ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-800 p-6 rounded-2xl text-center border border-slate-700"
                >
                    <div className="w-16 h-16 bg-slate-700/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                        {item.icon}
                    </div>
                    <h3 className="font-semibold text-slate-100 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
                Siap Mencoba Semua Fitur Ini?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Mulai gratis 14 hari dan rasakan sendiri bagaimana Chatat dapat 
                mengubah cara Anda mengelola bisnis WhatsApp
            </p>
            <Link href="/dashboard" className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 transition-transform transform hover:scale-105 inline-flex items-center">
                Mulai Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
        </div>
      </section>
    </>
  );
}
