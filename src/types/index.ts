export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  type: "personal" | "team" | "hackathon";
  teamSize?: number;
  role: string;
  responsibilities?: string[];
  github?: string;
  live?: string;
  featured: boolean;
  color: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: "frontend" | "backend" | "database" | "tools";
  color: string;
}

export interface Experience {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  type: "training" | "hackathon" | "project" | "education";
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
