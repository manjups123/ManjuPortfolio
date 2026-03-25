"use client";

import { motion, Variants } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import { portfolioData } from "@/lib/constants";
import { FiArrowRight } from "react-icons/fi";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      {/* Dynamic Background Decor */}
      <div className="absolute top-1/4 left-0 w-full h-[500px] bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] opacity-[0.03] dark:opacity-[0.06] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 xl:px-24 relative z-10 w-full">
        <div className="text-center md:text-left lg:text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-start lg:justify-center mb-4"
          >
            <SectionTag>Services</SectionTag>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-textPrimary leading-tight mb-6"
          >
            What I Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Build For You</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-textMuted font-body max-w-2xl mx-auto md:mx-0 lg:mx-auto"
          >
            I provide end-to-end software development services tailored to streamline your business operations and securely handle your data.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {portfolioData.services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="group h-full">
              <div className="relative h-full p-8 rounded-[2rem] bg-surface/30 backdrop-blur-md border border-border/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(108,99,255,0.2)] flex flex-col justify-between">
                
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Top Content */}
                <div className="relative z-10 flex-grow">
                  <div className="flex items-center justify-between mb-8">
                    {/* Icon Circle */}
                    <div className="w-16 h-16 rounded-2xl bg-surface/80 border border-white/5 flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(0,0,0,0.2)] group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500 ease-out">
                      <span className="relative z-10 filter drop-shadow-md scale-110">{service.icon}</span>
                      
                      {/* Icon Glow */}
                      <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    {/* Number styling (01, 02, etc) */}
                    <div className="text-4xl font-display font-bold text-textMuted/20 group-hover:text-primary/20 transition-colors duration-500 font-mono tracking-tighter">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-bold text-textPrimary mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-textMuted leading-relaxed font-body group-hover:text-textMuted/90 transition-colors">
                    {service.description}
                  </p>
                </div>
                
                {/* Bottom Decor arrow (appears on hover) */}
                <div className="mt-8 pt-6 border-t border-border/50 flex justify-between items-center relative z-10">
                  <span className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-4 group-hover:translate-x-0">
                    Discover More
                  </span>
                  <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-textMuted group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(108,99,255,0.4)]">
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
