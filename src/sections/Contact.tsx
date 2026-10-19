import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/profile";
import { Reveal } from "../components/Motion";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-block bg-ink text-paper">
      <div className="site-container">
        <Reveal>
          <SectionHeading number="04" title="Contact" id="contact-title" dark />
          <p className="max-w-3xl font-display text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.02em]">Let’s build something useful.</p>
          {profile.email && <a href={`mailto:${profile.email}`} className="focus-link-dark mt-7 inline-flex min-h-11 max-w-full items-center gap-3 text-[clamp(1.1rem,2vw,1.65rem)] underline decoration-paper/40 underline-offset-8 transition-colors hover:text-paper/80"><span className="min-w-0 break-all">{profile.email}</span><ArrowUpRight size={22} className="shrink-0" aria-hidden="true" /></a>}
          <div className="mt-6 flex flex-wrap items-center gap-7 text-sm text-paper/70">
            {profile.linkedinUrl && <a href={profile.linkedinUrl} className="focus-link-dark inline-flex min-h-10 items-center gap-1 hover:text-paper">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></a>}
            {profile.githubUrl && <a href={profile.githubUrl} className="focus-link-dark inline-flex min-h-10 items-center gap-1 hover:text-paper">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
