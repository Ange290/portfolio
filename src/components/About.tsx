import { Separator } from "./ui/separator";

const facts = [
  { label: "Education", value: "IT @ RP Kigali College" },
  { label: "Training", value: "Software Dev @ The Gym" },
  { label: "Location", value: "Kigali, Rwanda" },
  { label: "Focus", value: "Full Stack Web Development" },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">About</p>
        <h2 className="text-2xl font-semibold tracking-tight mb-8">Who I am</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a full-stack developer who enjoys building things that live on the internet.
              I care about clean code, good UX, and solving real problems — not just writing features.
            </p>
            <p>
              Currently studying IT at RP Kigali College and training intensively at The Gym,
              where I've worked on production-grade projects using the modern JavaScript ecosystem.
            </p>
            <p>
              I've participated in hackathons, built solo projects from scratch, and collaborated
              in cross-functional teams — always focused on shipping something that matters.
            </p>
          </div>

          <div className="space-y-4">
            {facts.map((f, i) => (
              <div key={i}>
                <div className="flex items-start justify-between py-3">
                  <span className="text-sm text-muted-foreground">{f.label}</span>
                  <span className="text-sm font-medium text-right">{f.value}</span>
                </div>
                {i < facts.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
