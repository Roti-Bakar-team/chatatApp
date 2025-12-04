'use client';

import { useState } from 'react';
import { Mail, ArrowLeft, ArrowRight, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function LupaPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [step, setStep] = useState(1); // 1: email input, 2: success message

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email harus diisi');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Format email tidak valid');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSuccess(true);
    setStep(2);
  };

  const handleResend = async () => {
    setIsLoading(true);
    // Simulate resend API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center px-4 py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2310b981" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">Chatat</span>
          </Link>
        </div>

        {/* Forgot Password Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {step === 1 ? (
            <>
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Lupa Password?</h1>
                <p className="text-slate-600">
                  Jangan khawatir, kami akan mengirimkan link reset password ke email Anda
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
                        error ? 'border-red-500' : 'border-slate-200'
                      }`}
                      placeholder="nama@email.com"
                      disabled={isLoading}
                    />
                  </div>
                  {error && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {error}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim Link Reset
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Back to Login */}
              <div className="text-center mt-6">
                <Link
                  href="/auth/login"
                  className="text-slate-500 hover:text-slate-700 text-sm flex items-center justify-center"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Kembali ke login
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Email Terkirim!</h3>
                <p className="text-slate-600 mb-6">
                  Kami telah mengirimkan link reset password ke{' '}
                  <span className="font-medium text-slate-900">{email}</span>
                </p>
                
                <div className="bg-slate-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-slate-600 mb-2">
                    <strong>Tidak menerima email?</strong>
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1 text-left">
                    <li>• Periksa folder spam/junk</li>
                    <li>• Pastikan email yang dimasukkan benar</li>
                    <li>• Tunggu beberapa menit untuk menerima email</li>
                  </ul>
                </div>

                <button
                  onClick={handleResend}
                  disabled={isLoading}
                  className="w-full bg-white border border-slate-200 text-slate-700 py-3 px-4 rounded-lg font-medium hover:bg-slate-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mb-4"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-slate-700 mr-2"></div>
                      Mengirim ulang...
                    </>
                  ) : (
                    'Kirim Ulang Email'
                  )}
                </button>

                <Link
                  href="/auth/login"
                  className="text-slate-500 hover:text-slate-700 text-sm flex items-center justify-center"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Kembali ke login
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Help Section */}
        {step === 1 && (
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm mb-4">
              Masih mengalami masalah?
            </p>
            <div className="space-y-2">
              <Link
                href="/kontak"
                className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center justify-center"
              >
                Hubungi Support
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link
                href="/help"
                className="text-slate-500 hover:text-slate-700 text-sm flex items-center justify-center"
              >
                <MessageSquare className="w-4 h-4 mr-1" />
                Pusat Bantuan
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}