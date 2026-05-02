import { motion } from "motion/react";
import { Briefcase, Calendar, BadgeCheck } from "lucide-react";

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
            Professional Experience
          </h2>

          <p className="text-zinc-400 max-w-xl mx-auto">
            Hands-on experience building AI-based projects and solving real-world problems 
            through practical implementation.
          </p>
        </div>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-3xl p-8 border border-white/10 hover:border-cyan-400/40 transition-all shadow-lg hover:shadow-cyan-500/10"
        >

          {/* Glow line */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full" />

          {/* CONTENT */}
          <div className="ml-4">

            {/* ROLE */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl font-bold text-white">
                Artificial Intelligence Intern
              </h3>

              <span className="flex items-center gap-2 text-xs text-zinc-400 mt-2 md:mt-0">
                <Calendar size={14} />
                May 2025 – June 2025
              </span>
            </div>

            {/* COMPANY */}
            <p className="text-cyan-400 text-sm mb-3">
              CodSoft & Improve Education
            </p>

            {/* DESCRIPTION */}
            <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
              Worked on AI-driven projects focused on problem-solving, decision-making algorithms, 
              and real-world implementation of intelligent systems. Gained practical exposure to 
              core AI concepts and logical thinking approaches.
            </p>

            {/* SKILLS BADGES */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Python", "AI Basics", "Minimax", "Problem Solving"].map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* ACHIEVEMENTS */}
            <ul className="text-sm text-zinc-300 space-y-3">

              <li className="flex items-start gap-2">
                <BadgeCheck size={16} className="text-cyan-400 mt-1" />
                Developed a Tic Tac Toe AI using the Minimax algorithm for optimal decision-making
              </li>

              <li className="flex items-start gap-2">
                <BadgeCheck size={16} className="text-cyan-400 mt-1" />
                Strengthened logical thinking and problem-solving through real-world AI tasks
              </li>

              <li className="flex items-start gap-2">
                <BadgeCheck size={16} className="text-cyan-400 mt-1" />
                Gained hands-on experience with AI concepts and algorithmic implementation
              </li>

            </ul>

          </div>

        </motion.div>

      </div>
    </section>
  );
}