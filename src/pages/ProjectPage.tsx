import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectPreview from "../components/ProjectPreview";
import SectionHeading from "../components/SectionHeading";
import { Reveal } from "../components/Motion";
import { getProject, projects } from "../data/projects";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug);
  const nextProject = projects.find((item) => item.slug !== slug);
  const featureImage = project?.gallery[0];
  const gallery = project?.gallery.slice(1) ?? [];
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      {!project ? (
        <main id="main-content" tabIndex={-1} className="site-container section-block">
          <h1 className="font-display text-5xl font-semibold">Project not found</h1>
          <Link className="text-link mt-8 inline-flex min-h-11 items-center gap-2" to="/#work"><ArrowLeft size={16} aria-hidden="true" />Back to work</Link>
        </main>
      ) : (
        <main id="main-content" tabIndex={-1}>
          <section className="site-container pb-10 pt-10 sm:pb-14 sm:pt-14">
            <Link className="text-link mb-8 inline-flex min-h-10 items-center gap-2 text-sm text-muted" to="/#work"><ArrowLeft size={16} aria-hidden="true" />Back to work</Link>
            <p className="mb-4 text-sm text-[#526147]">{project.slug === "hoopslab" ? "Flagship project" : "Full-stack application"}</p>
            <h1 className="break-words font-display text-[clamp(3rem,7vw,6rem)] font-semibold leading-[1.05] tracking-[-0.03em]">{project.name}</h1>
            <p className="mt-6 max-w-4xl text-xl leading-8 text-muted sm:text-2xl sm:leading-9">{project.description}</p>
            <dl className="mt-9 grid gap-x-8 gap-y-6 border-t border-line/70 pt-6 sm:grid-cols-[0.25fr_0.7fr_1fr]">
              <div><dt className="metadata-label">Year</dt><dd className="mt-2 text-sm leading-6">{project.year}</dd></div>
              <div><dt className="metadata-label">Type / status</dt><dd className="mt-2 text-sm leading-6">{project.category}<span className="block text-muted">{project.status}</span></dd></div>
              <div><dt className="metadata-label">Stack</dt><dd className="mt-2 text-sm leading-6 text-muted">{project.stack.join(" · ")}</dd></div>
            </dl>
          </section>
          <div className="site-container"><div className="mx-auto max-w-[1040px]"><ProjectPreview project={project} priority /></div></div>
          <section aria-labelledby="overview-title" className="section-block">
            <div className="site-container">
              <Reveal>
                <SectionHeading number="01" title="Overview" id="overview-title" />
                <div className="grid gap-8 lg:grid-cols-[0.45fr_1fr] lg:gap-12">
                  <dl className="grid grid-cols-3 gap-4 self-start lg:grid-cols-1 lg:gap-6">
                    {project.evidence.map((item) => <div key={item.label}><dt className="text-sm leading-6 text-muted">{item.label}</dt><dd className="mt-1 font-display text-[clamp(1.6rem,3vw,2.5rem)] font-semibold">{item.value}</dd></div>)}
                  </dl>
                  <div className="min-w-0 max-w-3xl">
                    <p className="text-lg leading-8">{project.overview}</p>
                    <h3 className="mb-4 mt-8 font-display text-xl font-semibold">What the application does</h3>
                    <ul className="list-disc space-y-3 pl-5 leading-7 text-muted">{project.features.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                </div>
              </Reveal>
              {featureImage && <Reveal className="mx-auto mt-10 max-w-[960px] sm:mt-12"><ProjectPreview project={project} image={featureImage} /></Reveal>}
            </div>
          </section>
          <section aria-labelledby="engineering-title" className="section-block border-t border-line/70">
            <div className="site-container">
              <Reveal>
                <SectionHeading number="02" title="Engineering highlights" id="engineering-title" />
                <ol className="grid gap-x-12 gap-y-8 md:grid-cols-2">
                  {project.engineering.map((item, index) => <li key={item} className="border-t border-line/70 pt-5"><span aria-hidden="true" className="mb-3 block text-sm text-[#526147]">0{index + 1}</span><p className="max-w-xl leading-7 text-muted">{item}</p></li>)}
                </ol>
                <div className="mt-10 max-w-3xl border-t border-line/70 pt-6">
                  <h3 className="mb-3 font-display text-xl font-semibold">Verification & scope</h3>
                  <p className="leading-7 text-muted">{project.evidenceNote}</p>
                  <p className="mt-4 leading-7 text-muted">{project.limitations}</p>
                </div>
              </Reveal>
            </div>
          </section>
          <section aria-labelledby="gallery-title" className="section-block border-t border-line/70">
            <div className="site-container">
              <Reveal><SectionHeading number="03" title="Inside the application" id="gallery-title" /></Reveal>
              <div className="grid items-start gap-x-8 gap-y-10 md:grid-cols-2">
                {gallery.map((image) => <Reveal key={image.src} className="min-w-0"><ProjectPreview project={project} image={image} /></Reveal>)}
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line/70 pt-8">
                <a href={project.githubUrl} className="button-primary"><Github size={17} aria-hidden="true" />View source on GitHub</a>
                <a href={project.docsUrl} className="text-link inline-flex min-h-11 items-center gap-1 text-sm">Read documentation <ArrowUpRight size={16} aria-hidden="true" /></a>
                {project.liveUrl && <a href={project.liveUrl} className="text-link inline-flex min-h-11 items-center gap-1 text-sm">Live demo <ArrowUpRight size={16} aria-hidden="true" /></a>}
              </div>
            </div>
          </section>
          {nextProject && <div className="border-t border-line/70"><div className="site-container flex flex-wrap items-center justify-between gap-7 py-10 sm:py-14"><Link to="/#work" className="text-link inline-flex min-h-11 items-center gap-2 text-sm text-muted"><ArrowLeft size={16} aria-hidden="true" />All work</Link><Link to={`/projects/${nextProject.slug}`} className="focus-link group"><span className="mb-2 block text-sm text-muted">Next project</span><span className="flex items-center gap-4 font-display text-3xl font-semibold sm:text-4xl">{nextProject.name}<ArrowRight size={25} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" /></span></Link></div></div>}
        </main>
      )}
      <Footer />
    </div>
  );
}
