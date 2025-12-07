"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  BrainCircuit,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-indigo-500 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <BrainCircuit className="w-8 h-8 text-indigo-400" />
              <span className="text-xl font-bold">Chatat AI</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/solusi" className="hover:text-indigo-400 transition-colors">Solusi</Link>
              <Link href="/fitur" className="hover:text-indigo-400 transition-colors">Fitur</Link>
              <Link href="/tentang" className="hover:text-indigo-400 transition-colors">Tentang</Link>
              <Link href="/kontak" className="hover:text-indigo-400 transition-colors">Kontak</Link>
              <Link
                href="/dashboard"
                className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-md transition-colors font-semibold"
              >
                Masuk
              </Link>
            </nav>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                 <Link href="/solusi" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800" onClick={() => setIsMenuOpen(false)}>Solusi</Link>
                 <Link href="/fitur" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800" onClick={() => setIsMenuOpen(false)}>Fitur</Link>
                 <Link href="/tentang" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800" onClick={() => setIsMenuOpen(false)}>Tentang</Link>
                 <Link href="/kontak" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800" onClick={() => setIsMenuOpen(false)}>Kontak</Link>
                <Link
                  href="/dashboard"
                  className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 px-5 py-3 rounded-md transition-colors mt-2"
                >
                  Masuk
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/50 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="inline-flex items-center space-x-2 mb-4">
                <BrainCircuit className="w-8 h-8 text-indigo-400" />
                <span className="text-xl font-bold text-white">Chatat AI</span>
              </Link>
              <p className="text-sm leading-relaxed pr-8">
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
                <li><Link href="https://t.me/chatatcommunity" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Komunitas</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Chatat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}