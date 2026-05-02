import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-tighter mb-2">
              Yuvraj<span className="text-cyan-400">.</span>
            </h3>
            <p className="text-zinc-500 text-sm">
              &copy; {currentYear} Yuvraj Singh Tomar. Made with passion for AI.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:ys040930@gmail.com" className="text-zinc-500 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
            Design x Intelligence
          </div>
        </div>
      </div>
    </footer>
  );
}
