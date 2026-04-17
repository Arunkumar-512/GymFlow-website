"use client";

import { motion } from "framer-motion";
import LogoutButton from "../components/Buttons/LogoutButton";

export default function Dashboard({ session }: { session: any }) {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF6A00]/30">
      {/* --- TOP NAVIGATION --- */}
      <nav className="bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 px-4 md:px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF6A00] rounded-lg flex items-center justify-center rotate-3">
            <span className="text-black font-black italic text-sm">G</span>
          </div>
          <span className="font-black text-xl italic tracking-tighter">
            GYM<span className="text-[#FF6A00]">FLOW</span>
          </span>
        </div>
        <LogoutButton />
      </nav>

      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto p-4 md:p-10"
      >
        {/* --- WELCOME HERO --- */}
        <motion.section variants={itemVariants} className="mb-8 md:mb-12">
          <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2rem] p-6 md:p-12 border border-white/5 shadow-2xl overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FF6A00]">System Active</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-none mb-4">
                STAY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF9D5C]">CONSISTENT</span>,<br />
                {session?.user?.email?.split('@')[0]}
              </h1>
              
              <p className="text-zinc-500 max-w-sm text-sm md:text-base font-medium">
                You’ve unlocked 85% of your potential this week. Push for the final 15%.
              </p>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_#ff6a0015_0%,_transparent_70%)] pointer-events-none" />
          </div>
        </motion.section>

        {/* --- BENTO STATS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <StatCard title="Member Level" value={session?.user?.role || "Pro"} color="#FF6A00" />
          <StatCard title="Sessions" value="12" subValue="+2 this week" />
          <StatCard title="Calories" value="4.2k" subValue="Avg. Daily" />
          <StatCard title="Status" value="Active" isStatus />
        </div>

        {/* --- MAIN CONTENT AREA --- */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Workout Placeholder */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 bg-zinc-900/30 rounded-[2.5rem] border-2 border-dashed border-white/5 p-8 md:p-16 flex flex-col items-center justify-center text-center group hover:bg-zinc-900/50 transition-all"
          >
            <div className="w-20 h-20 bg-zinc-800 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-10 h-10 text-[#FF6A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Your Training Routine</h3>
            <p className="text-zinc-500 mt-2 max-w-xs text-sm">Synchronize your fitness wearable to generate your daily performance roadmap.</p>
            <button className="mt-8 px-8 py-3 bg-white text-black rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#FF6A00] hover:text-white transition-all">
              Initialize Plan
            </button>
          </motion.div>

          {/* Quick Actions Sidebar */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 px-2">Quick Actions</h4>
            <ActionItem label="Book a Coach" icon="🎯" />
            <ActionItem label="Nutrition Logs" icon="🥗" />
            <ActionItem label="Progress Photos" icon="📸" />
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function StatCard({ title, value, subValue, color = "white", isStatus = false }: any) {
  return (
    <motion.div 
      variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
      className="bg-zinc-900/50 border border-white/5 p-5 md:p-8 rounded-3xl hover:border-white/10 transition-all"
    >
      <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-2">{title}</p>
      <div className="flex items-center gap-2">
        {isStatus && <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />}
        <p className="text-xl md:text-3xl font-black italic uppercase tracking-tighter" style={{ color }}>{value}</p>
      </div>
      {subValue && <p className="text-[10px] text-zinc-500 mt-1 font-medium">{subValue}</p>}
    </motion.div>
  );
}

function ActionItem({ label, icon }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-zinc-900/30 border border-white/5 rounded-2xl hover:bg-zinc-800 transition-all cursor-pointer group">
      <div className="flex items-center gap-4">
        <span className="text-xl">{icon}</span>
        <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
      </div>
      <span className="text-zinc-600 group-hover:text-[#FF6A00] transition-colors">→</span>
    </div>
  );
}