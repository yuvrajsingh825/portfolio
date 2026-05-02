import { motion } from "motion/react";
import { PROJECTS } from "../constants";
import { ExternalLink, Github, Monitor } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
              <Monitor size={24} className="text-cyan-500" />
            </div>

            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Featured Projects
            </h2>

            <p className="text-zinc-400 max-w-xl">
              Selected projects demonstrating my expertise in Artificial Intelligence, 
              problem solving, and modern web development.
            </p>
          </div>

          <a 
            href="https://github.com/yuvrajsingh825"
            target="_blank"
            className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-semibold uppercase tracking-widest"
          >
            View GitHub →
            <ExternalLink size={16} />
          </a>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass rounded-3xl overflow-hidden hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all flex flex-col h-full"
            >

              {/* IMAGE */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">

                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank"
                      className="p-3 rounded-full bg-white text-black hover:bg-cyan-400 transition"
                    >
                      <Github size={20} />
                    </a>
                  )}

                  {project.link && project.link !== "#" && (
                    <a 
                      href={project.link} 
                      target="_blank"
                      className="p-3 rounded-full bg-white text-black hover:bg-cyan-400 transition"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}

                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">

                {/* TAGS */}
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[10px] uppercase px-2 py-1 rounded bg-white/5 text-zinc-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-zinc-400 text-sm mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* FOOTER */}
                <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-xs text-zinc-600 font-mono">
                    #{index + 1}
                  </span>

                  {project.link && project.link !== "#" && (
                    <a 
                      href={project.link}
                      target="_blank"
                      className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-cyan-400 transition"
                    >
                      Live →
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}