import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { portfolioData } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12 relative z-10">
      <div className="container mx-auto px-6 md:px-12 xl:px-24 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6">
          <Link href="/">
            <span className="font-display font-bold text-2xl tracking-tighter gradient-text">
              MPS<span className="text-textPrimary">.</span> | Manju P S
            </span>
          </Link>
        </div>

        {/* Links */}
        <ul className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm font-medium">
          {portfolioData.navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-textMuted hover:text-primary transition-colors hover:glow"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mb-8">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={portfolioData.socials.email}
            className="text-textMuted hover:text-primary transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-textMuted">
          <p>© {new Date().getFullYear()} Manju P S. Crafted with ❤️ in Karnataka, India.</p>
        </div>
      </div>
    </footer>
  );
}
