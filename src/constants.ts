import { Project, Skill } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI Image Generator",
    description: "A full-stack application using Gemini API to generate creative images from text prompts with a futuristic UI.",
    tags: ["React", "Express", "Gemini API", "Tailwind"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    title: "Smart Attendance System",
    description: "An AI-powered attendance tracking system using computer vision and facial recognition for university classes.",
    tags: ["Python", "OpenCV", "TensorFlow", "React"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    title: "Portfolio 2.0",
    description: "A high-performance portfolio website with smooth animations and a minimalist design aesthetic.",
    tags: ["TypeScript", "Motion", "Vite", "Tailwind"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
  },
];

export const SKILLS: Skill[] = [
  { name: "C", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "HTML & CSS", category: "Technologies" },
  { name: "React", category: "Technologies" },
  { name: "Express", category: "Technologies" },
  { name: "Tableau", category: "Tools" },
  { name: "Machine Learning", category: "AI & ML" },
  { name: "Neural Networks", category: "AI & ML" },
  { name: "NLP", category: "AI & ML" },
  { name: "Git & GitHub", category: "Tools" },
];
