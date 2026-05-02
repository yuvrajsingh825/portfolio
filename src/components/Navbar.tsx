import { motion } from "motion/react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter"
          >
            YST<span className="text-cyan-400">.</span>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 border-l border-white/10 pl-8">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-zinc-950 border-b border-white/5 px-4 pt-2 pb-6 flex flex-col space-y-4"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-zinc-400 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-6 pt-4">
            <a href="#" className="text-zinc-400 hover:text-white">
              <Github size={24} />
            </a>
            <a href="#" className="text-zinc-400 hover:text-white">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
