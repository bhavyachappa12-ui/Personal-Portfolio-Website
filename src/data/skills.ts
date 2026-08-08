export interface SkillCategory {
  title: string;
  category: "UI/UX DESIGN" | "DEVELOPMENT" | "TOOLS" | "AI";
  skills: {
    name: string;
    description?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "UI/UX Design",
    category: "UI/UX DESIGN",
    skills: [
      { name: "Figma", description: "Design systems, auto-layout, components & variants" },
      { name: "Wireframing", description: "Low-fidelity & high-fidelity structural layouts" },
      { name: "Prototyping", description: "Interactive micro-interactions & animated user flows" },
      { name: "User Research", description: "User interviews, personas & usability testing" },
      { name: "UI/UX Design", description: "Information architecture & visual hierarchy" },
      { name: "Creative Design", description: "Editorial visual layouts & brand identity" }
    ]
  },
  {
    title: "Development",
    category: "DEVELOPMENT",
    skills: [
      { name: "HTML", description: "Semantic, accessible markup structure" },
      { name: "CSS", description: "Responsive layouts, Flexbox & CSS Grid" },
      { name: "JavaScript", description: "ES6+ dynamic web logic & DOM interaction" },
      { name: "Python", description: "Data structures & problem solving" }
    ]
  },
  {
    title: "Tools & Collaboration",
    category: "TOOLS",
    skills: [
      { name: "Canva", description: "Quick graphic assets & marketing presentations" },
      { name: "Git", description: "Version control & branch management" },
      { name: "GitHub", description: "Code hosting & collaborative projects" }
    ]
  },
  {
    title: "AI Integration",
    category: "AI",
    skills: [
      { name: "AI-assisted design", description: "Leveraging generative AI for rapid ideation & visual assets" },
      { name: "AI tools for creative workflows", description: "AI prompt engineering, workflow automation & research synthesis" }
    ]
  }
];
