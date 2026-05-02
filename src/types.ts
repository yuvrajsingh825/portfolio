export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
}

export interface Skill {
  name: string;
  category: "Languages" | "Technologies" | "AI & ML" | "Tools";
  icon?: string;
}
