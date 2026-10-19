import { motion, useReducedMotion } from "framer-motion";
import { useSearchParams } from "react-router-dom";

const boats = {
  minimal: "/hero/minimal.png",
  merry: "/hero/merry.png",
  journey: "/hero/journey.png",
};

export default function HeroBoat() {
  const [searchParams] = useSearchParams();
  const requested = searchParams.get("boat");
  const variant = requested === "minimal" || requested === "journey" ? requested : "merry";
  const reduceMotion = useReducedMotion();
  const sailing = {
    duration: 12,
    repeat: Infinity,
    repeatDelay: 1.2,
    ease: "linear" as const,
    times: [0, 0.04, 0.84, 0.94, 1],
  };
  const bobbing = { duration: 4.2, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <div aria-hidden="true" data-hero-boat className="pointer-events-none absolute left-0 top-[calc(100%-80px)] z-[1] h-20 w-full overflow-hidden">
      <motion.div className="relative h-full w-full"
        initial={{ x: reduceMotion ? "50%" : "0%", opacity: 1 }}
        animate={reduceMotion ? { x: "50%", opacity: 1 } : {
          x: ["0%", "4%", "92%", "100%", "100%"], opacity: [0, 1, 1, 0, 0],
        }} transition={reduceMotion ? { duration: 0 } : sailing}>
        {/* Counter-translation by the boat's own width keeps both endpoints inside the track. */}
        <motion.div className="relative h-full w-[70px] sm:w-[90px] xl:w-[100px]"
          initial={{ x: reduceMotion ? "-50%" : "0%" }}
          animate={reduceMotion ? { x: "-50%" } : { x: ["0%", "-4%", "-92%", "-100%", "-100%"] }}
          transition={reduceMotion ? { duration: 0 } : sailing}>
          <motion.div className="absolute left-1/4 top-[50px] h-3 w-1/2 rounded-[50%] bg-ink blur-[4px] sm:top-[60px] xl:top-[65px]"
            initial={{ scaleX: 1, scaleY: 1, opacity: 0.12 }}
            animate={reduceMotion ? { scaleX: 1, scaleY: 1, opacity: 0.12 } : {
              scaleX: [1, 0.84, 1, 1.12, 1], scaleY: [1, 0.82, 1, 1.1, 1], opacity: [0.13, 0.07, 0.13, 0.2, 0.13],
            }} transition={reduceMotion ? { duration: 0 } : bobbing} />
          <motion.img src={boats[variant]} alt="" width={1774} height={887} draggable={false}
            className="absolute left-0 top-[18px] block h-auto w-full select-none"
            initial={{ y: 0, rotate: 0 }}
            animate={reduceMotion ? { y: 0, rotate: 0 } : {
              y: [0, -8, 0, 8, 0], rotate: [-2, 0, 2, 0, -2],
            }} transition={reduceMotion ? { duration: 0 } : bobbing} />
        </motion.div>
      </motion.div>
    </div>
  );
}
