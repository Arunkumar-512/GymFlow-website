"use client";

import { motion } from "framer-motion";

const trainers = [
  { name: "Rahul Sharma", role: "Strength Coach", img: "/images/trainers/about2.jpg", bio: "10+ Years in Pro Powerlifting" },
  { name: "Anjali Verma", role: "Yoga Trainer", img: "/images/trainers/elite2.jpg", bio: "Mindfulness & Mobility Expert" },
  { name: "Arjun Patel", role: "CrossFit Expert", img: "/images/trainers/elite2.jpg", bio: "Certified HIIT & Agility Specialist" },
];

export default function Trainers() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="trainers"
      className="relative min-h-screen bg-[#050505] text-white px-6 py-24 md:py-32 overflow-hidden"
    >
      {/* Dynamic Background Text Decor */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[30vw] font-black italic uppercase leading-none">ELITE</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-12 h-[2px] bg-[#FF6A00]"></span>
              <span className="text-[#FF6A00] uppercase tracking-[0.3em] text-xs font-black italic">The Squad</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9]"
            >
              MEET THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">CHAMPIONS</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 max-w-xs text-sm font-medium uppercase tracking-widest leading-relaxed"
          >
            World-class mentors dedicated to your physical evolution.
          </motion.p>
        </div>

        {/* TRAINER CARDS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-[450px] md:h-[550px] rounded-[2.5rem] overflow-hidden bg-zinc-900"
            >
              {/* Image with Filter Effect */}
              <img 
                src={trainer.img} 
                alt={trainer.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
              />

              {/* Advanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* CONTENT AREA */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="overflow-hidden mb-2">
                  <motion.span className="inline-block text-[#FF6A00] text-[10px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">
                    Professional
                  </motion.span>
                </div>
                
                <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white">
                  {trainer.name}
                </h3>
                <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest mt-1 mb-4">
                  {trainer.role}
                </p>

                {/* Hidden Bio & Socials on Hover */}
                <div className="h-0 group-hover:h-24 opacity-0 group-hover:opacity-100 transition-all duration-500">
                   <p className="text-zinc-500 text-xs mb-6 line-clamp-2">
                    {trainer.bio}
                  </p>
                  <div className="flex gap-4">
                    {["IG", "TW", "FB"].map((social) => (
                      <span key={social} className="text-[10px] font-black text-white hover:text-[#FF6A00] cursor-pointer transition-colors">
                        {social}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Animated Corner Border */}
              <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-[#FF6A00] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}