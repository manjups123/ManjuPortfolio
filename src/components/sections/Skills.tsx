"use client";

import { motion } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import { FaJava, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiDotnet, SiJavascript, SiSpringboot, SiMysql } from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava />, level: 90 },
      { name: "C#", icon: <span className="font-bold text-sm">C#</span>, level: 85 },
      { name: "JavaScript", icon: <SiJavascript />, level: 80 }
    ]
  },
  {
    title: "Backend Frameworks",
    skills: [
      { name: ".NET / ASP.NET", icon: <SiDotnet />, level: 85 },
      { name: "Spring Boot", icon: <SiSpringboot />, level: 80 },
      { name: "REST APIs", icon: <span className="text-xs font-bold bg-white/10 px-1 rounded tracking-widest">API</span>, level: 90 }
    ]
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
      { name: "JavaScript", icon: <SiJavascript />, level: 85 }
    ]
  },
  {
    title: "Database Systems",
    skills: [
      { name: "MySQL", icon: <SiMysql />, level: 90 },
      { name: "SQL Server", icon: <FaDatabase />, level: 85 }
    ]
  },
  {
    title: "Tools & Concepts",
    skills: [
      { name: "Object-Oriented Programming", icon: "🧩", level: 95 },
      { name: "Git / GitHub", icon: "🐙", level: 85 },
      { name: "Eclipse IDE", icon: "💻", level: 90 },
      { name: "VS Code", icon: "⌨️", level: 95 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(270deg,white,rgba(255,255,255,0))] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="text-center mb-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <SectionTag>Skills</SectionTag>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-textPrimary leading-tight"
          >
            Technologies I <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Work With</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-full"
            >
              <div className="h-full p-8 rounded-[2rem] bg-surface/30 backdrop-blur-md border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-[0_15px_30px_-10px_rgba(108,99,255,0.2)] group flex flex-col relative overflow-hidden">
                
                {/* Floating faint background glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <h3 className="text-xl md:text-2xl font-display font-bold text-textPrimary mb-6 border-b border-white/5 pb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="space-y-6 flex-grow relative z-10">
                  {category.skills.map((skill, i) => (
                    <div key={skill.name} className="group/skill relative">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-surface/80 border border-white/5 flex items-center justify-center text-primary group-hover/skill:bg-primary group-hover/skill:text-white transition-all duration-300 shadow-md group-hover/skill:shadow-[0_0_15px_rgba(108,99,255,0.4)] group-hover/skill:scale-110">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-textMuted group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="ml-auto text-xs font-mono text-textMuted/40 group-hover/skill:text-primary/70 transition-colors">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Premium Progress Bar */}
                      <div className="h-2 w-full bg-black/20 rounded-full overflow-hidden border border-white/5 relative">
                        {/* Track Background Shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/skill:animate-[shimmer_1.5s_infinite]" />
                        
                        <motion.div 
                          className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-secondary/80 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 + (index * 0.1) + (i * 0.1) }}
                          viewport={{ once: true }}
                        >
                           <div className="absolute top-0 right-0 bottom-0 w-4 bg-gradient-to-r from-transparent to-white/30 rounded-full" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
