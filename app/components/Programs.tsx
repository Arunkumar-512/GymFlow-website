"use client";

import { motion, easeOut } from "framer-motion";

const programs = [
  {
    title: "Weight Loss",
    tag: "Fat Burn",
    desc: "Metabolic conditioning and high-intensity interval training designed to torch calories.",
    icon: "🔥",
  },
  {
    title: "Muscle Gain",
    tag: "Hypertrophy",
    desc: "Science-based strength programming to maximize muscle growth and functional power.",
    icon: "💪",
  },
  {
    title: "Yoga & Flex",
    tag: "Recovery",
    desc: "Advanced mobility flows to improve athletic performance and mental clarity.",
    icon: "🧘",
  },
];

export default function Programs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section
      id="programs"
      className="relative min-h-screen bg-[#050505] text-white px-6 py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#ff6a0010_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#FF6A00]/30 bg-[#FF6A00]/10 text-[#FF6A00] text-[10px] font-black uppercase tracking-[0.3em]"
          >
            Expert Led Training
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none"
          >
            PUSH YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF9D5C]">
              LIMITS
            </span>
          </motion.h2>
        </div>

        {/* CARDS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative group p-8 md:p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-[#FF6A00]/50 hover:bg-zinc-900/60"
            >
              {/* Background Icon Watermark */}
              <div className="absolute -top-4 -right-4 text-8xl opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-125 transition-all duration-700 pointer-events-none grayscale">
                {program.icon}
              </div>

              {/* Tag */}
              <span className="text-[10px] font-bold text-[#FF6A00] uppercase tracking-widest block mb-4">
                {program.tag}
              </span>

              {/* Title */}
              <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 group-hover:text-zinc-300 transition-colors">
                {program.desc}
              </p>

              {/* Button */}
              <div className="relative overflow-hidden inline-block group/btn">
                <button className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white">
                  Learn More
                  <span className="w-8 h-[2px] bg-[#FF6A00] transition-all group-hover/btn:w-12" />
                </button>
              </div>

              {/* Subtle Bottom Glow */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* FOOTER TEXT */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.4em]">
            Customized roadmaps for every athlete
          </p>
        </motion.div>
      </div>
    </section>
  );
}