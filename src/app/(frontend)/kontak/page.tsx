"use client";

import { useState } from "react";
import {
  Headphones,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  CheckCircle,
  Send,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6 text-indigo-300" />,
    title: "Ponsel",
    details: ["+62 21 1234 5678", "+62 822 8470 3870"],
    description: "Senin - Jumat, 08:00 - 17:00 WIB",
  },
  {
    icon: <Mail className="w-6 h-6 text-indigo-300" />,
    title: "Email",
    details: ["hellochatat@gmail.com"],
    description: "Tanggapan dalam 24 jam",
  },
  {
    icon: <MapPin className="w-6 h-6 text-indigo-300" />,
    title: "Kantor",
    details: ["Jl. Sudirman No. 123", "Pekanbaru, Riau, Indonesia"],
    description: "Hanya dengan janji temu",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-indigo-300" />,
    title: "WhatsApp",
    details: ["+62 822 8470 3870"],
    description: "Tersedia 24/7 untuk dukungan",
  },
];

const faqs = [
  {
    question: "Bagaimana cara memulai menggunakan Chatat?",
    answer:
      "Pengguna bisa mendaftar gratis di website Chatat dan langsung mencoba semua fitur gratis.",
  },
  {
    question: "Apakah Chatat cocok untuk bisnis?",
    answer:
      "Chatat cocok untuk semua jenis bisnis yang menggunakan WhatsApp untuk komunikasi dengan pelanggan, dari UMKM hingga Perusahaan.",
  },
  {
    question: "Bagaimana dengan keamanan data?",
    answer:
      "Chatat menggunakan enkripsi end-to-end untuk melindungi data pengguna.",
  },
];

export default function KontakPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    await new Promise((resolve) => setTimeout(resolve, 1200));
    window.open(whatsappURL, "_blank");
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
    }, 3000);
  };

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
                    <Headphones className="w-4 h-4 mr-2" />
                    Hubungi Kami
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-slate-100 mb-6 leading-tight">
                    Kami Siap
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400 mt-2">
                        Membantu Anda
                    </span>
                </h1>
                <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Ada pertanyaan tentang Chatat? Tim support kami siap membantu Anda 
                    menemukan solusi terbaik untuk bisnis Anda.
                </p>
            </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-slate-800 p-8 rounded-2xl border border-slate-700"
              >
                <div className="w-16 h-16 bg-slate-700/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">{info.title}</h3>
                <div className="space-y-1 mb-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-slate-300">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-slate-500">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">
              Kirim Pesan kepada Kami
            </h2>
            <p className="text-xl text-slate-400">
              Kami akan merespons pesan Anda
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/50 rounded-3xl shadow-xl p-8 lg:p-12 border border-slate-700"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                    <div className="w-20 h-20 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-4">
                        Pesan Terkirim!
                    </h3>
                    <p className="text-slate-400">
                        Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.
                    </p>
                </motion.div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-300">Nama Lengkap <span className="text-red-500">*</span></Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Arnol" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-300">Email <span className="text-red-500">*</span></Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="arnol@gmail.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-slate-300">Subjek <span className="text-red-500">*</span></Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="Pertanyaan tentang Chatat" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-300">Pesan <span className="text-red-500">*</span></Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} placeholder="Ceritakan lebih lanjut tentang kebutuhan Anda..." />
                </div>
                <div className="flex items-center justify-end">
                  <Button type="submit" disabled={isSubmitting} className="bg-indigo-600 hover:bg-indigo-700 w-full sm:w-auto">
                    {isSubmitting ? "Mengirim..." : <><Send className="mr-2 h-4 w-4" /> Kirim Pesan</>}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-400">
              Pertanyaan yang sering diajukan tentang Chatat
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
              >
                <h3 className="text-lg font-semibold text-slate-100 mb-3 flex items-start">
                  <HelpCircle className="w-5 h-5 text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-slate-400 ml-8">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
                Siap untuk Memulai?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Coba Chatat gratis dan rasakan sendiri bagaimana kami 
                dapat membantu bisnis berkembang
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
