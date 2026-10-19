import { ArrowDown, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "../data/profile";
import HeroPortrait from "../components/HeroPortrait";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const entrance = (delay: number) => ({
    initial: reduceMotion ? false as const : { opacity: 0, y: 12 },
    animate: reduceMotion ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] as const },
  });
  return (
    <section className="border-b border-line/70">
      <div className="site-container relative isolate overflow-hidden py-12 sm:py-14 lg:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute right-6 top-20 -z-10 hidden h-56 w-56 grid-cols-6 grid-rows-6 gap-px bg-line/60 opacity-30 xl:grid">
          {Array.from({ length: 36 }).map((_, index) => <div key={index} className={[8,15,21,28].includes(index) ? "bg-[#dfe3d9]" : "bg-paper"} />)}
        </div>
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_220px] md:items-center md:gap-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_280px] xl:gap-16">
          <div className="min-w-0">
            <motion.p {...entrance(0)} className="mb-6 text-sm text-muted">{profile.location}</motion.p>
            <motion.h1 {...entrance(0.04)} className="max-w-5xl font-display text-[clamp(3.25rem,8vw,7.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">{profile.name}</motion.h1>
            <motion.div {...entrance(0.08)} className="mt-7 max-w-3xl">
              <p className="font-display text-[clamp(1.55rem,3vw,2.5rem)] font-medium leading-[1.25]">Software engineer building<br className="hidden sm:block" /> full-stack and data-driven products.</p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">Interfaces, backend systems, and data workflows with C#, .NET, TypeScript, and Python.</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
                <a className="button-primary" href="#work">View my work <ArrowDown size={16} aria-hidden="true" /></a>
                {profile.githubUrl && <a className="text-link inline-flex min-h-11 items-center gap-2 text-sm font-medium" href={profile.githubUrl}><Github size={17} aria-hidden="true" />GitHub</a>}
              </div>
              {profile.cvUrl && <a href={profile.cvUrl} download className="text-link mt-4 inline-flex min-h-10 items-center text-sm text-muted">Download résumé</a>}
            </motion.div>
          </div>
          <HeroPortrait />
        </div>
      </div>
    </section>
  );
}
