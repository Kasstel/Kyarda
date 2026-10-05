import { useEffect, useRef, useState } from "react";
import logo from "/images/logo.webp";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../App.css";
import { CartPreview } from "../../widgets/Cart/CartPreview";
import { useCart } from "../../widgets/Cart/Context/Context";
import { getLenis } from "../../js-functions/smoothScroll";

gsap.registerPlugin(ScrollTrigger);

// Доля высоты экрана, которую нужно проскроллить, чтобы под меню вместо светлого тумана оказался тёмный лес
const HERO_THEME_RANGE = 0.62;

export default function Menu() {
  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother);
  }, []);


  const {items} = useCart();

  // Мобильное меню (бургер)
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Тема меню: над светлой шапкой — тёмный текст, дальше — обычный светлый.
  // Переключаемся, когда верхушки леса доезжают до меню, а не в конце шапки:
  // нижняя половина шапки тёмная, и тёмный текст на ней пропал бы
  const [onHero, setOnHero] = useState(true);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: ".header",
      start: "top top",
      end: () => `+=${window.innerHeight * HERO_THEME_RANGE}`,
      // isActive в самом верху страницы ещё false, поэтому смотрим на прогресс
      onUpdate: (self) => setOnHero(self.progress < 1),
      onRefresh: (self) => setOnHero(self.progress < 1),
    });
    return () => trigger.kill();
  }, []);

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsOpen(false);
    const targetId = event.currentTarget.getAttribute("href")?.replace("#", "");
    const targetSection = document.getElementById(targetId || "");

    const lenis = getLenis();
    const smoother = ScrollSmoother.get();
    if (lenis && targetSection) {
      // плавный скролл через Lenis; на мобильных учитываем высоту верхней панели
      const offset = window.matchMedia("(width<=768px)").matches ? -64 : 0;
      lenis.scrollTo(targetSection, { offset });
    } else if (smoother && targetSection) {
      // плавный скролл через smoother
      smoother.scrollTo(targetSection, true);
    } else if (targetSection) {
      // fallback если smoother не работает
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <a href="#"><img src={logo}  className={`menu__logo ${onHero ? "menu__logo--on-hero" : ""}`} alt="Логотип" /></a>
      <div className="menu-layer">
        <nav ref={menuRef} className={`menu section-width ${isOpen ? "menu--open" : ""} ${onHero ? "menu--on-hero" : ""}`}>
          <button
            className="menu__burger"
            type="button"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            aria-controls="nav-list"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="menu__burger-line" />
            <span className="menu__burger-line" />
            <span className="menu__burger-line" />
          </button>
          <ul className="nav-list" id="nav-list">
            <li className="nav-item">
              <a href="#about" className="text-link" onClick={handleScroll}>
                О нас
              </a>
            </li>
            <li className="nav-item">
              <a href="#products" className="text-link" onClick={handleScroll}>
                Товары
              </a>
            </li>
            <li className="nav-item">
              <a href="#production" className="text-link" onClick={handleScroll}>
                Производство
              </a>
            </li>
            <li className="nav-item">
              <a href="#contacts" className="text-link" onClick={handleScroll}>
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {(items.length>0) &&<CartPreview/>}
    </>
  );
}
