"use client";
import { Search, Menu, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-gradient-to-b from-black/70 to-transparent">
      <div className="flex gap-6 items-center">
        <Menu size={20} className="cursor-pointer" />
        <Search size={20} className="cursor-pointer" />
      </div>
      
      <div className="text-2xl font-bold tracking-[0.5em] uppercase">
        AUDEMARS PIGUET
      </div>

      <div className="flex gap-6 items-center">
        <span className="text-xs tracking-widest hidden md:block">COLLECTIONS</span>
        <User size={20} className="cursor-pointer" />
      </div>
    </nav>
  );
}
