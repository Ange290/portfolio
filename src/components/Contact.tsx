import { useState } from "react";
import { Send, GitBranch, Globe, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

type Status = "idle" | "loading" | "done";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise(r => setTimeout(r, 1200));
    setStatus("done");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Contact</p>
        <h2 className="text-2xl font-semibold tracking-tight mb-2">Get in touch</h2>
        <p className="text-sm text-muted-foreground mb-10 max-w-md">
          Open to internships, collaborations, and interesting projects. Drop me a message.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs text-muted-foreground">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                  className="w-full h-9 rounded-md border border-border bg-transparent px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-muted-foreground">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="you@example.com"
                  className="w-full h-9 rounded-md border border-border bg-transparent px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                placeholder="Tell me about your project or opportunity..."
                className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors resize-none"
              />
            </div>
            <Button type="submit" disabled={status === "loading" || status === "done"} size="md">
              {status === "loading" && (
                <span className="h-3.5 w-3.5 rounded-full border-2 border-current border-t-transparent animate-spin" />
              )}
              {status === "done" ? "Message sent ✓" : status === "loading" ? "Sending…" : (
                <><Send size={13} /> Send message</>
              )}
            </Button>
          </form>

          {/* Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "angeuwizera@gmail.com", href: "mailto:angeuwizera@gmail.com" },
                { icon: GitBranch, label: "GitHub", value: "github.com/angeuwizera", href: "https://github.com/angeuwizera" },
                { icon: Globe, label: "LinkedIn", value: "linkedin.com/in/angeuwizera", href: "https://linkedin.com/in/angeuwizera" },
                { icon: MapPin, label: "Location", value: "Kigali, Rwanda", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon size={14} className="text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm hover:text-muted-foreground transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Separator />

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-muted-foreground">Available for opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
