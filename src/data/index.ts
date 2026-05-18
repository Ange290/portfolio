import type { Project, Skill, Experience, NavItem } from "../types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
  { name: "JavaScript", icon: "JS", level: 88, category: "frontend", color: "#f7df1e" },
  { name: "TypeScript", icon: "TS", level: 82, category: "frontend", color: "#3178c6" },
  { name: "React", icon: "⚛", level: 85, category: "frontend", color: "#61dafb" },
  { name: "Node.js", icon: "⬡", level: 83, category: "backend", color: "#68a063" },
  { name: "Express.js", icon: "Ex", level: 80, category: "backend", color: "#ffffff" },
  { name: "MongoDB", icon: "🍃", level: 78, category: "database", color: "#47a248" },
  { name: "PostgreSQL", icon: "🐘", level: 72, category: "database", color: "#336791" },
  { name: "Tailwind CSS", icon: "🌊", level: 90, category: "frontend", color: "#06b6d4" },
  { name: "Git & GitHub", icon: "⎇", level: 85, category: "tools", color: "#f05032" },
  { name: "REST APIs", icon: "⚡", level: 82, category: "backend", color: "#ff6b35" },
  { name: "Responsive Design", icon: "📱", level: 88, category: "frontend", color: "#ec4899" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "HerVoice Rwanda",
    description:
      "A digital platform designed to support women and girls facing violence or harassment by providing accessible and safe reporting channels.",
    longDescription:
      "HerVoice Rwanda is a full-stack digital platform built to empower women and girls in Rwanda by providing a safe, accessible, and confidential space to report violence or harassment. The platform bridges the gap between survivors and support services through modern web technology.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    type: "personal",
    role: "Full Stack Developer",
    responsibilities: [
      "Full-stack development from scratch",
      "RESTful API design and implementation",
      "MongoDB database schema design",
      "Frontend UI/UX with React & Tailwind",
      "JWT authentication & authorization",
      "Fully responsive mobile-first design",
    ],
    github: "https://github.com/angeuwizera",
    featured: true,
    color: "#ec4899",
  },
  {
    id: 2,
    title: "Umwalimu Loan Hub",
    description:
      "A loan management platform helping teachers in Rwanda request and manage loans digitally, streamlining the entire loan lifecycle.",
    longDescription:
      "Umwalimu Loan Hub is a collaborative team project that digitizes the loan management process for teachers in Rwanda. The platform enables teachers to apply for loans, track status, and manage repayments through an intuitive digital interface.",
    technologies: ["Node.js", "Express", "MongoDB", "Vanilla CSS", "REST API"],
    type: "team",
    teamSize: 4,
    role: "Backend Developer",
    responsibilities: [
      "Backend API architecture",
      "Database design and optimization",
      "Authentication system",
      "Loan processing logic",
    ],
    github: "https://github.com/angeuwizera",
    featured: true,
    color: "#6366f1",
  },
  {
    id: 3,
    title: "TVET Spot",
    description:
      "Connects TVET students, government, and companies by improving curriculum alignment and preparing students for the job market.",
    longDescription:
      "TVET Spot is a hackathon project that addresses the gap between TVET education and industry needs in Rwanda. The platform facilitates communication between students, educational institutions, government bodies, and companies to align curricula with real-world job requirements.",
    technologies: ["React", "TypeScript", "Express", "PostgreSQL", "REST API"],
    type: "hackathon",
    teamSize: 4,
    role: "Full Stack Developer",
    responsibilities: [
      "Frontend development with React & TypeScript",
      "Backend API with Express",
      "PostgreSQL database design",
      "UI/UX implementation",
    ],
    github: "https://github.com/angeuwizera",
    featured: true,
    color: "#06b6d4",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Development Trainee",
    organization: "The Gym",
    period: "2024 — Present",
    description:
      "Intensive software development training program focused on full-stack web development with modern technologies.",
    highlights: [
      "Built production-ready full-stack applications",
      "Mastered JavaScript, TypeScript, React, Node.js ecosystem",
      "Worked on real-world projects with industry mentors",
      "Practiced agile development methodologies",
      "Collaborated in team-based software projects",
    ],
    type: "training",
    icon: "🏋️",
  },
  {
    id: 2,
    title: "IT Student",
    organization: "RP Kigali College",
    period: "2023 — Present",
    description:
      "Pursuing a degree in Information Technology with focus on software engineering and computer science fundamentals.",
    highlights: [
      "Core computer science and IT fundamentals",
      "Software engineering principles",
      "Database management systems",
      "Networking and systems administration",
    ],
    type: "education",
    icon: "🎓",
  },
  {
    id: 3,
    title: "Hackathon Participant",
    organization: "TVET Spot Hackathon",
    period: "2024",
    description:
      "Participated in a competitive hackathon, building TVET Spot — a platform connecting students, government, and industry.",
    highlights: [
      "Delivered a working product under time pressure",
      "Collaborated with a 4-person cross-functional team",
      "Implemented both frontend and backend features",
      "Presented solution to judges and stakeholders",
    ],
    type: "hackathon",
    icon: "⚡",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    organization: "HerVoice Rwanda (Personal Project)",
    period: "2024",
    description:
      "Independently designed and developed a full-stack platform supporting women and girls facing violence in Rwanda.",
    highlights: [
      "Solo end-to-end development",
      "Designed and implemented REST API",
      "Built responsive React frontend",
      "Deployed and maintained the application",
    ],
    type: "project",
    icon: "💜",
  },
];
