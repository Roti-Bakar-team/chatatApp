'use client';

import { useState } from 'react';
import { ArrowRight, Check, MessageSquare, TrendingUp, Clock, Users, Zap, Shield, BarChart3, Star, ChevronRight, Headphones, FileText, Settings, Lock, Globe, Smartphone, Database, Cloud, Cpu, Brain, Target, Award, PieChart } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function SolusiPage() {
  const [activeTab, setActiveTab] = useState('retail');

  const solutions = {
    retail: {
      title: 'Retail & E-commerce',
      description: 'Kelola ribuan pesanan harian dengan mudah',
      icon: <MessageSquare className="w-6 h-6" />,
      features: [
        'Auto-detect order dari chat WhatsApp',
        'Update stok real-time otomatis',
        'Generate invoice & kwitansi digital',
        'Tracking pengiriman terintegrasi',
        'Customer segmentation otomatis'
      ],
      benefits: [
        'Kurangi 80% waktu proses pesanan',
        'Hindari overselling dengan stok sync',
        'Tingkatkan customer satisfaction 45%',
        'Laporan penjualan harian otomatis'
      ]
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Solusi Terbaik untuk Bisnis
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Solusi WhatsApp Business
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                untuk Setiap Industri
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Chatat menawarkan solusi terpersonalisasi yang disesuaikan dengan kebutuhan spesifik industri Anda. 
              Dari retail hingga education, kami punya solusinya.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(solutions).map(([key, solution]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {solution.icon}
                <span className="ml-2">{solution.title}</span>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                    {solutions[activeTab].icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">
                      {solutions[activeTab].title}
                    </h2>
                    <p className="text-slate-600">{solutions[activeTab].description}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Fitur Utama</h3>
                  <div className="space-y-3">
                    {solutions[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Keuntungan Bisnis</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {solutions[activeTab].benefits.map((benefit, index) => (
                      <div key={index} className="bg-emerald-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Award className="w-4 h-4 text-emerald-600 mr-2" />
                          <span className="font-medium text-slate-900">Benefit {index + 1}</span>
                        </div>
                        <p className="text-sm text-slate-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-slate-900 mb-4">Dashboard Preview</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-slate-600">Total Pesanan Hari Ini</span>
                      <span className="font-bold text-emerald-600">+24%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-slate-600">Response Rate</span>
                      <span className="font-bold text-blue-600">98.5%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-slate-600">Customer Satisfaction</span>
                      <span className="font-bold text-purple-600">4.8/5</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm text-slate-600">Processing Time</span>
                      <span className="font-bold text-orange-600">-65%</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Efficiency Score</span>
                      <div className="flex items-center">
                        <div className="w-24 bg-slate-200 rounded-full h-2 mr-2">
                          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full" style={{width: '92%'}}></div>
                        </div>
                        <span className="text-sm font-bold text-slate-900">92%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Cara Kerja Chatat
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              3 langkah sederhana untuk transformasi bisnis WhatsApp
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Integrasi WhatsApp</h3>
              <p className="text-slate-600">
                Hubungkan WhatsApp dengan Chatat menggunakan scan barcode WhatsApp
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Konfigurasi Otomatis</h3>
              <p className="text-slate-600">
                AI kami akan mempelajari pola chat dan mengkonfigurasi 
                sistem otomatisasi yang sesuai
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Monitor & Optimasi</h3>
              <p className="text-slate-600">
                Performa bisnis real-time melalui dashboard
                dan dapatkan insight untuk pertumbuhan
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap untuk Transformasi Bisnis Anda?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
            Bergabunglah dengan ribuan bisnis yang telah meningkatkan efisiensi mereka dengan Chatat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="mailto:hallochatat@gmail.com" className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center justify-center">
              Konsultasi Gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}