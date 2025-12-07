"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrainCircuit, ArrowRight } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative inline-block mb-8">
          <motion.div
             initial={{ scale: 0.8 }}
             animate={{ scale: 1 }}
             transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              404
            </h1>
          </motion.div>
          <motion.div 
            className="absolute -top-4 -right-4"
            animate={{ 
                rotate: [0, -10, 10, -10, 0],
                x: [0, 5, -5, 5, 0],
            }}
            transition={{ 
                duration: 0.8, 
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2
            }}
          >
            <BrainCircuit className="w-16 h-16 text-sky-400" />
          </motion.div>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Maaf, sepertinya AI kami tidak dapat menemukan halaman yang Anda cari. 
          Mungkin tersesat di antara sirkuit digital.
        </p>

        <Link
          href="/"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center group"
        >
            <ArrowRight className="w-5 h-5 mr-2 transition-transform transform rotate-180 group-hover:-translate-x-1" />
            Kembali ke Beranda
        </Link>
      </motion.div>
    </div>
  );
}
