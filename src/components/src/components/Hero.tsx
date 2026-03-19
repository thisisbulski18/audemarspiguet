"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Ganti src dengan link video mp4 anda nanti */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
        <video
          autoPlay
          loop
          muted
          className="h-full w-full object-cover opacity-60"
        >
          <source src="https://www.audemarspiguet.com/content/dam/adp/master/homepage/hero/hp-hero-royal-oak-concept-split-seconds-v1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 text-center px-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-ap-gold tracking-[0.4em] uppercase text-sm mb-4"
        >
          New Release
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-8xl font-light tracking-tighter mb-8"
        >
          ROYAL OAK <br /> CONCEPT
        </motion.h1>
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="border border-white/40 px-10 py-4 hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-xs"
        >
          Explore the Collection
        </motion.button>
      </div>
    </section>
  );
}
