"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Users,
  Zap,
  Shield,
  Heart,
  Lightbulb,
  Compass,
  Flag,
  Handshake,
  Target,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

function Counter({ from, to, label, description }: { from: number, to: number, label: string, description: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(from, to, {
        duration: 2,
        onUpdate(value) {
          if(ref.current) {
            ref.current.textContent = Math.round(value).toLocaleString("id-ID") + "+";
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, from, to]);
  
  if (label === 'Uptime') {
      return (
        <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">99.9%</div>
            <div className="text-lg font-semibold text-slate-100 mb-1">{label}</div>
            <p className="text-sm text-slate-400">{description}</p>
        </div>
      );
  }
  
  if (label === 'Dukungan') {
      return (
        <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">24/7</div>
            <div className="text-lg font-semibold text-slate-100 mb-1">{label}</div>
            <p className="text-sm text-slate-400">{description}</p>
        </div>
      );
  }

  return (
    <div className="text-center">
        <p ref={ref} className="text-4xl font-bold text-indigo-400 mb-2">{from.toLocaleString("id-ID")}+</p>
        <div className="text-lg font-semibold text-slate-100 mb-1">{label}</div>
        <p className="text-sm text-slate-400">{description}</p>
    </div>
  );
}


export default function TentangPage() {
  const [activeTab, setActiveTab] = useState("mission");

  const stats = [
    { from: 0, to: 10000, label: "Pengguna", description: "Bisnis mempercayai Chatat" },
    { from: 0, to: 1000000, label: "Pesan yang Diproses", description: "Setiap bulan" },
    { from: 0, to: 99.9, label: "Uptime", description: "Keandalan terjamin" },
    { from: 0, to: 24, label: "Dukungan", description: "Selalu ada untuk membantu" },
  ];

  const values = [
    { icon: <Users className="w-6 h-6 text-indigo-300" />, title: "Pengguna", description: "Kami menempatkan pengguna kami di pusat semua yang kami lakukan" },
    { icon: <Lightbulb className="w-6 h-6 text-indigo-300" />, title: "Inovasi", description: "Terus mendorong batas dengan AI dan otomatisasi" },
    { icon: <Shield className="w-6 h-6 text-indigo-300" />, title: "Kepercayaan & Keamanan", description: "Keamanan data pengguna adalah prioritas utama kami" },
    { icon: <Compass className="w-6 h-6 text-indigo-300" />, title: "Kesederhanaan", description: "Membuat proses bisnis yang kompleks menjadi sederhana" },
    { icon: <Heart className="w-6 h-6 text-indigo-300" />, title: "Hobi", description: "Kami menyukai apa yang kami lakukan dan itu terlihat dalam pekerjaan kami" },
    { icon: <Flag className="w-6 h-6 text-indigo-300" />, title: "Keunggulan", description: "Berkomitmen untuk memberikan pengalaman terbaik" },
  ];

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
                    <Handshake className="w-4 h-4 mr-2" />
                    Tentang Kami
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-slate-100 mb-6 leading-tight">
                    Mengubah Cara
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400 mt-2">
                        UMKM Berbisnis
                    </span>
                </h1>
                <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Kami adalah tim yang passionate tentang membantu UMKM Indonesia berkembang 
                    melalui teknologi AI dan otomatisasi yang mudah diakses.
                </p>
            </motion.div>
            <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.2 }}
                 className="grid md:grid-cols-4 gap-8 mt-16"
            >
                {stats.map((stat, index) => (
                  <Counter key={index} from={stat.from} to={stat.to} label={stat.label} description={stat.description} />
                ))}
            </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-100 mb-4">
                    Mengapa Kami Ada
                </h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
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
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                    }`}
                >
                    {tab.icon}
                    <span className="ml-2">{tab.label}</span>
                </button>
                ))}
            </div>

            <div className="bg-slate-800/50 rounded-3xl p-8 lg:p-12 border border-slate-700 min-h-[500px]">
                <AnimatePresence mode="wait">
                {activeTab === 'mission' && (
                    <motion.div key="mission" initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}} className="text-center max-w-4xl mx-auto">
                        <div className="w-20 h-20 bg-slate-700/50 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <Target className="w-10 h-10 text-indigo-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-100 mb-6">Misi Kami</h3>
                        <p className="text-xl text-slate-400 leading-relaxed mb-8">
                            Memberdayakan UMKM Indonesia dengan teknologi AI dan otomatisasi yang 
                            terjangkau, membantu mereka bersaing di era digital dan mencapai pertumbuhan berkelanjutan.
                        </p>
                    </motion.div>
                )}

                {activeTab === 'vision' && (
                    <motion.div key="vision" initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}} className="text-center max-w-4xl mx-auto">
                        <div className="w-20 h-20 bg-slate-700/50 rounded-lg flex items-center justify-center mx-auto mb-6">
                            <Compass className="w-10 h-10 text-sky-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-100 mb-6">Visi Kami</h3>
                        <p className="text-xl text-slate-400 leading-relaxed mb-8">
                            Menjadi platform WhatsApp Business terdepan di Asia Tenggara yang 
                            menghubungkan UMKM dengan peluang global melalui inovasi teknologi.
                        </p>
                    </motion.div>
                )}

                {activeTab === 'values' && (
                    <motion.div key="values" initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}} className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="w-20 h-20 bg-slate-700/50 rounded-lg flex items-center justify-center mx-auto mb-6">
                                <Heart className="w-10 h-10 text-rose-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-100 mb-6">Nilai-Nilai Kami</h3>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                                <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mb-4">
                                    {value.icon}
                                </div>
                                <h4 className="font-semibold text-slate-100 mb-2">{value.title}</h4>
                                <p className="text-sm text-slate-400">{value.description}</p>
                            </div>
                        ))}
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-100 mb-4">
                Pendiri Chatat Platform
                </h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Berpengalaman dan passionate tentang membantu UMKM berkembang
                </p>
            </div>

            <div className="flex justify-center">
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { name: 'Hadiid Andriy Yulison', role: 'Founder & Back End' },
                        { name: 'Arnolis', role: 'Founder & Front End' }
                    ].map((member, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 text-center"
                        >
                            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-3xl font-bold text-white">
                                {member.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-100 mb-2">{member.name}</h3>
                            <p className="text-indigo-400 font-medium mb-3">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </section>

       <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
                Bergabunglah dengan Kami
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Kami selalu mencari talenta terbaik yang passionate tentang membantu UMKM berkembang
            </p>
            <Link href="mailto:hallochatat@gmail.com" className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 transition-transform transform hover:scale-105 inline-flex items-center">
                Hubungi Kami
                <Mail className="ml-2 w-5 h-5" />
            </Link>
        </div>
      </section>
    </>
  );
}
