"use client";

import { motion } from "framer-motion";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#050505] text-white px-6 py-20 md:py-32 flex items-center overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#FF6A00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 w-full relative z-10">
        
        {/* LEFT CONTENT: Contact Info */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-[#FF6A00]"></span>
            <span className="text-[#FF6A00] uppercase tracking-[0.3em] text-xs font-bold">Contact Us</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8"
          >
            READY TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF9D5C]">
              JOIN THE ELITE?
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-zinc-400 max-w-md leading-relaxed mb-12"
          >
            Don't wait for "next Monday." Start your transformation today. Our experts are ready to build your custom roadmap.
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-[#FF6A00] transition-colors duration-300">
                <span className="text-xl">📍</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Headquarters</h4>
                <p className="text-lg font-medium">123 Iron Street, Muscle Bay, NY</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-[#FF6A00] transition-colors duration-300">
                <span className="text-xl">📞</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Direct Line</h4>
                <p className="text-lg font-medium">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:bg-[#FF6A00] transition-colors duration-300">
                <span className="text-xl">📧</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Support Email</h4>
                <p className="text-lg font-medium">elite@gymflow.com</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT: Professional Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative frame for the form */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6A00] to-transparent rounded-[2rem] blur opacity-20" />
          
          <form className="relative bg-[#0E0E0E]/80 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-4 rounded-xl bg-zinc-900/50 border border-white/5 focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] outline-none transition-all placeholder:text-zinc-700"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full p-4 rounded-xl bg-zinc-900/50 border border-white/5 focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] outline-none transition-all placeholder:text-zinc-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">Subject</label>
              <select className="w-full p-4 rounded-xl bg-zinc-900/50 border border-white/5 focus:border-[#FF6A00] outline-none text-zinc-400 appearance-none">
                <option>Membership Inquiry</option>
                <option>Personal Training</option>
                <option>General Support</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] ml-1">Message</label>
              <textarea
                placeholder="How can we help you reach your goals?"
                rows={4}
                className="w-full p-4 rounded-xl bg-zinc-900/50 border border-white/5 focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] outline-none transition-all placeholder:text-zinc-700 resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 rounded-xl bg-[#FF6A00] text-black font-black uppercase tracking-[0.2em] hover:bg-[#FF8533] shadow-lg shadow-[#FF6A00]/20 transition-all flex items-center justify-center gap-2"
            >
              Dispatch Message
              <span className="text-xl">→</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}