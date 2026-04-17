"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "999",
    duration: "month",
    features: ["Standard Gym Access", "Basic Equipment", "Locker Facility", "General Support"],
    highlight: false,
  },
  {
    name: "Standard",
    price: "1999",
    duration: "month",
    features: [
      "24/7 Premium Access",
      "Personal Trainer (4 sessions)",
      "Custom Diet Plan",
      "Progress Tracking",
    ],
    highlight: true, // This adds the special styling
    tag: "Most Popular",
  },
  {
    name: "Premium",
    price: "2999",
    duration: "month",
    features: [
      "All-Access Worldwide",
      "Unlimited 1-on-1 Coaching",
      "Advanced Recovery Zone",
      "Physiotherapy Sessions",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative min-h-screen bg-[#050505] text-white px-6 py-24 md:py-32 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6A00]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-10 h-[2px] bg-[#FF6A00]"></span>
            <span className="text-[#FF6A00] uppercase tracking-[0.3em] text-xs font-black italic">Membership</span>
            <span className="w-10 h-[2px] bg-[#FF6A00]"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase"
          >
            INVEST IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FF9D5C]">YOURSELF</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-zinc-500 max-w-lg mx-auto text-sm md:text-base font-medium"
          >
            Transparent pricing for elite performance. No hidden fees, just pure results.
          </motion.p>
        </div>

        {/* PRICING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 group ${
                plan.highlight
                  ? "bg-[#0E0E0E] border-2 border-[#FF6A00] scale-100 md:scale-110 z-20 shadow-[0_0_40px_rgba(255,106,0,0.15)]"
                  : "bg-white/[0.02] border border-white/10 hover:border-white/20 z-10"
              }`}
            >
              {plan.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6A00] text-black text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                  {plan.tag}
                </div>
              )}

              {/* PLAN NAME */}
              <div className="mb-8">
                <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500 italic mb-2">
                  {plan.name} Package
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black italic">₹{plan.price}</span>
                  <span className="text-zinc-500 text-sm font-bold uppercase tracking-tighter italic">
                    /{plan.duration}
                  </span>
                </div>
              </div>

              {/* FEATURES */}
              <div className="space-y-4 mb-10 min-h-[180px]">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 group/item">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                      plan.highlight ? "bg-[#FF6A00]" : "bg-zinc-800 group-hover/item:bg-[#FF6A00]"
                    }`}>
                      <span className="text-black text-[10px] font-bold">✓</span>
                    </div>
                    <span className="text-sm text-zinc-400 group-hover/item:text-white transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* ACTION BUTTON */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] transition-all shadow-xl ${
                  plan.highlight
                    ? "bg-[#FF6A00] text-black shadow-[#FF6A00]/20 hover:bg-[#FF8533]"
                    : "bg-zinc-900 text-white hover:bg-white hover:text-black shadow-black/50"
                }`}
              >
                Select {plan.name}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* TRUST INDICATOR */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center text-zinc-600 text-xs font-bold uppercase tracking-[0.3em]"
        >
          Cancel or switch plans at any time • 7-day money back guarantee
        </motion.p>
      </div>
    </section>
  );
}