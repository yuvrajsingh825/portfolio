import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT SIDE TEXT */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">
              Available for Internships
            </h2>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Hi, I'm <span className="text-cyan-400">Yuvraj Singh Tomar</span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-2xl mb-8 leading-relaxed">
              A B.Tech CSE student specializing in Artificial Intelligence. 
              Building intelligent systems and crafting exceptional digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              
              <a 
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white font-semibold rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                Contact Me
              </a>

            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div 
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">

            {/* Glow Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 scale-110 animate-ping" />
            <div className="absolute inset-0 rounded-full border border-purple-500/30 scale-125" />

            {/* IMAGE */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="Yuvraj Singh Tomar" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Tags */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-black/60 px-4 py-2 rounded-xl text-xs"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              CSE AI
            </motion.div>

            <motion.div 
              className="absolute -bottom-4 -left-4 bg-black/60 px-4 py-2 rounded-xl text-xs"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
               AI Developer
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}