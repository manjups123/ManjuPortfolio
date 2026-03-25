import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type CardProps = HTMLMotionProps<"div"> & {
  hoverEffect?: boolean;
};

export default function Card({
  className,
  hoverEffect = true,
  children,
  ...props
}: CardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5 } : undefined}
      className={`relative glass-panel rounded-2xl p-6 md:p-8 overflow-hidden group border border-border bg-surface hover:border-primary/50 transition-colors duration-300 ${className || ""}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
      <div className="relative z-10">{children as React.ReactNode}</div>
    </motion.div>
  );
}
