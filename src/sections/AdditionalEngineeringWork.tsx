import { Reveal } from "../components/Motion";

export default function AdditionalEngineeringWork() {
  return (
    <section aria-labelledby="additional-engineering-title" className="pb-12 sm:pb-16">
      <div className="site-container">
        <Reveal className="border-t border-line/70 pt-8">
          <h2 id="additional-engineering-title" className="font-display text-xl font-semibold text-muted">Additional Engineering Work</h2>
          <article className="mt-6 grid gap-5 lg:grid-cols-[0.45fr_1fr] lg:gap-12">
            <div className="min-w-0">
              <p className="text-xs leading-6 text-[#526147]">Academic project · Software Architecture</p>
              <h3 className="mt-2 font-display text-2xl font-semibold">CineMatch</h3>
              <p className="mt-2 text-sm leading-6 text-muted">Software Architecture &amp; Quality Design</p>
            </div>
            <div className="min-w-0 max-w-2xl">
              <p className="leading-7 text-muted">Academic software architecture project for a movie recommendation platform, focused on modular system design, API boundaries, testability, validation, failure handling and system stability.</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
                <li>Designed a modular architecture for a movie recommendation platform.</li>
                <li>Defined API boundaries, user roles and major system flows.</li>
                <li>Treated testability, validation and stability as explicit quality attributes.</li>
                <li>Designed fallback behaviour for recommendation and external API failures.</li>
              </ul>
              <ul aria-label="CineMatch engineering context" className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                <li>Modular architecture</li>
                <li>Testability</li>
                <li>System design</li>
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
