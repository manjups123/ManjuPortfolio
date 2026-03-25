"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/lib/constants";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Intersection Observer for ScrollSpy
    const sections = portfolioData.navLinks.map((link) => link.href.substring(1));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" } // trigger somewhat near the top of viewport
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? "bg-[#0A0A10]/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 xl:px-24 flex items-center justify-between">
          <Link href="#home" className="relative z-50 flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display font-bold text-xl sm:text-2xl shadow-[0_0_15px_rgba(108,99,255,0.4)] group-hover:shadow-[0_0_25px_rgba(108,99,255,0.6)] group-hover:scale-105 transition-all duration-300">
              M
            </div>
            <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-textPrimary hidden sm:block group-hover:text-white transition-colors">
              Manju<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            <ul className="flex items-center gap-1 p-1 rounded-2xl bg-surface/30 backdrop-blur-md border border-white/5 shadow-inner">
              {portfolioData.navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                
                return (
                  <li key={link.label} className="relative">
                    <Link
                      href={link.href}
                      className={`relative z-10 block px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                        isActive ? "text-white" : "text-textMuted hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-primary/20 border border-primary/30 rounded-xl z-0"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="w-px h-6 bg-border mx-2 xl:mx-4" />
            <ThemeToggle />
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="flex items-center gap-4 lg:hidden relative z-50">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <div 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] bg-surface/50 border border-white/5 flex items-center justify-center text-textPrimary focus:outline-none cursor-pointer hover:bg-surface hover:text-white transition-all z-50 relative shadow-sm"
            >
              {mobileMenuOpen ? <FiX size={22} className="text-red-400" /> : <FiMenu size={22} />}
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { delay: 0.2 } }}
            className="fixed inset-0 z-40 bg-[#0A0A10]/95 lg:hidden flex flex-col justify-center px-8 sm:px-12"
          >
            <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
            
            <ul className="flex flex-col gap-5 sm:gap-6 relative z-10 w-full max-w-sm mx-auto">
              {portfolioData.navLinks.map((link, i) => {
                const isActive = activeSection === link.href.substring(1);
                
                return (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ delay: i * 0.05, type: "spring", stiffness: 300, damping: 24 }}
                    className="border-b border-white/5 pb-4 sm:pb-5"
                  >
                    <Link
                      href={link.href}
                      className={`text-3xl sm:text-4xl font-display font-bold block transition-colors group flex items-baseline ${
                        isActive ? "text-primary" : "text-white/60 hover:text-white"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-primary/40 text-sm sm:text-base font-mono mr-5 font-medium group-hover:text-primary transition-colors">0{i + 1}</span>
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
              
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: portfolioData.navLinks.length * 0.05 }}
                className="mt-6 flex items-center justify-center gap-6"
              >
                <div className="w-full flex justify-between items-center bg-surface/30 p-4 rounded-xl border border-white/5">
                   <span className="text-sm font-mono text-textMuted uppercase tracking-widest">Theme Mode</span>
                   <ThemeToggle />
                </div>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
