'use client';

import { useState } from 'react';
import { ArrowRight, Check, MessageSquare, TrendingUp, Clock, Users, Zap, Shield, BarChart3, Star, ChevronRight, Headphones, FileText, Settings, Lock, Globe, Smartphone, Database, Cloud, Cpu, Brain, Target, Award, PieChart, Bot, Filter, Search, Bell, Calendar, Mail, Phone, MapPin, CreditCard, Package, ShoppingCart, UserPlus, Activity, AlertCircle, CheckCircle, XCircle, Download, Upload, RefreshCw, Eye, EyeOff, Edit, Trash2, Plus, Minus, ChevronDown, ChevronUp, Menu, X as Close } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function FiturPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const features = [
  {
    id: 1,
    category: 'chat-management',
    title: 'Manajemen Chat Cerdas',
    description: 'Kelola ribuan percakapan WhatsApp dengan organisasi berbasis AI',
    icon: <MessageSquare className="w-6 h-6" />,
    details: [
      'Klasifikasi pesan otomatis berbasis AI',
      'Penandaan prioritas untuk pesan penting',
      'Penyaringan cerdas dan kemampuan pencarian',
      'Label dan sistem tag kustom',
      'Penghitung pesan belum dibaca dan notifikasi'
    ],
    benefits: [
      'Mengurangi waktu respon hingga 70%',
      'Menghindari pesan terlewat',
      'Meningkatkan kolaborasi tim',
      'Pengalaman pelanggan lebih baik'
    ]
  },
  {
    id: 2,
    category: 'automation',
    title: 'Otomatisasi Pesanan',
    description: 'Deteksi dan proses pesanan otomatis langsung dari WhatsApp',
    icon: <ShoppingCart className="w-6 h-6" />,
    details: [
      'Mendeteksi pola pesanan dari chat secara otomatis',
      'Ekstraksi detail pesanan otomatis',
      'Pembuatan invoice otomatis',
      'Pelacakan pesanan secara real-time'
    ],
    benefits: [
      'Proses pesanan 3x lebih cepat',
      'Mengurangi human error hingga 90%',
      'Pemrosesan pesanan 24/7',
      'Akurasi pesanan lebih tinggi'
    ]
  },
  {
    id: 3,
    category: 'inventory',
    title: 'Manajemen Stok',
    description: 'Pantau dan kelola stok secara real-time dengan sinkronisasi otomatis',
    icon: <Package className="w-6 h-6" />,
    details: [
      'Sinkronisasi stok real-time',
      'Peringatan stok menipis dan notifikasi'
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
    description: 'Dashboard komprehensif dengan business intelligence',
    icon: <BarChart3 className="w-6 h-6" />,
    details: [
      'Dashboard penjualan real-time',
      'Analitik perilaku pelanggan',
      'Perkiraan pendapatan',
      'Metrik performa produk'
    ],
    benefits: [
      'Pengambilan keputusan berbasis data',
      'Identifikasi tren lebih awal',
      'Wawasan bisnis lebih baik',
      'Keunggulan kompetitif'
    ]
  },
  {
    id: 5,
    category: 'crm',
    title: 'Customer Relationship Management',
    description: 'Database pelanggan terpusat dengan tampilan 360 derajat',
    icon: <Users className="w-6 h-6" />,
    details: [
      'Database pelanggan terpusat',
      'Pelacakan riwayat pembelian',
      'Segmentasi pelanggan',
      'Manajemen program loyalitas',
      'Riwayat komunikasi',
      'Pesan personalisasi'
    ],
    benefits: [
      'Meningkatkan retensi pelanggan hingga 40%',
      'Pengalaman pelanggan lebih personal',
      'Wawasan pelanggan lebih baik',
      'Targeting yang lebih tepat'
    ]
  },
  {
    id: 6,
    category: 'security',
    title: 'Keamanan Enterprise',
    description: 'Keamanan data tingkat enterprise dengan standar compliance',
    icon: <Shield className="w-6 h-6" />,
    details: [
      'Enkripsi end-to-end',
      'Backup data dan pemulihan',
      'Pencatatan akses dan monitoring'
    ],
    benefits: [
      'Lindungi data pelanggan',
      'Memenuhi persyaratan regulasi',
      'Mencegah kebocoran data',
      'Meningkatkan kepercayaan pelanggan'
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

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Fitur Bisnis Modern
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Semua yang Dibutuhkan
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                untuk Mengelola WhatsApp Bisnis
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Chatat menyediakan fitur untuk mengoptimalkan operasional bisnis
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 cursor-pointer group"
                onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-emerald-200 transition-colors">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.category}</p>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${
                    expandedFeature === feature.id ? 'rotate-180' : ''
                  }`} />
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
                
                {expandedFeature === feature.id && (
                  <div className="border-t border-slate-200 pt-6 mt-6">
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Fitur Detail:</h4>
                      <ul className="space-y-2">
                        {feature.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Keuntungan Bisnis:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {feature.benefits.map((benefit, index) => (
                          <div key={index} className="bg-emerald-50 p-2 rounded-lg">
                            <p className="text-xs text-slate-700">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Spesifikasi Teknis
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Teknologi terkini untuk performa dan keandalan maksimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Perangkat Seluler</h3>
              <p className="text-sm text-slate-600">Responsive design untuk semua device</p>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Cloud</h3>
              <p className="text-sm text-slate-600">Hingga 99.9%</p>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Didukung AI</h3>
              <p className="text-sm text-slate-600">Model Kolosal Ai, Gemini AI</p>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Basis Data</h3>
              <p className="text-sm text-slate-600">Tangani jutaan pesan</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Mencoba Semua Fitur Ini?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
            Mulai gratis 14 hari dan rasakan sendiri bagaimana Chatat dapat 
            mengubah cara Anda mengelola bisnis WhatsApp
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
        </div>
      </section>

      <Footer />
    </div>
  );
}