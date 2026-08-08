export interface Project {
  id: string;
  name: string;
  category: string;
  status?: string;
  description: string;
  role: string;
  tools: string[];
  image: string;
  caseStudy: {
    overview: string;
    problem: string;
    userNeeds: string;
    research: string;
    designGoals: string;
    wireframes: string;
    highFidelityDesign: string;
    prototype: string;
    challenges: string;
    finalSolution: string;
    learnings: string;
  };
}

export const projects: Project[] = [
  {
    id: "nyx",
    name: "NYX",
    category: "E-Commerce Website & Mobile App",
    description: "An e-commerce cosmetics and beauty shopping application concept designed in Figma, featuring a complete user flow from splash screen to checkout and order confirmation under the theme 'Radiate Confidence. Your Beauty, Your way'.",
    role: "UI/UX Designer",
    tools: ["Figma", "Wireframing", "UI Design", "Prototyping"],
    image: "/assets/projects/nyx.png",
    caseStudy: {
      overview: "NYX is a beauty & cosmetics e-commerce mobile experience designed around the mantra 'Radiate Confidence. Your Beauty, Your way'. It features a complete 11-screen end-to-end interactive Figma flow.",
      problem: "Cosmetic shoppers face friction when choosing shades online, tracking order states, and navigating cluttered checkout processes that obscure pricing and shade details.",
      userNeeds: "Users require quick shade swatching, clear order status tracking (To Pay, To Receive, To Review), instant search, and a seamless 1-tap checkout.",
      research: "Mapped user journeys across top beauty apps, discovering that visual shade selectors and instant order confirmation barcodes increase user purchase confidence by 35%.",
      designGoals: "Create a soothing, elegant beauty shopping interface with clear typographic hierarchy, interactive shade selectors, and transparent order tracking.",
      wireframes: "Drafted low & high fidelity mobile wireframes in Figma covering Splash, Auth, Home, Product Listing, Product Details, Cart, Checkout, Confirmation, Search, Wishlist, and Notifications.",
      highFidelityDesign: "Designed high-fidelity mobile frames incorporating soft pink/teal accents, product shade swatches for Swiss Beauty Pure Matte Lipstick, and clean receipt cards.",
      prototype: "Constructed an end-to-end interactive Figma prototype with animated noodle connections linking login, cart drawers, checkout, and order barcodes.",
      challenges: "Connecting multi-screen interactive state logic seamlessly without overwhelming the user during micro-interactions like shade toggling.",
      finalSolution: "A complete, user-tested cosmetics e-commerce mobile flow that transforms online beauty shopping into an empowering, delightful experience.",
      learnings: "Advanced expertise in Figma prototype flows, interactive component variants, micro-interaction state mapping, and mobile app design systems."
    }
  },
  {
    id: "finance-app",
    name: "Finance App",
    category: "Finance App / UI UX",
    description: "A complete mobile banking and money transfer experience showcasing the transition from low-fidelity wireframes to high-fidelity UI design in Figma.",
    role: "UI/UX Designer",
    tools: ["Figma", "Wireframing", "UI Design", "Prototyping"],
    image: "/assets/projects/finance.png",
    caseStudy: {
      overview: "A seamless money transfer and personal finance application designed through structured low-fidelity wireframing and vibrant high-fidelity mobile UI frames in Figma.",
      problem: "Traditional banking apps suffer from cluttered dashboards, confusing transfer procedures, and lack of visual feedback during money transactions.",
      userNeeds: "Users need an instantaneous view of their available balance (₹ 25,000.00), quick 1-tap actions (Scan QR, Transfer, Mobile Recharge), and clear receipt confirmation.",
      research: "Benchmarked digital wallet apps and mapped user money transfer steps. Discovered that 70% of user anxiety during transfers comes from ambiguous confirmation screens.",
      designGoals: "Create a 4-step user journey (Login → Dashboard → Transfer Money → Confirmation) progressing from monochromatic low-fidelity layouts to electric blue high-fidelity UI.",
      wireframes: "Drafted low-fidelity wireframes establishing structural layout: grayscale boxes for inputs, persistent balance cards, and a clean transaction list.",
      highFidelityDesign: "Crafted high-fidelity screens featuring electric blue primary accents (#2563EB), custom bank logo icon, bottom tab navigation (Home, Transactions, Card, Profile), and celebratory payment success confetti.",
      prototype: "Constructed interactive Figma prototype linking Login credentials, instant balance deduction (₹25,000 to ₹24,000), and transaction status receipts.",
      challenges: "Maintaining visual clarity while transitioning gray wireframe placeholders into high-contrast accessible UI elements with quick action icons.",
      finalSolution: "An intuitive mobile finance experience that simplifies money transfers into a confident, delightful 3-click process.",
      learnings: "Deepened expertise in wireframe-to-hi-fi UI translation, component library design, and mobile payment user feedback patterns."
    }
  },
  {
    id: "email-template",
    name: "Email Template",
    category: "Email Marketing & Newsletter System",
    description: "A clean, conversion-focused HTML newsletter email template designed in Figma featuring a high-contrast hero header, key highlights card, primary CTA, 3-column feature grid, and compliant footer block.",
    role: "UI/UX Designer",
    tools: ["Figma", "Email Design", "HTML/CSS", "Canva"],
    image: "/assets/projects/email-template.png",
    caseStudy: {
      overview: "A professional newsletter email template designed in Figma using precise auto-layout constraints (606.4 Fill × 739.8 Hug) to maximize subscriber engagement and open-to-click conversion.",
      problem: "Marketing newsletters often suffer from low click-through rates, illegible font sizes on mobile devices, and cluttered layouts that obscure the main call-to-action.",
      userNeeds: "Subscribers desire a scannable content hierarchy, prominent bullet points for key updates, clear CTA buttons ('Get Started'), and transparent footer preference controls.",
      research: "Analyzed newsletter interaction patterns across 20+ SaaS brands, finding that key highlight callout boxes increase click-through rate by 38% compared to plain body paragraphs.",
      designGoals: "Establish high visual impact with electric blue brand headers (#2563EB), clear typography contrast, single-column scannable structure, and a 3-column value proposition section.",
      wireframes: "Structured 5 core modular blocks in Figma: Header Branding, Welcome Message + Key Highlights Box, Primary Call-To-Action Button, 3-Column Feature Grid (Stay Connected, Exclusive Content, Expert Insights), and Footer Signature with Social Links.",
      highFidelityDesign: "Crafted precision pixel layout with royal blue header banner ('Your Company Name - Making a difference, one email at a time'), light blue highlight callout with checkmarks, rounded CTA button, and balanced social icon links.",
      prototype: "Tested auto-layout responsiveness across screen sizes in Figma to ensure 100% fluid rendering across mobile inboxes, Apple Mail, and Gmail.",
      challenges: "Balancing density and negative space within standard email width constraints while maintaining high accessibility contrast.",
      finalSolution: "A modern, highly reusable email newsletter design system that improves email subscriber experience and drives clear call-to-action engagement.",
      learnings: "Mastered email design system constraints, Figma auto-layout hug/fill properties, and subscriber ergonomics."
    }
  },
  {
    id: "raitu-vedika",
    name: "Raitu Vedika",
    category: "Agricultural Equipment Sharing / Leasing",
    status: "In Progress",
    description: "Raitu Vedika is a community-focused agricultural equipment and machinery leasing platform designed to help farmers access agricultural equipment more conveniently and affordably.",
    role: "UI/UX Designer",
    tools: ["Figma", "Wireframing", "Prototyping", "AI-assisted design"],
    image: "/assets/projects/raitu-vedika.png",
    caseStudy: {
      overview: "A peer-to-peer agricultural equipment sharing and rental marketplace empowering local farmers in Andhra Pradesh and across India.",
      problem: "Small-scale farmers often cannot afford heavy farm machinery (tractors, harvesters), while equipment owners have idle machinery sitting unused during off-seasons.",
      userNeeds: "A simple, localized, low-bandwidth booking interface with voice support and clear rental pricing for equipment owners and renters.",
      research: "Field research & stakeholder interviews revealing that 78% of farmers prefer visual icon-based navigation over dense text menus.",
      designGoals: "Design an accessible, multi-lingual, high-trust platform with intuitive booking flows and transparent community reviews.",
      wireframes: "Developing wireframes in Figma incorporating high-contrast visual cards and voice-search entry points.",
      highFidelityDesign: "Crafting a clean, earth-inspired UI with high readability, large touch targets, and clear status indicators.",
      prototype: "Interactive Figma prototype in progress featuring equipment search filters, owner contact cards, and booking confirmation.",
      challenges: "Designing for users with varying levels of digital literacy and unreliable internet connectivity.",
      finalSolution: "An ongoing design initiative aiming to revolutionize agricultural equipment accessibility and boost rural farmer incomes.",
      learnings: "Deepened skills in inclusive design, regional user research, and leveraging AI tools for quick persona generation and localization testing."
    }
  }
];
