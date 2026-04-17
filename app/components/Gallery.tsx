"use client";

import { motion } from "framer-motion";

const images = [
  { src: "/images/gallery/elite_performance.jpg", span: "md:col-span-2 md:row-span-2", label: "Elite Performance" },
  { src: "/images/gallery/strength.jpg", span: "md:col-span-1 md:row-span-1", label: "Strength" },
  { src: "/images/gallery/recovery.jpg", span: "md:col-span-1 md:row-span-1", label: "Recovery" },
  { src: "/images/gallery/cardio.jpg", span: "md:col-span-1 md:row-span-2", label: "Cardio Zone" },
  { src: "/images/gallery/boxing.jpg", span: "md:col-span-1 md:row-span-1", label: "Boxing" },
  { src: "/images/gallery/mindset.jpg", span: "md:col-span-1 md:row-span-1", label: "Mindset" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative min-h-screen bg-[#050505] text-white px-6 py-20 md:py-32 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6A00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px] bg-[#FF6A00]"></span>
            <span className="text-[#FF6A00] uppercase tracking-[0.4em] text-xs font-black">Visual Journey</span>
            <span className="w-8 h-[2px] bg-[#FF6A00]"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-none"
          >
            THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">ARENA</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-zinc-500 text-sm md:text-lg max-w-xl mx-auto font-medium"
          >
            Witness the grit, sweat, and transformation. This is where champions are built daily.
          </motion.p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative overflow-hidden rounded-[2rem] group cursor-pointer border border-white/5 ${img.span}`}
            >
              {/* Image with Advanced Grayscale to Color Transition */}
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />

              {/* Advanced Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Label & Interaction UI */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#FF6A00] text-[10px] font-black uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      Discovery
                    </p>
                    <h4 className="text-white text-xl font-black uppercase italic tracking-tighter">
                      {img.label}
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FF6A00] text-black flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                    <span className="font-bold">→</span>
                  </div>
                </div>
              </div>

              {/* Glassmorphism Border on Hover */}
              <div className="absolute inset-0 border-[0px] group-hover:border-[1px] border-white/20 rounded-[2rem] transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* MOBILE CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center md:hidden"
        >
          <button className="text-[#FF6A00] text-xs font-black uppercase tracking-widest border-b border-[#FF6A00] pb-1">
            View All Workouts
          </button>
        </motion.div>
      </div>
    </section>
  );
}