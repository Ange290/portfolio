import { useState, useEffect } from "react";
import { ArrowRight, Download, GitBranch, Globe, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const roles = ["Full Stack Developer", "React Developer", "Node.js Engineer", "Problem Solver"];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        if (charIdx > 0) {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        } else {
          setDeleting(false);
          setRoleIndex(i => (i + 1) % roles.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-24 w-full">
        <div className="max-w-2xl">
          {/* Status */}
          <div className="flex items-center gap-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3">
            Ange Uwizera
          </h1>

          {/* Typing role */}
          <p className="text-xl sm:text-2xl text-muted-foreground font-light mb-6 h-8">
            <span className="typing-cursor">{displayed}</span>
          </p>

          {/* Bio */}
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Passionate full-stack developer focused on building impactful digital solutions
            for communities through modern web technologies. IT student at{" "}
            <span className="text-foreground font-medium">RP Kigali College</span> and
            software development trainee at{" "}
            <span className="text-foreground font-medium">The Gym</span>.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Button onClick={() => scrollTo("projects")} size="lg">
              View Projects <ArrowRight size={14} />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollTo("contact")}>
              <Mail size={14} /> Contact Me
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="/cv.pdf" download>
                <Download size={14} /> CV
              </a>
            </Button>
          </div>

          <Separator className="mb-8" />

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/angeuwizera"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <GitBranch size={14} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/angeuwizera"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe size={14} /> LinkedIn
            </a>
            <a
              href="mailto:angeuwizera@gmail.com"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={14} /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
