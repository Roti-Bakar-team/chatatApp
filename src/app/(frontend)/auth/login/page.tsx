"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BrainCircuit, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      const res = await signIn.email({ email, password });
      if (res.error) {
        setError(res.error.message || "Something went wrong.");
      } else {
        router.push("/dashboard");
      }
    } catch (e) {
      setError("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full lg:grid lg:grid-cols-2 bg-slate-900">
      <div className="relative hidden lg:flex flex-col items-center justify-center p-12 bg-gradient-to-br from-slate-900 to-slate-800 border-r border-slate-700">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md text-center"
        >
          <Link href="/" className="inline-flex items-center space-x-3 mb-8">
            <BrainCircuit className="w-12 h-12 text-indigo-400" />
            <span className="text-3xl font-bold text-white">Chatat AI</span>
          </Link>
          <h1 className="text-4xl font-bold text-white mt-4">
            Welcome Back to the Future of Chat
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Sign in to continue automating your business and delighting your
            customers.
          </p>
        </motion.div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute bottom-0 left-0 -z-10 h-1/3 w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_100%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex lg:hidden items-center space-x-2 mb-6"
            >
              <BrainCircuit className="w-8 h-8 text-indigo-400" />
              <span className="text-xl font-bold text-white">Chatat AI</span>
            </Link>
            <h2 className="text-3xl font-bold text-white">
              Sign in to your account
            </h2>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 shadow-2xl shadow-slate-900/50">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">
                  Email address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="test@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-200"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}

              <div>
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Signing in..."
                  ) : (
                    <>
                      Sign In <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
