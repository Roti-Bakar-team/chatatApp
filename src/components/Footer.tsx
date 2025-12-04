'use client';

import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    produk: [
      { name: 'Fitur', href: '/fitur' },
      { name: 'Solusi', href: '/solusi' },
      { name: 'Demo', href: '#' }
    ],
    perusahaan: [
      { name: 'Tentang Kami', href: '/tentang' },
      { name: 'Kontak', href: '/kontak' }
    ],
    support: [
      { name: 'Panduan', href: '#' },
      { name: 'Komunitas', href: 'https://t.me/chatatcommunity' }
    ]
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Chatat</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Solusi cerdas untuk mengelola WhatsApp bisnis Anda secara otomatis dan efisien
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Produk</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.produk.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Bantuan</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
          <p>© 2025 Chatat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}