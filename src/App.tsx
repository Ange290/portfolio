import { useState, useEffect } from 'react';
import {
  Mail,
  Award,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Code2,
  Layers,
  Database,
  Wrench,
  Brain,
  MapPin,
  GitBranch,
  Users,
  User,
  Zap,
} from 'lucide-react';

// lucide-react v1.x uses GitBranch instead of Github
const Github = GitBranch;

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const NAV_LINKS = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

const SKILLS = {
  Languages:  { icon: Code2,    items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'] },
  Frameworks: { icon: Layers,   items: ['React', 'Express.js', 'Tailwind CSS', 'Vite'] },
  Backend:    { icon: Database, items: ['Node.js', 'MongoDB', 'PostgreSQL', 'REST APIs', 'JWT Auth'] },
  Tools:      { icon: Wrench,   items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
  Concepts:   { icon: Brain,    items: ['OOP', 'MVC Architecture', 'Async / ES6+', 'Responsive Design'] },
};

const CERTIFICATIONS = [
  'Software Development Trainee — The Gym',
  'IT Student — RP Kigali College',
  'Hackathon Participant — TVET Spot',
];

const PROJECTS = [
  {
    title: 'HerVoice Rwanda',
    type: 'Personal Project',
    typeIcon: User,
    role: 'Full Stack Developer',
    description:
      'A digital platform supporting women and girls facing violence or harassment by providing accessible and safe reporting channels. Built solo from scratch — API, database, auth, and UI.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
    github: 'https://github.com/Ange290',
    live: null,
    gradient: 'from-pink-500/20 to-rose-500/20',
    border: 'border-pink-700/40',
  },
  {
    title: 'Umwalimu Loan Hub',
    type: 'Team · 4 members',
    typeIcon: Users,
    role: 'Backend Developer',
    description:
      'A loan management platform helping teachers in Rwanda request and manage loans digitally. Responsible for backend API architecture, database design, and authentication system.',
    tech: ['Node.js', 'Express', 'MongoDB', 'REST API', 'CSS'],
    github: 'https://github.com/Ange290',
    live: null,
    gradient: 'from-violet-500/20 to-purple-500/20',
    border: 'border-violet-700/40',
  },
  {
    title: 'TVET Spot',
    type: 'Hackathon · 4 members',
    typeIcon: Zap,
    role: 'Full Stack Developer',
    description:
      'Connects TVET students, government, and companies by improving curriculum alignment and preparing students for the job market. Worked on both frontend and backend under time pressure.',
    tech: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
    github: 'https://github.com/Ange290',
    live: null,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    border: 'border-cyan-700/40',
  },
];

const EXPERIENCE = [
  {
    title: 'Software Development Trainee',
    org: 'The Gym',
    period: '2024 — Present',
    desc: 'Intensive full-stack training building production-ready applications with JavaScript, TypeScript, React, and Node.js under industry mentors. Worked on real-world projects and collaborative team development.',
  },
  {
    title: 'IT Student',
    org: 'RP Kigali College',
    period: '2023 — Present',
    desc: 'Pursuing a degree in Information Technology covering software engineering, databases, networking, and computer science fundamentals.',
  },
  {
    title: 'Hackathon Participant',
    org: 'TVET Spot — Team Project',
    period: '2024',
    desc: 'Built a working platform connecting TVET students, government, and industry in a competitive hackathon. Delivered both frontend and backend features under tight deadlines.',
  },
  {
    title: 'Solo Full Stack Developer',
    org: 'HerVoice Rwanda',
    period: '2024',
    desc: 'Independently designed and built a full-stack platform supporting women facing violence in Rwanda — from REST API design to responsive React UI and JWT authentication.',
  },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* scroll spy */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV_LINKS.map((id) => document.getElementById(id));
      const current = sections.find((el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current.id);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white font-sans antialiased">

      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0f1e]/95 backdrop-blur-xl shadow-xl shadow-black/40 border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="text-lg font-bold tracking-tight"
          >
            <span className="text-white">Ange</span>
            <span className="text-cyan-400">.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`px-4 py-2 rounded-lg text-sm capitalize transition-all duration-200 ${
                  activeSection === s
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {s}
              </button>
            ))}
            <a
              href="mailto:uange209@gmail.com"
              className="ml-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-semibold rounded-lg transition-all duration-200"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0f1e]/98 backdrop-blur-xl border-t border-white/5">
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((s) => (
                <button
                  key={s}
                  onClick={() => scrollTo(s)}
                  className={`text-left px-4 py-3 rounded-lg capitalize text-sm transition-all ${
                    activeSection === s
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {s}
                </button>
              ))}
              <a
                href="mailto:uange209@gmail.com"
                className="mt-2 px-4 py-3 bg-cyan-500 text-slate-950 text-sm font-semibold rounded-lg text-center"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="min-h-screen flex items-center px-6 lg:px-8 pt-16">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto w-full relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                Available for opportunities
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Ange
                </span>
                <br />
                <span className="text-white">Uwizera</span>
              </h1>

              <p className="text-xl text-cyan-300 font-medium mb-2">Full Stack Developer</p>
              <p className="text-sm text-slate-500 mb-6 tracking-widest uppercase">
                Frontend · Backend · API Design
              </p>

              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                Passionate about building impactful digital solutions for communities through
                modern web technologies. I write clean, maintainable code and ship things that matter.
              </p>

              <div className="flex items-center gap-2 text-slate-500 text-sm mb-8">
                <MapPin size={14} className="text-cyan-400" />
                <span>Kigali, Rwanda</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:uange209@gmail.com"
                  className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <Mail size={16} />
                  Get In Touch
                </a>
                <a
                  href="https://github.com/Ange290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                >
                  <GitBranch size={16} />
                  View GitHub
                </a>
              </div>
            </div>

            {/* Avatar side */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-md opacity-30 scale-105" />
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
                  <img
                    src="/ange.jpeg"
                    alt="Ange Uwizera — Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 bg-[#0a0f1e] border border-cyan-400/30 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-xs text-slate-400">Training</p>
                  <p className="text-sm font-bold text-cyan-400">The Gym</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="flex justify-center mt-16 lg:mt-24">
            <button
              onClick={() => scrollTo('about')}
              className="flex flex-col items-center gap-2 text-slate-600 hover:text-cyan-400 transition-colors group"
            >
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <ChevronDown size={20} className="animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="About Me" title="Background & Education" />
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {/* Education card */}
            <div className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-cyan-400/30 rounded-2xl p-8 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap size={24} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-1">Education</h3>
              <p className="text-slate-400 text-sm mb-4">Information Technology</p>
              <p className="text-slate-300 font-medium">
                Bachelor of Science in Information Technology
              </p>
              <p className="text-slate-500 text-sm mt-1">RP Kigali College</p>
              <div className="mt-4 inline-flex items-center gap-2 bg-cyan-400/10 text-cyan-400 text-sm px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                2023 — Present · Ongoing
              </div>
            </div>

            {/* Certifications card */}
            <div className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-violet-400/30 rounded-2xl p-8 transition-all duration-300">
              <div className="w-12 h-12 bg-violet-400/10 rounded-xl flex items-center justify-center mb-6">
                <Award size={24} className="text-violet-400" />
              </div>
              <h3 className="text-xl font-bold mb-1">Training & Achievements</h3>
              <p className="text-slate-400 text-sm mb-4">Professional development</p>
              <ul className="space-y-3">
                {CERTIFICATIONS.map((cert, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="mt-0.5 w-5 h-5 bg-violet-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-violet-400 text-xs">✓</span>
                    </span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-24 px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Skills" title="Technical Expertise" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {Object.entries(SKILLS).map(([category, { icon: Icon, items }]) => (
              <div
                key={category}
                className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-cyan-400/20 rounded-2xl p-6 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                    <Icon size={18} className="text-cyan-400" />
                  </div>
                  <h3 className="font-semibold text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-slate-800/80 text-slate-300 text-xs px-3 py-1.5 rounded-lg border border-white/5 hover:border-cyan-400/30 hover:text-cyan-300 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Projects" title="What I've Built" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {PROJECTS.map((project, i) => {
              const TypeIcon = project.typeIcon;
              return (
                <div
                  key={i}
                  className={`relative bg-gradient-to-br ${project.gradient} border ${project.border} rounded-2xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-all duration-300 group`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <span className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                        <TypeIcon size={11} />
                        {project.type}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={14} className="text-slate-400" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        aria-label="GitHub repository"
                      >
                        <Github size={14} className="text-slate-400" />
                      </a>
                    </div>
                  </div>

                  <p className="text-xs text-cyan-400/80 font-medium">{project.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-xs text-slate-400 bg-black/20 px-2.5 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-slate-500 text-sm mt-8">
            More projects on{' '}
            <a
              href="https://github.com/Ange290"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              GitHub →
            </a>
          </p>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-24 px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Experience" title="My Journey" />
          <div className="mt-12 max-w-3xl mx-auto space-y-0">
            {EXPERIENCE.map((item, i) => (
              <div key={i} className="relative flex gap-6">
                {/* Timeline line */}
                {i < EXPERIENCE.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-0 w-px bg-white/5" />
                )}
                {/* Dot */}
                <div className="flex-shrink-0 mt-1.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>
                </div>
                {/* Content */}
                <div className="pb-10">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <span className="text-xs text-slate-500 bg-white/5 px-2 py-0.5 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-cyan-400/80 mb-2">{item.org}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader label="Contact" title="Let's Work Together" />
          <p className="text-slate-400 text-lg leading-relaxed mt-6 mb-12">
            I'm open to frontend, backend, and full-stack roles where quality and impact matter.
            Feel free to reach out — I'd love to connect.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <ContactCard
              icon={<Mail size={20} className="text-cyan-400" />}
              label="Email"
              value="uange209@gmail.com"
              href="mailto:uange209@gmail.com"
            />
            <ContactCard
              icon={<Github size={20} className="text-cyan-400" />}
              label="GitHub"
              value="github.com/Ange290"
              href="https://github.com/Ange290"
              external
            />
          </div>

          <a
            href="mailto:uange209@gmail.com"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            <Mail size={18} />
            Send Me an Email
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()}{' '}
            <span className="text-slate-300">Ange Uwizera</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Ange290"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:uange209@gmail.com"
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─────────────────────────────────────────────
   REUSABLE COMPONENTS
───────────────────────────────────────────── */

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="text-center">
      <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">
        {label}
      </span>
      <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">{title}</h2>
      <div className="mt-4 mx-auto w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex flex-col items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-cyan-400/30 rounded-2xl p-6 transition-all duration-300 group"
    >
      <div className="w-10 h-10 bg-cyan-400/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
        {icon}
      </div>
      <div className="text-center">
        <p className="text-xs text-slate-500 mb-1">{label}</p>
        <p className="text-sm text-white font-medium break-all">{value}</p>
      </div>
    </a>
  );
}
