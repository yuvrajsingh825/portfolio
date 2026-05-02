import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
            <Briefcase className="text-cyan-400" size={22} />
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Experience
          </h2>

          <p className="text-zinc-400">
            My practical experience working on real-world AI projects
          </p>
        </div>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-3xl p-8 border border-white/10 hover:border-cyan-400/40 transition-all shadow-lg hover:shadow-cyan-500/10"
        >

          {/* Glow line */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full" />

          {/* CONTENT */}
          <div className="ml-4">
            <h3 className="text-xl font-bold text-white mb-1">
              AI Intern
            </h3>

            <p className="text-cyan-400 text-sm mb-2">
              CodSoft / Improve Education
            </p>

            <p className="text-zinc-400 text-sm mb-4">
              Worked on AI-based projects focusing on problem solving, logic building 
              and real-world implementations of intelligent systems.
            </p>

            <ul className="text-sm text-zinc-400 space-y-2">
              <li>✔ Built Tic Tac Toe AI using Minimax Algorithm</li>
              <li>✔ Implemented logic-based problem solving approaches</li>
              <li>✔ Gained hands-on experience in AI concepts</li>
            </ul>
          </div>

        </motion.div>

      </div>
    </section>
  );
}