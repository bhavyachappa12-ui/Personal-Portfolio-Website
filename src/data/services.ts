export interface Service {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "Design intuitive and user-focused digital experiences.",
    iconName: "Layout"
  },
  {
    id: 2,
    title: "Website Design",
    description: "Create clean, modern and visually appealing website interfaces.",
    iconName: "Globe"
  },
  {
    id: 3,
    title: "Wireframing",
    description: "Transform ideas into structured low-fidelity and high-fidelity wireframes.",
    iconName: "Grid"
  },
  {
    id: 4,
    title: "Prototyping",
    description: "Create interactive prototypes to visualize and test user experiences.",
    iconName: "Layers"
  },
  {
    id: 5,
    title: "User Research",
    description: "Understand user needs and use insights to improve design decisions.",
    iconName: "Users"
  },
  {
    id: 6,
    title: "AI-Assisted Design",
    description: "Use AI tools to support ideation, exploration and creative workflows.",
    iconName: "Sparkles"
  },
  {
    id: 7,
    title: "Figma Design",
    description: "Create professional UI designs, wireframes and prototypes using Figma.",
    iconName: "Figma"
  },
  {
    id: 8,
    title: "Email Template Design",
    description: "Create clean and engaging email templates.",
    iconName: "Mail"
  }
];
