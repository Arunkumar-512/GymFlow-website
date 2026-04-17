"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert("Account created successfully! Welcome to the team.");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#050505] selection:bg-[#FF6A00]/30">
      
      {/* --- LEFT SIDE: HIGH IMPACT VISUAL (Desktop Only) --- */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-zinc-900 items-center justify-center">
        {/* Background Overlay & Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/40 to-[#FF6A00]/20 z-10" />
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125" />
        </div>
        
        {/* Branding/Marketing Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 p-16 max-w-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#FF6A00] rounded-lg flex items-center justify-center rotate-3">
              <span className="text-black font-black italic">G</span>
            </div>
            <span className="text-white font-black italic tracking-tighter text-2xl uppercase">GYM<span className="text-[#FF6A00]">FLOW</span></span>
          </div>
          
          <h2 className="text-6xl font-black italic text-white leading-[0.9] uppercase mb-6 tracking-tighter">
            START YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF9D5C]">REVOLUTION</span>
          </h2>
          <p className="text-zinc-400 text-lg font-medium leading-relaxed">
            Join the elite circle. Access professional training roadmaps, track metabolic progress, and build your best self.
          </p>
        </motion.div>

        {/* Floating Decorative Element */}
        <div className="absolute bottom-10 left-10 z-20 flex items-center gap-4">
          <div className="flex -space-x-3">
             {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-zinc-800" />)}
          </div>
          <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">Join 2k+ Athletes</span>
        </div>
      </div>

      {/* --- RIGHT SIDE: REGISTRATION FORM (Mobile & Desktop) --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative">
        {/* Mobile Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6A00]/5 rounded-full blur-[100px] lg:hidden" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md relative z-10"
        >
          {/* Mobile Logo Visibility */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-8 h-8 bg-[#FF6A00] rounded-lg flex items-center justify-center">
              <span className="text-black font-black italic text-sm">G</span>
            </div>
            <span className="text-white font-black italic tracking-tighter text-lg">GYMFLOW</span>
          </div>

          <div className="mb-10">
            <h1 className="text-4xl font-black italic text-white uppercase tracking-tighter leading-none mb-3">
              Create <span className="text-[#FF6A00]">Account</span>
            </h1>
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
              No contracts. No excuses. Just results.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-2 ml-1">Full Name</label>
              <input 
                required
                className="w-full bg-zinc-900/50 border border-white/5 text-white rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#FF6A00]/30 focus:border-[#FF6A00] transition-all placeholder:text-zinc-700 font-medium"
                placeholder="Ex. Rahul Sharma" 
                onChange={(e) => setForm({ ...form, name: e.target.value })} 
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-2 ml-1">Email Address</label>
              <input 
                required
                type="email"
                className="w-full bg-zinc-900/50 border border-white/5 text-white rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#FF6A00]/30 focus:border-[#FF6A00] transition-all placeholder:text-zinc-700 font-medium"
                placeholder="athlete@gymflow.com" 
                onChange={(e) => setForm({ ...form, email: e.target.value })} 
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-2 ml-1">Password</label>
              <input 
                required
                type="password" 
                className="w-full bg-zinc-900/50 border border-white/5 text-white rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#FF6A00]/30 focus:border-[#FF6A00] transition-all placeholder:text-zinc-700 font-medium"
                placeholder="••••••••" 
                onChange={(e) => setForm({ ...form, password: e.target.value })} 
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FF6A00] hover:bg-white text-black font-black uppercase tracking-[0.2em] text-xs py-5 rounded-2xl shadow-xl shadow-[#FF6A00]/10 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
              {isSubmitting ? "Syncing Athlete..." : "Join the Club"}
            </button>
          </form>

          <p className="mt-10 text-center text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
            Already a member?{" "}
            <Link href="/login" className="text-white hover:text-[#FF6A00] transition-colors border-b border-white/10 hover:border-[#FF6A00] pb-1">
              Sign In Here
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}