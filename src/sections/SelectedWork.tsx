import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectPreview from "../components/ProjectPreview";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";
import { Reveal } from "../components/Motion";

export default function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="section-block">
      <div className="site-container">
        <Reveal><SectionHeading number="01" title="Selected Work" id="work-title" /></Reveal>
        <div className="space-y-10 sm:space-y-12">
          {projects.map((project, index) => (
            <article key={project.slug}>
              <Reveal className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-8">
                <div className="min-w-0">
                  <div className="mb-5 space-y-2 text-sm text-muted">
                    <p><span className="mr-4 tabular-nums">0{index + 1}</span>{project.year} <span className="mx-2" aria-hidden="true">/</span> {project.category}</p>
                    <p className={index === 0 ? "font-medium text-[#526147]" : ""}>{index === 0 ? "Flagship project" : "Completed application"}</p>
                  </div>
                  <h3 className="font-display text-[clamp(2.5rem,4.5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.02em]"><Link to={`/projects/${project.slug}`} className="focus-link transition-colors hover:text-[#526147]">{project.name}</Link></h3>
                  <div className="min-w-0">
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{project.summary}</p>
                    <ul aria-label={`${project.name} technologies`} className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                    <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-2">
                      <Link to={`/projects/${project.slug}`} className="text-link inline-flex min-h-11 items-center gap-2 font-medium">View case study <ArrowRight size={17} aria-hidden="true" /></Link>
                      <a href={project.githubUrl} className="text-link inline-flex min-h-11 items-center gap-1 text-sm text-muted">GitHub <ArrowUpRight size={15} aria-hidden="true" /></a>
                    </div>
                  </div>
                </div>
                <ProjectPreview project={project} caption={false} />
              </Reveal>
              {index < projects.length - 1 && <div className="mt-10 border-b border-line/70 sm:mt-12" />}
            </article>
          ))}
        </div>
        <Reveal className="mt-10 border-t border-line/70 pt-8 sm:mt-12">
          <aside aria-labelledby="additional-work-title" className="max-w-3xl">
            <h3 id="additional-work-title" className="text-sm font-semibold text-muted">Additional engineering work · Academic work</h3>
            <h4 className="mt-5 font-display text-xl font-semibold">CineMatch</h4>
            <p className="mt-1 text-sm text-muted">Software Architecture &amp; Quality Design</p>
            <p className="mt-3 leading-7 text-muted">Academic software architecture project for a movie recommendation platform, with explicit attention to testability, validation, failure handling, fallback behaviour and system stability.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
              <li>Defined system/API boundaries and user roles.</li>
              <li>Considered unit and integration testing boundaries.</li>
              <li>Designed fallback behaviour for recommendation and external API failures.</li>
              <li>Treated testability and stability as architecture quality attributes.</li>
            </ul>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
