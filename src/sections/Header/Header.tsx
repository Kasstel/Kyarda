import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "/images/logo.png";
gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  useEffect(() => {
    // Храним свои триггеры чтобы убивать только их
    const myTriggers: ScrollTrigger[] = [];

    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const isAtHeader = scrollY < viewportHeight / 2;

    if (isAtHeader) {
      gsap.fromTo(
        ".hero-section__logo-forest",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
      );

      const st1 = ScrollTrigger.create({
        trigger: ".header",
        start: "bottom top",
        end: "top bottom",
        scrub: true,
        invalidateOnRefresh: true,
        animation: gsap.fromTo(
          ".hero-section__logo-forest",
          { y: 0 },
          { y: 1000, ease: "none" }
        ),
      });
      myTriggers.push(st1);

      const st2 = ScrollTrigger.create({
        trigger: ".header",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        animation: gsap.to(".hero-section__text-block", {
          yPercent: -30,
          ease: "none",
        }),
      });
      myTriggers.push(st2);
    } else {
      // Просто ставим статичное состояние, НЕ убиваем чужие триггеры
      gsap.set(".hero-section__logo-forest", { opacity: 1, y: 0 });
      gsap.set(".hero-section__text-block", { opacity: 1, y: 0 });
    }

    return () => {
      // Убиваем только СВОИ триггеры
      myTriggers.forEach((st) => st.kill());
      gsap.killTweensOf(".hero-section__logo-forest");
      gsap.killTweensOf(".hero-section__text-block");
    };
  }, []);

  return (
    <section className="header">
      <a href="#">
        <img src={logo} className="menu__logo__center" alt="Логотип" />
      </a>
      <div className="layer">
        <p className="hero-section__text-block">Кьярда</p>
      </div>
      <div className="grid-section">
        <div className="layer hero-section__logo-forest" />
      </div>
    </section>
  );
}