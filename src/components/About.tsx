import { motion } from "motion/react";
import { User, GraduationCap, Cpu, Globe } from "lucide-react";

const HIGHLIGHTS = [
  { icon: GraduationCap, text: "B.Tech CSE (AI) student at Medicaps University" },
  { icon: Cpu, text: "Focused on Artificial Intelligence, DSA & Web Development" },
  { icon: Globe, text: "Building real-world projects and scalable solutions" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <User size={20} className="text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold">About Me</h3>
            </div>

            <p className="text-lg text-zinc-400 leading-relaxed">
              I am a <strong>B.Tech Computer Science (AI)</strong> student at Medicaps University 
              with a <strong>CGPA of 7.5+</strong>. I am passionate about building intelligent systems 
              and solving real-world problems using technology.
            </p>

            <p className="text-lg text-zinc-400 leading-relaxed">
              Currently, I am focused on <strong>Data Structures & Algorithms</strong>, 
              <strong> Web Development</strong>, and exploring <strong>AI tools & technologies</strong>. 
              My goal is to become a skilled software engineer and work in top product-based companies.
            </p>

            <div className="space-y-4">
              {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-zinc-500" />
                  </div>
                  <span className="text-sm font-medium text-zinc-300">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              
              {/* CGPA */}
              <div className="h-48 glass rounded-2xl flex flex-col justify-end p-6 group hover:translate-y-[-8px] transition-transform">
                <span className="text-3xl font-bold text-cyan-400 mb-2">7.5+</span>
                <span className="text-xs uppercase tracking-widest text-zinc-500">CGPA</span>
              </div>

              {/* PROJECTS */}
              <div className="h-64 glass rounded-2xl flex flex-col justify-end p-6 bg-gradient-to-tr from-cyan-500/10 to-transparent group hover:translate-y-[-8px] transition-transform">
                <span className="text-3xl font-bold text-white mb-2">3+</span>
                <span className="text-xs uppercase tracking-widest text-zinc-500">Projects Built</span>
              </div>
            </div>

            <div className="space-y-4">
              
              {/* GRADUATION */}
              <div className="h-64 glass rounded-2xl flex flex-col justify-end p-6 bg-gradient-to-tr from-purple-500/10 to-transparent group hover:translate-y-[-8px] transition-transform">
                <span className="text-3xl font-bold text-white mb-2">2027</span>
                <span className="text-xs uppercase tracking-widest text-zinc-500">Expected Graduation</span>
              </div>

              {/* LEARNING */}
              <div className="h-48 glass rounded-2xl flex flex-col justify-end p-6 group hover:translate-y-[-8px] transition-transform">
                <span className="text-3xl font-bold text-purple-500 mb-2">∞</span>
                <span className="text-xs uppercase tracking-widest text-zinc-500">Continuous Learning</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}