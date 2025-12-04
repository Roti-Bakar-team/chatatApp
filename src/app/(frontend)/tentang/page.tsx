'use client';

import { useState } from 'react';
import { ArrowRight, Check, MessageSquare, TrendingUp, Clock, Users, Zap, Shield, BarChart3, Star, ChevronRight, Headphones, FileText, Settings, Lock, Globe, Smartphone, Database, Cloud, Cpu, Brain, Target, Award, PieChart, Bot, Crown, Gem, Rocket, Building2, Store, Briefcase, MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Instagram, Youtube, Heart, Lightbulb, Compass, Flag, Users2, Handshake } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TentangPage() {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      name: 'Hadiid Andriy Yulison',
      role: 'Founder & Back End',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Arnolis',
      role: 'Founder & Front End',
      image: '/api/placeholder/300/300'
    },
  ];

  const stats = [
    {
      number: '10,000+',
      label: 'Pengguna',
      description: 'Bisnis mempercayai Chatat'
    },
    {
      number: '1M+',
      label: 'Pesan yang Diproses',
      description: 'Setiap bulan'
    },
    {
      number: '99.99%',
      label: 'Uptime',
      description: 'Keandalan terjamin'
    },
    {
      number: '24/7',
      label: 'Dukungan',
      description: 'Selalu ada untuk membantu'
    }
  ];

  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Pengguna',
      description: 'Kami menempatkan pengguna kami di pusat semua yang kami lakukan'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Inovasi',
      description: 'Terus mendorong batas dengan AI dan otomatisasi'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Kepercayaan & Keamanan',
      description: 'Keamanan data pengguna adalah prioritas utama kami'
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: 'Kesederhanaan',
      description: 'Membuat proses bisnis yang kompleks menjadi sederhana dan dapat diakses'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Hobi',
      description: 'Kami menyukai apa yang kami lakukan dan itu terlihat dalam pekerjaan kami'
    },
    {
      icon: <Flag className="w-6 h-6" />,
      title: 'Keunggulan',
      description: 'Berkomitmen untuk memberikan pengalaman terbaik'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Handshake className="w-4 h-4 mr-2" />
              Tentang Kami
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Mengubah Cara
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                UMKM Berbisnis
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Kami adalah tim yang passionate tentang membantu UMKM Indonesia berkembang 
              melalui teknologi AI dan otomatisasi yang mudah diakses.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-slate-900 mb-1">{stat.label}</div>
                <div className="text-sm text-slate-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Mengapa Kami Ada
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Misi, visi, dan nilai-nilai yang memandu setiap langkah kami
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'mission', label: 'Misi', icon: <Target className="w-4 h-4" /> },
              { id: 'vision', label: 'Visi', icon: <Compass className="w-4 h-4" /> },
              { id: 'values', label: 'Nilai', icon: <Heart className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 lg:p-12">
            {activeTab === 'mission' && (
              <div className="text-center max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Misi Kami</h3>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  Memberdayakan UMKM Indonesia dengan teknologi AI dan otomatisasi yang 
                  terjangkau, membantu mereka bersaing di era digital dan mencapai pertumbuhan berkelanjutan.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-2xl">
                    <h4 className="font-semibold text-slate-900 mb-2">Demokratisasi Teknologi</h4>
                    <p className="text-sm text-slate-600">Membuat AI dan otomatisasi accessible untuk semua bisnis</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl">
                    <h4 className="font-semibold text-slate-900 mb-2">Efisiensi Operasional</h4>
                    <p className="text-sm text-slate-600">Menghilangkan manual tasks yang membuang waktu</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl">
                    <h4 className="font-semibold text-slate-900 mb-2">Pertumbuhan Bisnis</h4>
                    <p className="text-sm text-slate-600">Membantu UMKM scale dan berkembang pesat</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="text-center max-w-4xl mx-auto">
                <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Compass className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Visi Kami</h3>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  Menjadi platform WhatsApp Business terdepan di Asia Tenggara yang 
                  menghubungkan UMKM dengan peluang global melalui inovasi teknologi.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl">
                    <h4 className="font-semibold text-slate-900 mb-2">2026: 100,000 Users</h4>
                    <p className="text-sm text-slate-600">Melayani 100 ribu UMKM di seluruh Indonesia</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl">
                    <h4 className="font-semibold text-slate-900 mb-2">2030: Regional Expansion</h4>
                    <p className="text-sm text-slate-600">Ekspansi ke Malaysia, Singapura, dan Thailand</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">Nilai-Nilai Kami</h3>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    Prinsip-prinsip yang memandu setiap keputusan dan tindakan kami
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                        {value.icon}
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-2">{value.title}</h4>
                      <p className="text-sm text-slate-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Pendiri Chatat Platform
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Berpengalaman dan passionate tentang membantu UMKM berkembang
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bergabunglah dengan Kami
          </h2>
          <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
            Kami selalu mencari talenta terbaik yang passionate tentang membantu UMKM berkembang
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="mailto:hallochatat@gmail.com" className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center justify-center">
              Hubungi Kami
              <Mail className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}