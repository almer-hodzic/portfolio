import HeroBoat from "./HeroBoat";

export default function HeroPortrait() {
  return (
    <div className="relative mx-auto mt-10 w-[180px] pb-20 sm:w-[220px] xl:absolute xl:right-10 xl:top-24 xl:mt-0 xl:w-[260px]">
      <div className="aspect-[4/5] overflow-hidden rounded-lg border border-line/80">
        <img src="/hero/slika.png" alt="Portrait of Almer Hodžić" width={1086} height={1448}
          decoding="async" className="block h-full w-full object-cover object-[50%_25%]" />
      </div>
      <HeroBoat />
    </div>
  );
}
