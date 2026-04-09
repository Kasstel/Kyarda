import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initParallax() {
  const layers = gsap.utils.toArray<HTMLElement>(".layer");

  layers.forEach((layer) => {
    const speed = parseFloat(layer.dataset.speed || "1");

    gsap.to(layer, {
      y: () => -(window.innerHeight * (speed - 1)),
      ease: "none",
      scrollTrigger: {
        trigger: layer.closest(".grid-section") || layer,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  });

  return () => {
    // убиваем только свои триггеры — не все подряд
    layers.forEach((layer) => {
      ScrollTrigger.getAll()
        .filter((st) => st.vars.trigger === (layer.closest(".grid-section") || layer))
        .forEach((st) => st.kill());
    });
  };
}