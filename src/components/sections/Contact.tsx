"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";
import { portfolioData } from "@/lib/constants";
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiCheckCircle, FiXCircle, FiSend } from "react-icons/fi";

const contactInfo = [
  { icon: <FaMapMarkerAlt />, label: "Location", value: portfolioData.location, href: undefined },
  { icon: <FaWhatsapp />, label: "WhatsApp", value: portfolioData.phone, href: portfolioData.socials.whatsapp },
  { icon: <FaEnvelope />, label: "Email", value: portfolioData.email, href: portfolioData.socials.email },
  { icon: <FaLinkedin />, label: "LinkedIn", value: "linkedin.com/in/manju-p-s", href: portfolioData.socials.linkedin },
  { icon: <FaGithub />, label: "GitHub", value: "github.com/manjups", href: portfolioData.socials.github }
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'hire',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send message');

      setSuccess(true);
      setFormData({ name: '', email: '', subject: 'hire', message: '' });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Premium Background Decor */}
      <div className="absolute top-1/2 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-primary/5 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="text-center mb-16 md:mb-24 relative z-10 w-full flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <SectionTag>Contact</SectionTag>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-textPrimary leading-tight"
          >
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Great</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10 w-full max-w-6xl mx-auto items-center lg:items-start">
          
          {/* Left Column - Contact Info */}
          <motion.div
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-textPrimary mb-4">
              Get in Touch
            </h3>
            <p className="text-textMuted mb-10 text-lg leading-relaxed">
              Whether you need a full enterprise application or robust process automation, I'm ready to discuss your business logic. 
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((info, i) => {
                const isLink = info.label === "LinkedIn" || info.label === "GitHub" || info.label === "WhatsApp" || info.label === "Email";
                
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                    viewport={{ once: true }}
                  >
                    {isLink ? (
                      <a
                        href={info.href}
                        target={info.label !== "Email" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-6 group hover:bg-surface/50 p-4 sm:p-5 rounded-[1.5rem] transition-all duration-300 border border-transparent hover:border-white/10 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.4)] relative overflow-hidden"
                      >
                        {/* Hover flare */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-surface/80 border border-white/5 text-primary flex items-center justify-center text-xl sm:text-2xl group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_0_20px_rgba(108,99,255,0.4)] relative z-10">
                          {info.icon}
                        </div>
                        <div className="relative z-10">
                          <div className="text-xs uppercase tracking-widest font-mono text-textMuted/60 mb-1 group-hover:text-textMuted/90 transition-colors">
                            {info.label}
                          </div>
                          <div className="text-textPrimary font-medium sm:text-lg group-hover:text-primary transition-colors hover:underline">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-6 p-4 sm:p-5 rounded-[1.5rem] border border-transparent hover:border-white/5 transition-all">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-surface/30 border border-white/5 flex items-center justify-center text-xl sm:text-2xl text-textMuted shadow-inner">
                          {info.icon}
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-widest font-mono text-textMuted/60 mb-1">
                            {info.label}
                          </div>
                          <div className="text-textMuted font-medium sm:text-lg">
                            {info.value}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Premium Contact Form */}
          <motion.div
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-[#0A0A10]/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
              {/* Internal Accent Glow */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                    exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    className="absolute inset-0 bg-[#0A0A10]/60 z-30 flex flex-col items-center justify-center text-center p-8"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="w-24 h-24 bg-green-500/10 border border-green-500/20 text-green-400 rounded-[2rem] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.2)]"
                    >
                      <FiCheckCircle size={48} />
                    </motion.div>
                    <h3 className="text-3xl font-display font-bold text-white mb-4">
                      Protocol Secured!
                    </h3>
                    <p className="text-textMuted max-w-sm text-lg">
                      Your message has been successfully routed. I will establish contact shortly.
                    </p>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                    exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    className="absolute inset-0 bg-[#0A0A10]/60 z-30 flex flex-col items-center justify-center text-center p-8"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: 90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="w-24 h-24 bg-red-500/10 border border-red-500/20 text-red-500 rounded-[2rem] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(239,68,68,0.2)]"
                    >
                      <FiXCircle size={48} />
                    </motion.div>
                    <h3 className="text-3xl font-display font-bold text-white mb-4">
                      Systems Failure
                    </h3>
                    <p className="text-textMuted max-w-sm text-lg">
                      Failed to transmit message payload. Please attempt contact directly via my email or WhatsApp links.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="relative group/input">
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-surface/50 border border-white/5 rounded-xl pt-6 pb-2 px-4 text-white placeholder-transparent focus:outline-none focus:border-primary focus:bg-primary/5 transition-all peer"
                      placeholder="Your Name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 top-4 text-textMuted/60 text-sm font-medium transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-2.5 peer-focus:text-xs peer-focus:text-primary font-mono peer-valid:-translate-y-2.5 peer-valid:text-xs tracking-wider pointer-events-none"
                    >
                      ENTER NAME
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative group/input">
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-surface/50 border border-white/5 rounded-xl pt-6 pb-2 px-4 text-white placeholder-transparent focus:outline-none focus:border-primary focus:bg-primary/5 transition-all peer"
                      placeholder="Your Email"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-4 text-textMuted/60 text-sm font-medium transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-2.5 peer-focus:text-xs peer-focus:text-primary font-mono peer-valid:-translate-y-2.5 peer-valid:text-xs tracking-wider pointer-events-none"
                    >
                      EMAIL ADDRESS
                    </label>
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div className="relative pt-1">
                  <span className="text-xs text-textMuted/60 mb-2 block uppercase tracking-widest font-mono font-bold pl-1">
                    Inquiry Subject
                  </span>
                  <div className="relative">
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-surface/50 border border-white/5 rounded-xl py-3.5 px-4 text-white appearance-none focus:outline-none focus:border-primary focus:bg-primary/5 transition-all cursor-pointer"
                      required
                    >
                      <option value="hire">Enterprise Hiring / Job Opportunity</option>
                      <option value="project">Project / Business App Request</option>
                      <option value="freelance">Freelance Contract</option>
                      <option value="other">Other Protocol</option>
                    </select>
                    {/* Custom Select Arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-textMuted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative pt-2">
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-surface/50 border border-white/5 rounded-xl pt-7 pb-3 px-4 text-white placeholder-transparent focus:outline-none focus:border-primary focus:bg-primary/5 transition-all resize-none peer"
                    placeholder="Message Payload"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-5 text-textMuted/60 text-sm font-medium transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-2 peer-focus:text-xs peer-focus:text-primary font-mono peer-valid:-translate-y-2 peer-valid:text-xs tracking-wider pointer-events-none"
                  >
                    MESSAGE PAYLOAD
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={loading}
                  className="mt-6 py-4 rounded-xl font-mono tracking-widest uppercase font-bold shadow-[0_0_20px_rgba(108,99,255,0.2)] hover:shadow-[0_0_30px_rgba(108,99,255,0.4)] transition-all"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-[3px] border-white/30 border-t-white rounded-full animate-spin" />
                      Transmitting...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                       Establish Connection <FiSend className="w-5 h-5" />
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
