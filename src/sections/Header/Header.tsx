import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "/images/logo.png";
import { getLenis } from "../../js-functions/smoothScroll";
gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  useEffect(() => {
    // Храним свои триггеры чтобы убивать только их
    const myTriggers: ScrollTrigger[] = [];

    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const isAtHeader = scrollY < viewportHeight / 2;

    if (isAtHeader) {
      // Появление леса: opacity + yPercent, чтобы не спорить с параллаксом, который двигает y
      gsap.fromTo(
        ".hero-section__logo-forest",
        { opacity: 0, yPercent: 5 },
        { opacity: 1, yPercent: 0, duration: 1.5, ease: "power2.out" }
      );
    } else {
      gsap.set(".hero-section__logo-forest", { opacity: 1, yPercent: 0 });
    }

    // Параллакс: пока шапка уезжает вверх, надпись отстаёт от страницы и «тонет» в лесу,
    // а лес слегка поднимается ей навстречу. На телефонах амплитуда меньше.
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reduceMotion) {
      const textShift = () =>
        window.innerHeight * (window.matchMedia("(width<=600px)").matches ? 0.28 : 0.38);
      // Лес лежит на 180px ниже верха шапки — поднимаем не больше этого запаса
      const forestShift = () => -Math.min(window.innerHeight * 0.12, 150);

      const parallax = gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".header",
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        })
        // двигаем обёртку, а не саму надпись: у надписи свой transform (вытягивание по вертикали)
        .to(".hero-section__title", { y: textShift }, 0)
        .to(".hero-section__logo-forest", { y: forestShift }, 0)
        // подсказка «листайте» гаснет в самом начале скролла
        .to(".hero-section__scroll-hint", { opacity: 0, duration: 0.1 }, 0);

      if (parallax.scrollTrigger) myTriggers.push(parallax.scrollTrigger);
    }

    return () => {
      // Убиваем только СВОИ триггеры
      myTriggers.forEach((st) => st.kill());
      gsap.killTweensOf(".hero-section__logo-forest");
      gsap.killTweensOf(".hero-section__title");
      gsap.killTweensOf(".hero-section__scroll-hint");
    };
  }, []);

  const scrollToAbout = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.getElementById("about");
    if (!target) return;

    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(target);
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="header">
      <a href="#">
        <img src={logo} className="menu__logo__center" alt="Логотип" />
      </a>
      <div className="layer">
        <div className="hero-section__title">
          <p className="hero-section__tagline">Завод пиломатериалов · с 1997 года</p>
          <p className="hero-section__text-block">Кьярда</p>
        </div>
      </div>
      <div className="grid-section">
        <div className="layer hero-section__logo-forest" />
      </div>
      <a href="#about" className="hero-section__scroll-hint" onClick={scrollToAbout}>
        <span>Листайте вниз</span>
        <span className="hero-section__scroll-arrow" aria-hidden="true" />
      </a>
    </section>
  );
}