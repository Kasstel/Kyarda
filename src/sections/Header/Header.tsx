import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  useEffect(() => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Если страница загружена на хедере
    if (scrollY < viewportHeight / 2) {
      // 🔹 Плавное появление леса
      gsap.fromTo(
        ".hero-section__logo-forest",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
      );

      gsap.fromTo(
        ".hero-section__logo-forest",
        { opacity: 1, y: 0, x: 0 },
        {
          opacity: 1,
          x: 0,
          y: 1000,
          ease: "none",
          scrollTrigger: {
            trigger: ".header",
            start:"bottom top" , // когда секция появляется внизу экрана
            end: "top bottom",   // когда уходит вверх
            scrub: true,         // плавная связь с прокруткой
            invalidateOnRefresh: true, // пересчёт при ресайзе / обновлении
          },
        }
      );

      // Можно добавить лёгкий параллакс для текста
      gsap.to(".hero-section__text-block", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".header",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })}
      else {
      // Иначе — статичное состояние (никаких эффектов)
      gsap.set(".hero-section__logo-forest", { opacity: 1, y: -100 });
      gsap.set(".hero-section__text-block", { opacity: 1, y: -100 });
    }
 
  }, []);

  return (
    <section className="header">
      <div className="layer">
        <p className="hero-section__text-block">Кьярда</p>
      </div>
      <div className="grid-section">
        <div className="layer hero-section__logo-forest" />
      </div>
    </section>
  );
}
