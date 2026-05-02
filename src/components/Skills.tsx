import { motion } from "motion/react";
import { SKILLS } from "../constants";
import { Layers } from "lucide-react";

export default function Skills() {
  const categories = ["Languages", "Technologies", "AI & ML", "Tools"] as const;

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
            <Layers size={24} className="text-purple-500" />
          </div>

          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Skills & Technologies
          </h2>

          <p className="text-zinc-400 max-w-xl">
            I am continuously learning and improving my skills in software development, 
            artificial intelligence, and modern web technologies to build scalable and 
            real-world impactful applications.
          </p>
        </div>

        {/* SKILL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 hover:scale-105 transition-transform"
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {SKILLS.filter((s) => s.category === category).map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-sm text-zinc-300 hover:border-cyan-400 hover:text-white transition-all"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}