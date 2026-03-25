"use client";

import { motion } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { portfolioData } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 xl:px-24 relative z-10 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionTag>Portfolio</SectionTag>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-textPrimary leading-tight mt-2">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Works</span>
            </h2>
          </motion.div>
        </div>

        <div className="space-y-32">
          {portfolioData.projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={project.id}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center group ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Side */}
                <motion.div
                  className="w-full lg:w-1/2 relative"
                  initial={{ opacity: 0, scale: 0.95, rotateY: isEven ? 10 : -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  style={{ perspective: 1000 }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="relative aspect-[4/3] rounded-2xl md:rounded-[2rem] overflow-hidden glass-panel border border-[#1E1E2E] bg-[#111118] shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-transform duration-700 hover:scale-[1.02]">
                    
                    {/* MacOS Browser Window Controls */}
                    <div className="absolute inset-x-0 top-0 h-10 bg-[#15151A] border-b border-[#1E1E2E] flex items-center px-4 gap-2 z-20">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_10px_rgba(255,95,86,0.3)]" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_10px_rgba(255,189,46,0.3)]" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_10px_rgba(39,201,63,0.3)]" />
                    </div>

                    {/* Simple Text Placeholder */}
                    <div className="absolute inset-x-0 bottom-0 top-10 flex flex-col items-center justify-center p-8 text-center text-textMuted group-hover:bg-primary/5 transition-colors duration-500 z-10 bg-gradient-to-br from-[#111118] to-[#1E1E2E]">
                      {project.id === "confidential-enterprise" ? (
                        <>
                          <FiLock className="text-5xl xl:text-6xl mb-4 opacity-70 text-red-500 group-hover:scale-110 transition-transform duration-500" />
                          <span className="text-3xl md:text-4xl font-display font-bold text-red-500/70 mb-4">{project.title}</span>
                          <span className="font-mono text-sm xl:text-base tracking-widest uppercase text-red-500/60 font-bold mb-2">NDA Protected</span>
                        </>
                      ) : (
                        <>
                          <span className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-textPrimary opacity-60 mb-6 group-hover:opacity-80 transition-opacity duration-500 px-4">{project.title}</span>
                          <div className="flex flex-wrap gap-2 lg:gap-3 justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                            {project.tech.slice(0, 4).map(t => (
                              <span key={t} className="text-xs sm:text-sm font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded">{`< ${t} />`}</span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className={`self-start py-1.5 px-3 rounded-md text-xs font-mono font-bold tracking-widest uppercase mb-6 border shadow-[0_0_15px_rgba(108,99,255,0.1)] ${project.id === "confidential-enterprise" ? "text-red-400 bg-red-400/10 border-red-400/20 shadow-[0_0_15px_rgba(248,113,113,0.1)]" : "text-primary bg-primary/10 border-primary/20"}`}>
                    {project.badge}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-textPrimary mb-6 tracking-tight">
                    {project.title}
                  </h3>
                  
                  <div className="glass-panel p-6 md:p-8 rounded-[1.5rem] border border-border mb-8 relative z-10 shadow-xl bg-surface/30 backdrop-blur-md">
                    <p className="text-textMuted leading-relaxed text-base sm:text-lg font-body">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-secondary/90 bg-secondary/10 border border-secondary/20 px-3.5 py-1.5 rounded-full shadow-[inset_0_1px_rgba(255,255,255,0.1)] hover:bg-secondary/20 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center flex-wrap gap-4">
                    {project.links?.live && project.links.live !== "#" && (
                      <Button variant="primary" size="lg" className="shadow-[0_0_20px_rgba(108,99,255,0.2)] hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] transition-all">
                        View Live Project
                        <FaExternalLinkAlt className="ml-2.5 w-3.5 h-3.5" />
                      </Button>
                    )}
                    {project.links?.github && project.links.github !== "#" && (
                      <Button variant="outline" size="lg" className="hover:bg-surface border-border transition-all">
                        <FaGithub className="mr-2.5 w-5 h-5" />
                        Source Code
                      </Button>
                    )}
                    {(!project.links?.live || project.links.live === "#") && (!project.links?.github || project.links.github === "#") && (
                      <div className="text-sm font-mono text-textMuted uppercase tracking-widest border border-border px-5 py-3 rounded-lg bg-surface/30 opacity-70 cursor-not-allowed">
                        {project.id === "confidential-enterprise" ? "Secure NDA / Protected" : "Internal / Proprietary"}
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
