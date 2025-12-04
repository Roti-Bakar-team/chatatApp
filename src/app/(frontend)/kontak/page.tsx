'use client';

import { useState } from 'react';
import { ArrowRight, Check, MessageSquare, TrendingUp, Clock, Users, Zap, Shield, BarChart3, Star, ChevronRight, Headphones, FileText, Settings, Lock, Globe, Smartphone, Database, Cloud, Cpu, Brain, Target, Award, PieChart, Bot, Crown, Gem, Rocket, Building2, Store, Briefcase, MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Instagram, Youtube, Heart, Lightbulb, Compass, Flag, Users2, Handshake, Calendar, Search, Filter, Tag, User, MessageCircle, ThumbsUp, Share2, Bookmark, Send, HelpCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Ponsel',
      details: ['+62 21 1234 5678', '+62 822 8470 3870'],
      description: 'Senin - Jumat, 08:00 - 17:00 WIB'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['hellochatat@gmail.com'],
      description: 'Tanggapan dalam 24 jam'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Kantor',
      details: ['Jl. Sudirman No. 123', 'Pekanbaru, Riau, Indonesia'],
      description: 'Hanya dengan janji temu'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'WhatsApp',
      details: ['+62 21 1234 5678', '+62 822 8470 3870'],
      description: 'Tersedia 24/7 untuk dukungan'
    }
  ];

  const faqs = [
    {
      question: 'Bagaimana cara memulai menggunakan Chatat?',
      answer: 'Pengguna bisa mendaftar gratis di website Chatat dan langsung mencoba semua fitur gratis'
    },
    {
      question: 'Apakah Chatat cocok untuk bisnis?',
      answer: 'Chatat cocok untuk semua jenis bisnis yang menggunakan WhatsApp untuk komunikasi dengan pelanggan, dari UMKM hingga Perusahaan'
    },
    {
      question: 'Bagaimana dengan keamanan data?',
      answer: 'Chatat menggunakan enkripsi end-to-end untuk melindungi data pengguna'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

  const whatsappMessage = `
    Nama: ${formData.name}
    Email: ${formData.email}
    Telepon: ${formData.phone || "-"}
    Perusahaan: ${formData.company || "-"}
    Subjek: ${formData.subject}
    Pesan:
    ${formData.message}
      `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const phoneNumber = "6282284703870";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    await new Promise(resolve => setTimeout(resolve, 1200));

    window.open(whatsappURL, "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Headphones className="w-4 h-4 mr-2" />
              Hubungi Kami
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Kami Siap
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                Membantu Anda
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ada pertanyaan tentang Chatat? Tim support kami siap membantu Anda 
              menemukan solusi terbaik untuk bisnis Anda
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{info.title}</h3>
                <div className="space-y-1 mb-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-slate-700">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-slate-500">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Kirim Pesan kepada Kami
            </h2>
            <p className="text-xl text-slate-600">
              Kami akan merespons pesan Anda
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Pesan Terkirim!
                </h3>
                <p className="text-slate-600 mb-6">
                  Terima kasih telah menghubungi kami. Tim kami akan segera
                  merespons pesan Anda.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Nama Lengkap <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Arnol"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="arnol@gmail.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Perusahaan
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="PT. Example"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Subjek <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Pertanyaan tentang Chatat"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Pesan <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                    placeholder="Ceritakan lebih lanjut tentang kebutuhan Anda..."
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-500">
                    <span className="text-red-600">*</span> Wajib diisi
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim Pesan
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Pertanyaan yang sering diajukan tentang Chatat
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-start">
                  <HelpCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-slate-600 ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap untuk Memulai?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
            Coba Chatat gratis dan rasakan sendiri bagaimana kami 
            dapat membantu bisnis berkembang
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