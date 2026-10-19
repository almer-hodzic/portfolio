import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";

const navigation = [
  { label: "Work", to: "/#work" },
  { label: "Experience", to: "/#experience" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/[0.96] backdrop-blur-xl">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav aria-label="Main navigation" className="site-container grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-2 py-3 lg:flex lg:gap-8">
        <Link to="/" className="focus-link w-fit font-display text-sm font-semibold lg:mr-auto">{profile.name}</Link>
        <div className="order-3 col-span-2 flex flex-wrap items-center justify-between gap-x-5 lg:order-2 lg:justify-start lg:gap-6">
          {navigation.map(({ label, to }) => <Link key={to} to={to} className="focus-link inline-flex min-h-10 items-center text-sm text-muted transition-colors hover:text-ink">{label}</Link>)}
        </div>
        <div className="order-2 flex items-center gap-1 lg:order-3 lg:border-l lg:border-line lg:pl-5">
          {profile.githubUrl && <a href={profile.githubUrl} aria-label="GitHub profile" title="GitHub" className="focus-link inline-flex h-9 w-9 items-center justify-center text-muted hover:text-ink"><Github size={18} aria-hidden="true" /></a>}
          {profile.linkedinUrl && <a href={profile.linkedinUrl} aria-label="LinkedIn profile" title="LinkedIn" className="focus-link inline-flex h-9 w-9 items-center justify-center text-muted hover:text-ink"><Linkedin size={18} aria-hidden="true" /></a>}
          {profile.cvUrl && <a href={profile.cvUrl} className="focus-link ml-2 inline-flex min-h-9 items-center text-sm text-muted hover:text-ink">Résumé</a>}
        </div>
      </nav>
    </header>
  );
}
