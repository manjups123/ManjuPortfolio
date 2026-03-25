"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";

const trustBadges = [
  { label: "Available for Projects", icon: "✅" },
  { label: "Fast Delivery", icon: "🚀" },
  { label: "Confidential", icon: "🔒" },
  { label: "Clean Code", icon: "🛠" }
];

export default function HireMe() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0F] text-[#F0F0FF]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#6C63FF]/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#00D4FF]/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 xl:px-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight tracking-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's Build Something <br className="hidden sm:block" />
            <span className="gradient-text">Exceptional Together</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-[#8888AA] mb-12 max-w-2xl mx-auto font-body leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm currently open to freelance projects, contract work, and full-time
            opportunities. Whether you need a complete business application, an
            automation system, or a data management platform — let's make it happen.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="#contact" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" fullWidth>
                Hire Me Now
              </Button>
            </Link>
            <a href="/resume.pdf" download className="w-full sm:w-auto">
              <Button variant="outline" size="lg" fullWidth className="border-[#6C63FF]/30 hover:border-[#6C63FF] text-white">
                Download CV
              </Button>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm md:text-base font-medium text-[#F0F0FF]/80 bg-white/5 py-2 px-4 rounded-full border border-white/10 backdrop-blur-md"
              >
                <span>{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
