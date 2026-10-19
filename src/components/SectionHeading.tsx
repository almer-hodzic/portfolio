type SectionHeadingProps = {
  number: string;
  title: string;
  id?: string;
  dark?: boolean;
};

export default function SectionHeading({ number, title, id, dark = false }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-baseline gap-4 sm:mb-14 sm:gap-6">
      <span aria-hidden="true" className={`text-sm font-medium tabular-nums ${dark ? "text-paper/70" : "text-[#526147]"}`}>{number} —</span>
      <h2 id={id} className="font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-semibold leading-[1.1]">{title}</h2>
    </div>
  );
}
