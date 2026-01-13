import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "/images/logo.png";
gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  useEffect(() => {
    // ждём 1 тик браузера + 1 тик после установки GSAP/ScrollSmoother
    requestAnimationFrame(() => {
      setTimeout(() => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;

        console.log("REAL scrollY at load:", scrollY);

        const isAtHeader = scrollY < viewportHeight / 2;

        if (isAtHeader) {
          // --- Анимация появления леса ---
          gsap.fromTo(
            ".hero-section__logo-forest",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
          );

          // --- Параллакс леса ---
          gsap.fromTo(
            ".hero-section__logo-forest",
            { opacity: 1, y: 0 },
            {
              y: 1000,
              ease: "none",
              scrollTrigger: {
                trigger: ".header",
                start: "bottom top",
                end: "top bottom",
                scrub: true,
                invalidateOnRefresh: true,
              },
            }
          );

          // --- Параллакс текста ---
          gsap.to(".hero-section__text-block", {
            yPercent: -30,
            ease: "none",
            scrollTrigger: {
              trigger: ".header",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });

        } else {
          // --- Статичное состояние ---
          gsap.killTweensOf(".hero-section__logo-forest");
          gsap.killTweensOf(".hero-section__text-block");

          ScrollTrigger.getAll().forEach((st) => st.kill());

          gsap.set(".hero-section__logo-forest", { opacity: 1, y: 0 });
          gsap.set(".hero-section__text-block", { opacity: 1, y: 0 });
        }

      }, 50); // ждём GSAP и ScrollSmoother
    });
  }, []);

  return (
    <section className="header">
      <a href="#"><img src={logo}  className="menu__logo__center" alt="Логотип" /></a>
      <div className="layer">
        <p className="hero-section__text-block">Кьярда</p>
      </div>
      <div className="grid-section">
        <div className="layer hero-section__logo-forest" />
      </div>
    </section>
  );
}
