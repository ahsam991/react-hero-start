export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Testing & QA",
    skills: [
      "Selenium WebDriver",
      "Postman",
      "Manual Testing",
      "Test Case Design",
      "Bug Reporting",
      "Regression Testing",
      "API Testing",
      "ClickUp"
    ]
  },
  {
    name: "Web Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design"
    ]
  },
  {
    name: "Engineering & Research",
    skills: [
      "Microwave Engineering",
      "VLSI Design",
      "HFSS",
      "CST Microwave Studio",
      "Cadence Virtuoso",
      "Signal Processing",
      "Arduino Programming",
      "Circuit Design"
    ]
  },
  {
    name: "Data & Analysis",
    skills: [
      "Python",
      "scikit-learn",
      "Data Analysis",
      "Microsoft Excel",
      "Remote Sensing",
      "AI/ML Basics"
    ]
  },
  {
    name: "Documentation & Tools",
    skills: [
      "SRS Writing",
      "Technical Documentation",
      "PowerPoint",
      "Git/GitHub",
      "Agile Methodologies",
      "Project Management"
    ]
  }
];
