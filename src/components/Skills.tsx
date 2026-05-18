import { Badge } from "./ui/badge";

const groups = [
  {
    label: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Tailwind CSS", "Responsive Design"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Async / ES6+"],
  },
  {
    label: "Database",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Skills</p>
        <h2 className="text-2xl font-semibold tracking-tight mb-10">What I work with</h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {groups.map((g) => (
            <div key={g.label}>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
                {g.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <Badge key={s} variant="secondary">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
