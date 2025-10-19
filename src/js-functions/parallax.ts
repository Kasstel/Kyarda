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
        start: "top bottom",   // когда секция появляется
        end: "bottom top",     // когда уходит вверх
        scrub: true            // плавное связывание со скроллом
      }
    });
  });

  // возвращаем cleanup, как у тебя было
  return () => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}
