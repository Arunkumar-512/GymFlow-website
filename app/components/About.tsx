"use client";

import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#0A0A0A] text-white px-6 py-16 md:py-24 flex items-center overflow-hidden"
    >
      {/* Decorative Background Element - Subtle on Mobile */}
      <div className="absolute top-0 right-0 text-[10rem] md:text-[20rem] font-black text-white/[0.02] select-none leading-none -translate-y-1/4 translate-x-1/4">
        FLOW
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* IMAGE BLOCK: On mobile, this moves below the title or stays compact */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 group">
            <img
              src="/images/about.jpg"
              alt="Gym transformation"
              className="w-full h-[350px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay for mobile readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
          </div>
          
          {/* Floating Experience Badge - Hidden on very small screens */}
          <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-[#FF6A00] p-4 md:p-8 rounded-2xl shadow-2xl">
            <p className="text-3xl md:text-5xl font-black text-black leading-none">10+</p>
            <p className="text-black text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1">Years of Elite Coaching</p>
          </div>
        </motion.div>

        {/* CONTENT BLOCK: On mobile, this is top-aligned */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-[#FF6A00]"></span>
            <span className="text-[#FF6A00] text-xs md:text-sm font-bold uppercase tracking-[0.3em]">Our Philosophy</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-7xl font-black tracking-tighter leading-[1.1] md:leading-[0.9] mb-6"
          >
            NOT JUST A GYM, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF9D5C]">
              A MOVEMENT.
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-zinc-400 leading-relaxed mb-8 max-w-xl"
          >
            We are a community dedicated to transformation. With world-class equipment and certified trainers, we provide the motivating environment you need to crush your limits.
          </motion.p>

          {/* Feature List: Responsive Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10"
          >
            {[
              { icon: "⚡", title: "Modern Tech", desc: "Latest biometric gear" },
              { icon: "🏆", title: "Expert Staff", desc: "Pro certified trainers" },
              { icon: "📅", title: "Flex Plans", desc: "Personalized for you" },
              { icon: "🔥", title: "Results", desc: "Proven track record" },
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors">
                <span className="text-xl">{feature.icon}</span>
                <div>
                  <h4 className="font-bold text-white text-sm">{feature.title}</h4>
                  <p className="text-zinc-500 text-xs">{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 bg-[#FF6A00] text-black font-black uppercase tracking-widest rounded-xl hover:bg-[#FF8533] transition-all shadow-lg shadow-[#FF6A00]/20"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}