import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initParallax() {
  // Только слои с явным data-speed: слои шапки анимирует сам Header,
  // иначе на одном элементе оказывалось две анимации
  const layers = gsap.utils.toArray<HTMLElement>(".layer[data-speed]");

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