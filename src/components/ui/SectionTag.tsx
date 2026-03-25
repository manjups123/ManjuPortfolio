import React from "react";

interface SectionTagProps {
  children: React.ReactNode;
}

export default function SectionTag({ children }: SectionTagProps) {
  return (
    <div className="inline-block py-1 px-4 mb-4 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-sm tracking-widest font-bold uppercase backdrop-blur-md">
      {`< ${children} />`}
    </div>
  );
}
