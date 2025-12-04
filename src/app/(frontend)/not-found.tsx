'use client';

import { useState } from 'react';
import { ArrowRight, Home, Search, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NotFoundPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const popularPages = [
    {
      title: 'Beranda',
      href: '/',
      description: 'Kembali ke halaman utama'
    },
    {
      title: 'Solusi',
      href: '/solusi',
      description: 'Lihat solusi untuk bisnis Anda'
    },
    {
      title: 'Fitur',
      href: '/fitur',
      description: 'Jelajari semua fitur Chatat'
    },
    {
      title: 'Kontak',
      href: '/kontak',
      description: 'Hubungi tim support kami'
    }
  ];

  const filteredPages = popularPages.filter(page =>
    page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                404
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white text-xl font-bold">404</span>
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Oops! Halaman Tidak Ditemukan
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari halaman..."
                  className="w-full pl-12 pr-16 py-4 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                {isSearching && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  </div>
                )}
              </div>
            </form>
          </div>

          {searchQuery && (
            <div className="max-w-2xl mx-auto mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Hasil Pencarianan untuk "{searchQuery}"
              </h3>
              <p className="text-slate-600 mb-8">
                {filteredPages.length} halaman ditemukan
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group block"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Home className="w-8 h-8 text-emerald-600" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
                  {page.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {!searchQuery && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Coba halaman populer ini:
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularPages.map((page, index) => (
                  <Link
                    key={index}
                    href={page.href}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group block"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Home className="w-8 h-8 text-emerald-600" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
                      {page.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {page.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center text-slate-500 hover:text-slate-700 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span className="ml-2">Kembali ke Beranda</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}