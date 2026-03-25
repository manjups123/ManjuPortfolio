"use client";

import { motion } from "framer-motion";
import SectionTag from "@/components/ui/SectionTag";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { FiBox, FiUsers, FiPieChart, FiSettings } from "react-icons/fi";

const solutions = [
  {
    icon: <FiBox className="w-8 h-8" />,
    title: "Inventory Management System",
    description: "Track stock, manage suppliers, and generate inventory reports with real-time data integration."
  },
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: "Employee Management System",
    description: "Handle employee records, attendance, payroll data, and modern HR operations easily."
  },
  {
    icon: <FiPieChart className="w-8 h-8" />,
    title: "Reporting Dashboard Systems",
    description: "Interactive visual dashboards that transform raw business data into actionable daily insights."
  },
  {
    icon: <FiSettings className="w-8 h-8" />,
    title: "Custom Internal Business Tools",
    description: "Bespoke internal software solutions designed exactly around your team's workflow needs."
  }
];

export default function BusinessSolutions() {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <SectionTag>Solutions</SectionTag>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-textPrimary leading-tight mb-4">
            Real-World Applications I Can Build For Your Business
          </h2>
          <p className="text-lg text-textMuted italic">
            From idea to deployed product — end to end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 max-w-5xl mx-auto mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex items-start gap-6 border-border group">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110 duration-300">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-textPrimary mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-textMuted text-[15px] leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-textPrimary mb-6 font-display">
            Have a business problem? Let's build the solution.
          </p>
          <Link href="#contact">
            <Button variant="primary" size="lg">
              Let's Talk
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
