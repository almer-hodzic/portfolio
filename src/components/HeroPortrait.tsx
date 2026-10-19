import HeroBoat from "./HeroBoat";

export default function HeroPortrait() {
  return (
    <div className="relative mx-auto w-[180px] pb-20 sm:w-[220px] md:w-full">
      <div className="aspect-[4/5] overflow-hidden rounded-lg border border-line/80">
        <img src="/hero/slika.png" alt="Portrait of Almer Hodžić" width={1086} height={1448}
          decoding="async" className="block h-full w-full object-cover object-[50%_25%]" />
      </div>
      <HeroBoat />
    </div>
  );
}
