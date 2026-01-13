import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export function initParallax(onReady?: () => void) {
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

  const refreshAll = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh(true);
        onReady?.(); // ← сообщаем что GSAP готов
      });
    });
  };

  window.addEventListener("load", refreshAll);
  window.addEventListener("DOMContentLoaded", refreshAll);

  setTimeout(() => {
    ScrollTrigger.refresh(true);
    onReady?.();
  }, 400);

  

  return () => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
    window.removeEventListener("load", refreshAll);
    window.removeEventListener("DOMContentLoaded", refreshAll);
  };

}

