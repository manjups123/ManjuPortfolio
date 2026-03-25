"use client";

import { motion } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";
import { FiDownload } from "react-icons/fi";
import { portfolioData } from "@/lib/constants";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Graphic/Stats */}
          <motion.div 
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Image Container with Offset Accent */}
            <div className="relative max-w-md mx-auto mb-10 group">
              {/* Decorative Background Blob */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
              
              {/* Image Frame */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden glass-panel border border-border bg-[#111118] shadow-2xl z-10 transform transition-transform duration-700 group-hover:-translate-y-2">
                <Image 
                  src="/Profile.jpeg" 
                  alt="Manju P S" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                
                {/* Floating Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                
                {/* Name Plate inside Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-white font-display font-medium text-lg">{portfolioData.name}</div>
                  <div className="text-primary-100/80 text-sm font-mono tracking-wide uppercase mt-1 text-primary">{portfolioData.role}</div>
                </div>
              </div>
              
              {/* Offset Accent Box */}
              <div className="absolute -right-6 -bottom-6 w-full h-full rounded-[2rem] border-2 border-primary/20 bg-background/50 backdrop-blur-sm z-0 hidden md:block transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 pointer-events-none" />
            </div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4 max-w-md mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {portfolioData.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="relative p-5 rounded-2xl bg-surface/40 backdrop-blur-md border border-border/50 text-center overflow-hidden hover:bg-surface/80 transition-colors duration-300 group"
                >
                  {/* Subtle hover glow ring inside stat cards */}
                  <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-2xl transition-colors duration-300 pointer-events-none" />
                  
                  <div className="text-3xl font-display font-bold gradient-text mb-1 relative z-10">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-textMuted uppercase tracking-widest font-mono relative z-10">{stat.label}</div>
                  
                  {/* Background flare on hover */}
                  <div className="absolute -inset-x-6 -bottom-6 h-12 bg-primary/10 blur-xl group-hover:bg-primary/20 transition-colors duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="w-full lg:w-7/12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="mb-4">
              <SectionTag>About Me</SectionTag>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-display font-bold text-textPrimary mb-8 leading-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Business Solutions</span> <br className="hidden xl:block"/> for Real-World Impact
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 text-lg text-textMuted leading-relaxed font-body mb-10">
              <p>
                My professional journey is rooted in a deep passion for translating complex business problems into elegant, highly efficient software architectures. 
                With a foundation built during my B.E. in Computer Science at JNNCE (CGPA 8.7), I've evolved into a specialist who bridges the gap between technical execution and business value.
              </p>
              <p>
                Currently serving as an <strong className="text-textPrimary font-semibold">Application Engineer</strong> at Hobvision Technologies, my day-to-day involves designing and deploying enterprise-grade web applications. I architect systems that rely heavily on robust data management, secure backend protocols, and seamless automations—primarily utilizing <strong className="text-white bg-primary/20 px-1 rounded font-semibold">Java, C#, .NET, and MySQL.</strong>
              </p>
              <p>
                What drives me? The satisfaction of taking a manual, error-prone workflow and replacing it with a lightning-fast, intuitive digital tool that empowers non-technical teams to do their best work. I don't just write code; I engineer solutions that scale and secure the critical data moving through an organization.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 items-center lg:items-start">
              <a href="/ManjuResume.pdf" download="Manju_Resume.pdf" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full group shadow-[0_0_20px_rgba(108,99,255,0.2)] hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] transition-all">
                  <FiDownload className="mr-2.5" />
                  Download CV
                </Button>
              </a>
              <div className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl border border-border/50 bg-surface/30 backdrop-blur-sm shadow-inner group cursor-default">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>
                </span>
                <span className="text-sm font-medium text-textPrimary uppercase tracking-widest">
                  Open to Opportunities
                </span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
