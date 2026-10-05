import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let lenis: Lenis | null = null;

// Текущий экземпляр плавного скролла (null, если он выключен)
export function getLenis() {
  return lenis;
}

export function initSmoothScroll() {
  // Уважаем системную настройку «уменьшить движение» — оставляем обычный скролл
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }

  // Колесо мыши сглаживается, на тач-экранах остаётся родной скролл
  const instance = new Lenis({ lerp: 0.1 });
  lenis = instance;

  // Lenis и ScrollTrigger работают от одного тикера, чтобы scrub-анимации не отставали
  instance.on("scroll", ScrollTrigger.update);
  const raf = (time: number) => instance.raf(time * 1000);
  gsap.ticker.add(raf);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(raf);
    instance.destroy();
    if (lenis === instance) lenis = null;
  };
}
