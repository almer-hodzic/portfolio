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
              <p className="mt-6 max-w-2xl leading-7">Worked across frontend, backend, analytics and QA/testing responsibilities in an existing football technology product — implementing features, reproducing and investigating defects, verifying application behaviour across UI, APIs and data layers, and improving search, filtering and reporting workflows.</p>
              <ul className="mt-4 max-w-2xl list-disc space-y-3 pl-5 leading-7 text-muted">
                <li>Worked on BigQuery analytics and data-processing features for match reporting and data workflows.</li>
                <li>Implemented and improved match sorting and filtering, PDF match reports, and frontend/backend features across the existing product.</li>
              </ul>
              <p className="mt-5 text-sm leading-7 text-muted">BigQuery · Analytics · PDF match reports · Sorting / filtering · QA / Testing · Defect investigation · API / data verification</p>
              {profile.cvUrl && <a href={profile.cvUrl} className="text-link mt-5 inline-flex min-h-10 items-center gap-1 text-sm">View résumé <ArrowUpRight size={15} aria-hidden="true" /></a>}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
