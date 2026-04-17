"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. BRAND & MISSION */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#FF6A00] rounded-lg flex items-center justify-center">
                <span className="font-black text-black italic">G</span>
              </div>
              <span className="text-2xl font-black tracking-tighter italic text-white uppercase">
                Gym<span className="text-[#FF6A00]">Flow</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Redefining human potential through elite coaching and 
              world-class facilities. Your transformation starts 
              where your comfort zone ends.
            </p>
            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              {['FB', 'IG', 'TW', 'YT'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center text-[10px] font-bold text-zinc-400 hover:bg-[#FF6A00] hover:text-black transition-all duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* 2. EXPLORE LINKS */}
          <div>
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-6 italic">Navigation</h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {['Home', 'About', 'Trainers', 'Classes', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-zinc-500 text-sm hover:text-[#FF6A00] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-[#FF6A00] transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT INFO */}
          <div>
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-6 italic">HQ Location</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-zinc-400">📍</span>
                <p className="text-zinc-500 text-sm">123 Performance Way,<br />Steel District, NY 10001</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-400">📞</span>
                <p className="text-zinc-500 text-sm font-medium">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-zinc-400">📧</span>
                <p className="text-zinc-500 text-sm font-medium">join@gymflow.com</p>
              </div>
            </div>
          </div>

          {/* 4. NEWSLETTER / CTA */}
          <div>
            <h3 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-6 italic">Stay Notified</h3>
            <p className="text-zinc-500 text-sm mb-4">Get training tips and exclusive membership offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF6A00] transition-all"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-[#FF6A00] text-black text-[10px] font-black uppercase rounded-lg hover:bg-white transition-colors">
                JOIN
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM LEGAL BAR */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
            © {currentYear} GYMFLOW PERFORMANCE. BUILT FOR CHAMPIONS.
          </p>
          <div className="flex gap-6 text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}