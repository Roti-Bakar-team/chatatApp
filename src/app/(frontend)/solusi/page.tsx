"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  MessageSquare,
  Target,
  Award,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type SolutionKey = "retail";

const solutions = {
  retail: {
    title: "Retail & E-commerce",
    description: "Kelola ribuan pesanan harian dengan mudah",
    icon: <MessageSquare className="w-6 h-6 text-indigo-300" />,
    features: [
      "Auto-detect order dari chat WhatsApp",
      "Update stok real-time otomatis",
      "Generate invoice & kwitansi digital",
      "Tracking pengiriman terintegrasi",
      "Customer segmentation otomatis",
    ],
    benefits: [
      "Kurangi 80% waktu proses pesanan",
      "Hindari overselling dengan stok sync",
      "Tingkatkan customer satisfaction 45%",
      "Laporan penjualan harian otomatis",
    ],
  },
};

export default function SolusiPage() {
  const [activeTab, setActiveTab] = useState<SolutionKey>("retail");

  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center bg-slate-800 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-slate-700">
            <Target className="w-4 h-4 mr-2" />
            Solusi Terbaik untuk Bisnis
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-slate-100 mb-6 leading-tight">
            Solusi WhatsApp Business
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400 mt-2">
              untuk Setiap Industri
            </span>
          </h1>

          <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Chatat menawarkan solusi terpersonalisasi yang disesuaikan dengan
            kebutuhan spesifik industri Anda. Dari retail hingga education, kami
            punya solusinya.
          </p>
        </motion.div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {Object.entries(solutions).map(([key, solution]) => {
              const k = key as SolutionKey;
              return (
                <button
                  key={k}
                  onClick={() => setActiveTab(k)}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all text-base ${
                    activeTab === k
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                  }`}
                >
                  {solution.icon}
                  <span className="ml-2">{solution.title}</span>
                </button>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-slate-800/50 rounded-3xl shadow-2xl p-8 lg:p-12 border border-slate-700"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mr-4">
                    {solutions[activeTab].icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-100">
                      {solutions[activeTab].title}
                    </h2>
                    <p className="text-slate-400">
                      {solutions[activeTab].description}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-100 mb-4">
                    Fitur Utama
                  </h3>
                  <div className="space-y-3">
                    {solutions[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-4">
                    Keuntungan Bisnis
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {solutions[activeTab].benefits.map((benefit, index) => (
                      <div key={index} className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                        <div className="flex items-center mb-2">
                          <Award className="w-4 h-4 text-indigo-400 mr-2" />
                          <span className="font-medium text-slate-100">
                            Benefit {index + 1}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                  <h4 className="font-semibold text-slate-100 mb-4">
                    Dashboard Preview
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-sm text-slate-400">
                        Total Pesanan Hari Ini
                      </span>
                      <span className="font-bold text-emerald-400">+24%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-sm text-slate-400">
                        Response Rate
                      </span>
                      <span className="font-bold text-sky-400">98.5%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-sm text-slate-400">
                        Customer Satisfaction
                      </span>
                      <span className="font-bold text-purple-400">4.8/5</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-700">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">
                        Efficiency Score
                      </span>
                      <div className="flex items-center">
                        <div className="w-24 bg-slate-700 rounded-full h-2 mr-2">
                          <div
                            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                            style={{ width: "92%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-bold text-slate-100">
                          92%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">
              Cara Kerja Chatat
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              3 langkah sederhana untuk transformasi bisnis WhatsApp
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrasi WhatsApp",
                desc: "Hubungkan WhatsApp dengan Chatat menggunakan scan barcode WhatsApp",
              },
              {
                title: "Konfigurasi Otomatis",
                desc: "AI kami akan mempelajari pola chat dan mengkonfigurasi sistem otomatisasi yang sesuai",
              },
              {
                title: "Monitor & Optimasi",
                desc: "Performa bisnis real-time melalui dashboard dan dapatkan insight untuk pertumbuhan",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-indigo-400">{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap untuk Transformasi Bisnis Anda?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
            Bergabunglah dengan ribuan bisnis yang telah meningkatkan efisiensi
            mereka dengan Chatat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:hallochatat@gmail.com"
              className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 transition-transform transform hover:scale-105 inline-flex items-center justify-center"
            >
              Konsultasi Gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}