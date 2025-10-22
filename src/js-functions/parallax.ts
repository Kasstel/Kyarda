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
        invalidateOnRefresh: true, // 👈 пересчитывает значения при refresh
      },
    });
  });

  // 👇 Ключевой момент — заставляем GSAP пересчитать все позиции после загрузки и восстановления скролла
  const refreshAfterLoad = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh(true);
      });
    });
  };

  // Срабатывает при загрузке и восстановлении скролла
  window.addEventListener("load", refreshAfterLoad);
  window.addEventListener("DOMContentLoaded", refreshAfterLoad);

  // 👇 дополнительный костыль для браузеров, которые восстанавливают скролл позже
  setTimeout(() => ScrollTrigger.refresh(true), 500);

  return () => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
    window.removeEventListener("load", refreshAfterLoad);
    window.removeEventListener("DOMContentLoaded", refreshAfterLoad);
  };
}
