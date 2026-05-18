import { Separator } from "./ui/separator";

const items = [
  {
    title: "Software Development Trainee",
    org: "The Gym",
    period: "2024 — Present",
    desc: "Intensive full-stack training building production-ready applications with JavaScript, TypeScript, React, and Node.js under industry mentors.",
  },
  {
    title: "IT Student",
    org: "RP Kigali College",
    period: "2023 — Present",
    desc: "Pursuing a degree in Information Technology covering software engineering, databases, networking, and computer science fundamentals.",
  },
  {
    title: "Hackathon — TVET Spot",
    org: "Team Project",
    period: "2024",
    desc: "Built a platform connecting TVET students, government, and industry in a competitive hackathon. Worked on both frontend and backend.",
  },
  {
    title: "Full Stack Developer",
    org: "HerVoice Rwanda (Personal)",
    period: "2024",
    desc: "Independently designed and built a full-stack platform supporting women facing violence in Rwanda — from API design to responsive UI.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Experience</p>
        <h2 className="text-2xl font-semibold tracking-tight mb-10">My journey</h2>

        <div className="space-y-0">
          {items.map((item, i) => (
            <div key={i}>
              <div className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 py-6">
                <div>
                  <p className="text-xs text-muted-foreground">{item.period}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.org}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1.5">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
              {i < items.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
