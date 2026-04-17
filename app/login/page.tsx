"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Invalid credentials. Please try again.");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] relative overflow-hidden px-6">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FF6A00]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-zinc-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* LOGIN CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-zinc-900/40 backdrop-blur-2xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
          
          {/* LOGO & HEADER */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FF6A00] rounded-2xl mb-6 shadow-lg shadow-[#FF6A00]/20 rotate-3 group">
              <span className="text-black font-black italic text-2xl group-hover:scale-110 transition-transform">G</span>
            </div>
            <h1 className="text-3xl font-black italic tracking-tighter uppercase text-white">
              Welcome <span className="text-[#FF6A00]">Back</span>
            </h1>
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mt-2">
              Access your training portal
            </p>
          </div>

          <div className="space-y-6">
            {/* EMAIL FIELD */}
            <div>
              <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-2 ml-1">
                Email Address
              </label>
              <input
                type="email"
                className="block w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#FF6A00]/50 focus:border-[#FF6A00] transition-all text-sm font-medium"
                placeholder="athlete@gymflow.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* PASSWORD FIELD */}
            <div>
              <label className="block text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-2 ml-1">
                Password
              </label>
              <input
                type="password"
                className="block w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#FF6A00]/50 focus:border-[#FF6A00] transition-all text-sm font-medium"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* ERROR MESSAGE */}
            {error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-500/10 border border-red-500/20 py-3 px-4 rounded-xl"
              >
                <p className="text-red-500 text-[10px] text-center font-black uppercase tracking-wider">
                  {error}
                </p>
              </motion.div>
            )}

            {/* LOGIN BUTTON */}
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full mt-4 relative group overflow-hidden bg-[#FF6A00] py-4 rounded-2xl text-black font-black uppercase tracking-[0.2em] text-xs transition-all hover:bg-white active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-[#FF6A00]/10"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-black" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Syncing...
                  </>
                ) : (
                  "Enter Portal"
                )}
              </span>
            </button>
          </div>

          {/* FOOTER */}
          <div className="mt-10 flex flex-col gap-4 text-center">
            <a href="#" className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest hover:text-[#FF6A00] transition">
              Forgot Password?
            </a>
            <div className="h-[1px] w-full bg-white/5"></div>
            <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
              Need access? <a href="/register" className="text-white hover:text-[#FF6A00] transition">Apply to Join</a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}