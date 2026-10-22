import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { Reveal } from "../components/Motion";
import { profile } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-block border-t border-line/70">
      <div className="site-container">
        <Reveal>
          <SectionHeading number="02" title="Experience" id="experience-title" />
          <div className="grid gap-6 lg:grid-cols-[0.45fr_1fr] lg:gap-12">
            <p className="text-sm leading-7 text-muted"><time dateTime="2025-12">December 2025</time> — <time dateTime="2026-05">May 2026</time></p>
            <div className="min-w-0">
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">Software Developer Intern</h3>
              <p className="mt-2 text-lg text-muted">FootballPathX</p>
              <p className="mt-6 max-w-2xl leading-7">Analytics, reporting, and application features in an existing product.</p>
              <ul className="mt-4 max-w-2xl list-disc space-y-3 pl-5 leading-7 text-muted">
                <li>Worked on BigQuery analytics and data-processing features for match reporting and data workflows.</li>
                <li>Implemented and improved match sorting and filtering, PDF match reports, and frontend/backend features across the existing product.</li>
                <li>Alongside development work, contributed to QA/testing by reproducing defects, testing new and existing functionality, checking API responses and data flows, and verifying search, filtering and reporting behaviour.</li>
              </ul>
              <p className="mt-5 text-sm leading-7 text-muted">BigQuery · Analytics · PDF match reports · Sorting / filtering</p>
              {profile.cvUrl && <a href={profile.cvUrl} className="text-link mt-5 inline-flex min-h-10 items-center gap-1 text-sm">View résumé <ArrowUpRight size={15} aria-hidden="true" /></a>}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
