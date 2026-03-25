"use client";

import { motion } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import { FiBriefcase, FiAward, FiBookOpen } from "react-icons/fi";

const timelineData = [
  {
    type: "work",
    title: "Application Engineer",
    company: "Hobvision Technologies Pvt Ltd",
    period: "July 2025 – Present | Karnataka, India",
    points: [
      "Working on enterprise .NET applications and internal business systems",
      "Developing web applications for business automation and reporting",
      "Building systems that manage and process business data efficiently",
      "Working on backend logic, database operations, and web interfaces"
    ],
    current: true
  },
  {
    type: "work",
    title: "Java Web Development Intern",
    company: "Pentagon Space Pvt. Ltd",
    period: "Feb 2025 – May 2025 | Remote/India",
    points: [
      "Developed an Event Management System (Java, Spring Boot, MySQL)",
      "Collaborated on system architecture and implemented core features",
      "Gained full-stack integration experience across frontend and backend"
    ],
    current: false
  },
  {
    type: "education",
    title: "B.E. in Computer Science and Engineering",
    company: "JNNCE — Jawaharlal Nehru New College of Engineering, Shivamogga",
    period: "2021 – 2025 | CGPA: 8.7",
    points: [],
    current: false
  },
  {
    type: "cert",
    title: "NPTEL Certifications",
    company: "National Programme on Technology Enhanced Learning",
    period: "2024",
    points: [
      <a key="nptel-dbms" href="https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs21/Course/NPTEL24CS21S54690005830108386.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline transition-colors">Database Management System</a>,
      <a key="nptel-java" href="https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs43/Course/NPTEL24CS43S105410030930573721.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline transition-colors">Programming in Java</a>
    ],
    current: false
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      {/* Dynamic Decor */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <SectionTag>Experience & Education</SectionTag>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-textPrimary leading-tight"
          >
            My Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Journey</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Central Vertical Timeline Line */}
          <div className="absolute left-[24px] sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary/50 via-secondary/20 to-transparent -translate-x-1/2 shadow-[0_0_10px_rgba(108,99,255,0.2)] lg:block" />

          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;

            let TagIcon = FiBriefcase;
            if (item.type === "education") TagIcon = FiBookOpen;
            if (item.type === "cert") TagIcon = FiAward;

            return (
              <motion.div
                key={index}
                className={`relative flex flex-col sm:flex-row items-center justify-between mb-16 last:mb-0 w-full group ${
                  isLeft ? "sm:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Timeline Dot Central Node */}
                <div className="absolute left-[24px] sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-[4px] border-[#0A0A10] bg-primary shadow-[0_0_20px_rgba(108,99,255,0.8)] z-20 group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                  {item.current && (
                    <motion.div 
                      className="absolute -inset-[6px] rounded-full border-2 border-primary/50"
                      animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Empty Space for balancing Flex Layout */}
                <div className="w-full sm:w-[45%] hidden sm:block" />

                {/* Glassmorphic Content Card */}
                <div className={`w-full sm:w-[50%] ${isLeft ? "pr-8 sm:pr-12" : "pl-16 sm:pl-12"}`}>
                  <div className={`relative p-8 rounded-[2rem] bg-surface/30 backdrop-blur-md border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(108,99,255,0.25)] hover:-translate-y-1 ${
                    isLeft ? "sm:text-right" : "sm:text-left"
                  }`}>
                    
                    {/* Floating Accent Background */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]" />

                    <div className={`flex flex-col mb-5 relative z-10 ${isLeft ? "sm:items-end" : "sm:items-start"} items-start`}>
                      <div className={`flex flex-wrap gap-2 mb-4 ${isLeft ? "sm:justify-end" : "justify-start"} justify-start`}>
                        {item.current && (
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary bg-primary/10 py-1.5 px-3 rounded shadow-[0_0_10px_rgba(108,99,255,0.2)] border border-primary/20 flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" /> Current
                          </span>
                        )}
                        {item.type === "education" && (
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-green-400 bg-green-400/10 py-1.5 px-3 rounded border border-green-400/20 flex items-center gap-1.5">
                            <TagIcon className="w-3.5 h-3.5" /> Education
                          </span>
                        )}
                        {item.type === "cert" && (
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-yellow-400 bg-yellow-400/10 py-1.5 px-3 rounded border border-yellow-400/20 flex items-center gap-1.5">
                            <TagIcon className="w-3.5 h-3.5" /> Certification
                          </span>
                        )}
                        {item.type === "work" && !item.current && (
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 py-1.5 px-3 rounded border border-blue-400/20 flex items-center gap-1.5">
                            <TagIcon className="w-3.5 h-3.5" /> Experience
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-display font-bold text-textPrimary leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <h4 className="text-base text-primary/90 font-medium mt-1.5">
                        {item.company}
                      </h4>
                      <span className="text-xs font-mono text-textMuted/60 uppercase tracking-widest mt-3">
                        {item.period}
                      </span>
                    </div>

                    {item.points.length > 0 && (
                      <ul className={`space-y-3 mt-6 border-t border-white/5 pt-6 relative z-10 ${isLeft ? "sm:text-right" : "sm:text-left"} text-left`}>
                        {item.points.map((point, i) => (
                          <li key={i} className={`text-sm sm:text-base text-textMuted flex items-start leading-relaxed ${isLeft ? "sm:justify-end sm:flex-row-reverse sm:gap-4" : "gap-3"}`}>
                            <span className="text-primary mt-1 opacity-70">▹</span>
                            <span className="flex-1">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
