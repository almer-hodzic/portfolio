import SectionHeading from "../components/SectionHeading";
import { technologies, profile } from "../data/profile";
import { Reveal } from "../components/Motion";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-block border-t border-line/70">
      <div className="site-container">
        <Reveal>
          <SectionHeading number="03" title="About" id="about-title" />
          <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:gap-12">
            <div className="max-w-md">
              <p className="text-lg leading-8">I build full-stack applications and data-driven software, connecting interfaces, backend services, and analytical workflows.</p>
              <p className="mt-5 leading-7 text-muted">HoopsLab brings together historical data, interactive analysis, and statistical modeling. MovieShop focuses on application architecture and customer workflows.</p>
              <p className="mt-6 text-sm text-muted">Based in {profile.location}.</p>
            </div>
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {Object.entries(technologies).map(([group, items]) => (
                <div key={group} className="border-t border-line/70 pt-4">
                  <h3 className="mb-3 font-semibold">{group}</h3>
                  <ul className="space-y-1 text-base leading-7 text-muted">{items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
