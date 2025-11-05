export interface Project {
  id: string;
  title: string;
  category: "SQA" | "Research" | "VLSI" | "Arduino" | "Web";
  description: string;
  tech: string[];
  links: {
    github?: string;
    demo?: string;
  };
  image?: string;
}

export const projects: Project[] = [
  {
    id: "ecrm-qa",
    title: "eCRM QA – BAT/Unilever/Banglalink",
    category: "SQA",
    description: "Comprehensive quality assurance for enterprise CRM systems. Wrote SRS documentation, executed manual & automated tests, and managed bug tracking via ClickUp.",
    tech: ["Selenium", "Postman", "SRS", "ClickUp", "Manual Testing"],
    links: { github: "", demo: "" }
  },
  {
    id: "neodesk-qa",
    title: "Neodesk Help Desk QA",
    category: "SQA",
    description: "Quality assurance for ticketing and help desk management system. Test case design, regression testing, and API validation.",
    tech: ["Postman", "Test Cases", "Bug Reporting", "API Testing"],
    links: { github: "", demo: "" }
  },
  {
    id: "microwave-resonator",
    title: "High-Sensitivity Microwave Resonator",
    category: "Research",
    description: "Designing high-Q microwave resonator for medical, environmental, and chemical sensing applications. Focus on stability, resolution, and signal processing.",
    tech: ["Microwave Engineering", "HFSS", "CST", "Signal Processing"],
    links: { github: "", demo: "" }
  },
  {
    id: "load-shedding",
    title: "Load Shedding Time Management",
    category: "Arduino",
    description: "Automated relay switching system based on scheduled time slots using DS3231 RTC module and LCD display for real-time monitoring.",
    tech: ["Arduino", "DS3231 RTC", "Relay Control", "LCD"],
    links: { github: "", demo: "" }
  },
  {
    id: "vlsi-dff",
    title: "VLSI D-Flip-Flop Comparison",
    category: "VLSI",
    description: "Transistor-level analysis comparing power consumption, delay, and PDP metrics using Cadence tools with gpdk45 and gpdk90 process technologies.",
    tech: ["Cadence Virtuoso", "DRC/LVS", "gpdk45", "Circuit Analysis"],
    links: { github: "", demo: "" }
  },
  {
    id: "portfolio-web",
    title: "Personal Portfolio Website",
    category: "Web",
    description: "Modern, responsive portfolio built with React, TypeScript, and Tailwind CSS. Features dark mode, SEO optimization, and GitHub Pages deployment.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    links: { github: "https://github.com/ahsam", demo: "https://ahsam.github.io" }
  }
];

export const projectCategories = ["All", "SQA", "Research", "VLSI", "Arduino", "Web"] as const;
