import { ExternalLink, GitBranch, Users, User, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "HerVoice Rwanda",
    description:
      "A digital platform supporting women and girls facing violence by providing safe, accessible reporting channels.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    type: "Personal",
    typeIcon: User,
    role: "Full Stack Developer",
    github: "https://github.com/angeuwizera",
    live: "",
  },
  {
    title: "Umwalimu Loan Hub",
    description:
      "A loan management platform helping teachers in Rwanda request and manage loans digitally.",
    tech: ["Node.js", "Express", "MongoDB", "CSS"],
    type: "Team · 4 members",
    typeIcon: Users,
    role: "Backend Developer",
    github: "https://github.com/angeuwizera",
    live: "",
  },
  {
    title: "TVET Spot",
    description:
      "Connects TVET students, government, and companies to improve curriculum alignment and job readiness.",
    tech: ["React", "TypeScript", "Express", "PostgreSQL"],
    type: "Hackathon · 4 members",
    typeIcon: Zap,
    role: "Full Stack Developer",
    github: "https://github.com/angeuwizera",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Projects</p>
        <h2 className="text-2xl font-semibold tracking-tight mb-10">What I've built</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => {
            const Icon = p.typeIcon;
            return (
              <Card key={p.title} className="flex flex-col hover:border-foreground/20 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Icon size={12} />
                      {p.type}
                    </span>
                    <div className="flex items-center gap-2">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="GitHub"
                        >
                          <GitBranch size={14} />
                        </a>
                      )}
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Live"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-base">{p.title}</CardTitle>
                  <CardDescription className="text-xs">{p.role}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
