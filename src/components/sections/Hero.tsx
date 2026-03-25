"use client";

import { motion, Variants } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FiArrowDown, FiDownload, FiCode, FiTerminal } from "react-icons/fi";
import Button from "@/components/ui/Button";
import { portfolioData } from "@/lib/constants";
import Link from "next/link";

// Framer motion variants for staggered animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-background">
      {/* Dynamic Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-blob mix-blend-screen opacity-60 z-0" />
      <div className="absolute top-1/3 right-1/4 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen opacity-60 z-0" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-purple-500/10 rounded-[100%] blur-[100px] opacity-50 pointer-events-none" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] opacity-[0.04] dark:opacity-[0.06] z-0" />

      <div className="container mx-auto px-6 md:px-12 xl:px-24 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 w-full">
          
          {/* Left Content (Staggered Intro) */}
          <motion.div 
            className="flex-1 text-center lg:text-left pt-12 lg:pt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability Badge */}
            <motion.div variants={itemVariants} className="mb-8 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 font-medium text-sm backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.15)] hover:bg-green-500/20 transition-colors duration-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Available for Freelance Projects
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-textPrimary mb-4 tracking-tight leading-tight"
            >
              Hi, I'm <br className="hidden md:block lg:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary animate-gradient bg-[length:200%_auto]">
                {portfolioData.name}
              </span>
            </motion.h1>

            {/* Role Display */}
            <motion.div variants={itemVariants} className="h-12 md:h-16 mb-4 flex items-center justify-center lg:justify-start">
              <div className="flex items-center gap-3 text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-textMuted">
                <FiTerminal className="text-primary opacity-70" />
                {portfolioData.role}
              </div>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-textMuted max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-body">
              {portfolioData.description}
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-12">
              <Link href="#projects">
                <Button variant="primary" size="lg" className="group relative overflow-hidden shadow-[0_0_30px_rgba(108,99,255,0.3)] hover:shadow-[0_0_40px_rgba(108,99,255,0.5)] border-transparent transition-all">
                  <span className="relative z-10 flex items-center">
                    View My Work
                    <FiArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <a href="/ManjuResume.pdf" download="Manju_Resume.pdf">
                <Button variant="outline" size="lg" className="hover:bg-surface hover:border-textMuted transition-all duration-300">
                  <FiDownload className="mr-2.5 group-hover:-translate-y-1 transition-transform" />
                  Download Resume
                </Button>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-5">
              {[
                { icon: FaGithub, href: portfolioData.socials.github, label: "GitHub", color: "hover:text-white" },
                { icon: FaLinkedin, href: portfolioData.socials.linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
                { icon: FaEnvelope, href: portfolioData.socials.email, label: "Email", color: "hover:text-red-400", target: "_self" },
                { icon: FaWhatsapp, href: portfolioData.socials.whatsapp, label: "WhatsApp", color: "hover:text-green-400" },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target={social.target || "_blank"} 
                  rel="noopener noreferrer" 
                  className={`p-3.5 rounded-xl bg-surface/50 border border-border/50 text-textMuted ${social.color} hover:border-primary/50 hover:bg-surface transition-all duration-300 hover:shadow-[0_0_20px_rgba(108,99,255,0.2)] hover:-translate-y-1`} 
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Floating Code Widget */}
          <motion.div 
            className="flex-1 w-full max-w-lg hidden lg:block"
            initial={{ opacity: 0, rotateY: 15, x: 50 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            style={{ perspective: 1000 }}
          >
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative rounded-2xl p-6 md:p-8 backdrop-blur-xl bg-[#0b0b13]/90 border border-[#2A2A3A] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group"
            >
              {/* Glassmorphic Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Window Controls */}
              <div className="flex items-center gap-2 mb-6 border-b border-[#2A2A3A] pb-4">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_10px_rgba(255,95,86,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_10px_rgba(255,189,46,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_10px_rgba(39,201,63,0.5)]"></div>
                <div className="ml-3 flex items-center gap-2 text-xs font-mono text-[#8888AA]">
                  <FiCode /> developer.ts
                </div>
              </div>

              {/* Code */}
              <pre className="font-mono text-sm leading-relaxed text-[#ABB2BF] overflow-x-auto whitespace-pre-wrap">
                <code>
                  <span className="text-[#C678DD]">const</span>{" "}
                  <span className="text-[#E5C07B]">developer</span>{" "}
                  <span className="text-[#56B6C2]">=</span>{" "}
                  <span className="text-[#ABB2BF]">{`{`}</span>
                  <br />
                  {"  "}
                  <span className="text-[#E06C75]">name:</span>{" "}
                  <span className="text-[#98C379]">"{portfolioData.name}"</span>,
                  <br />
                  {"  "}
                  <span className="text-[#E06C75]">role:</span>{" "}
                  <span className="text-[#98C379]">"App Engineer"</span>,
                  <br />
                  {"  "}
                  <span className="text-[#E06C75]">skills:</span>{" "}
                  <span className="text-[#C678DD]">[</span>
                  <br />
                  {"    "}
                  <span className="text-[#98C379]">"Java"</span>,{" "}
                  <span className="text-[#98C379]">"C#"</span>,{" "}
                  <span className="text-[#98C379]">".NET"</span>,{" "}
                  <span className="text-[#98C379]">"MySQL"</span>,
                  <br />
                  {"    "}
                  <span className="text-[#98C379]">"React"</span>,{" "}
                  <span className="text-[#98C379]">"Next.js"</span>
                  <br />
                  {"  "}
                  <span className="text-[#C678DD]">]</span>,
                  <br />
                  {"  "}
                  <span className="text-[#E06C75]">availableForFreelance:</span>{" "}
                  <span className="text-[#D19A66]">true</span>
                  <br />
                  <span className="text-[#ABB2BF]">{`}`}</span>;
                </code>
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer group"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <div className="text-[10px] tracking-[0.2em] uppercase mb-3 text-textMuted font-mono group-hover:text-primary transition-colors">Scroll</div>
        <div className="w-6 h-10 rounded-full border-2 border-textMuted/50 flex justify-center p-1 group-hover:border-primary/50 transition-colors">
          <motion.div 
            className="w-1 h-2.5 rounded-full bg-primary"
            animate={{ y: [0, 16, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
