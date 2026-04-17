"use client";

import { motion, easeOut } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#050505] text-white flex items-center justify-center px-6 overflow-hidden pt-20 md:pt-0"
    >
      {/* BACKGROUND DECORATIVE TYPOGRAPHY - Desktop Only */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] select-none leading-none z-0">
        PERFORMANCE
      </div>

      {/* AMBIENT GLOWS */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#FF6A00]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] bg-[#FF6A00]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-4 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF6A00] animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
              New training season '26
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl xl:text-8xl font-black italic tracking-tighter leading-[0.95] md:leading-[0.9]"
          >
            BUILD YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] via-[#FF8C42] to-[#FF6A00] bg-[length:200%_auto] animate-gradient">
              DREAM BODY
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 text-zinc-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Stop settling for average. Transform your physique and mindset with 
            elite trainers and science-backed programs designed for the 1%.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#programs"
              className="relative group px-8 py-4 rounded-2xl bg-[#FF6A00] text-black font-black uppercase tracking-widest overflow-hidden transition-all hover:bg-white active:scale-95"
            >
              <span className="relative z-10">Explore Programs</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 font-black uppercase tracking-widest backdrop-blur-sm hover:border-[#FF6A00] hover:text-[#FF6A00] transition-all active:scale-95"
            >
              Join the Team
            </a>
          </motion.div>

          {/* QUICK STATS */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 grid grid-cols-3 gap-8 border-t border-white/5 pt-8 max-w-sm mx-auto lg:mx-0"
          >
            <div>
              <p className="text-2xl font-black italic">500+</p>
              <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Members</p>
            </div>
            <div>
              <p className="text-2xl font-black italic">20+</p>
              <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Coaches</p>
            </div>
            <div>
              <p className="text-2xl font-black italic">15</p>
              <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Programs</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE COMPONENT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="order-1 lg:order-2 relative px-4 lg:px-0"
        >
          <div className="relative z-10 group">
            {/* Cinematic Frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6A00] to-transparent opacity-20 blur rounded-[2.5rem] group-hover:opacity-40 transition-opacity duration-500" />
            
            <img
              src="/images/hero/hero1.png"
              alt="Elite Gym Workout"
              className="relative rounded-[2rem] shadow-2xl object-cover w-full h-[400px] md:h-[600px] grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 -left-6 md:-left-12 bg-black/80 backdrop-blur-xl p-4 md:p-6 rounded-2xl border border-white/10 shadow-2xl hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF6A00] flex items-center justify-center font-black text-black">
                  98%
                </div>
                <div>
                  <p className="text-xs font-bold text-[#FF6A00] uppercase">Success Rate</p>
                  <p className="text-[10px] text-zinc-400">Based on 2k+ transformations</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}