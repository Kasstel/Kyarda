import { useEffect, useRef, useState } from "react";
import logo from "/images/logo.webp";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import "../../App.css";
import { CartPreview } from "../../widgets/Cart/CartPreview";
import { useCart } from "../../widgets/Cart/Context/Context";

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

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsOpen(false);
    const targetId = event.currentTarget.getAttribute("href")?.replace("#", "");
    const targetSection = document.getElementById(targetId || "");

    const smoother = ScrollSmoother.get();
    if (smoother && targetSection) {
      // плавный скролл через smoother
      smoother.scrollTo(targetSection, true);
    } else if (targetSection) {
      // fallback если smoother не работает
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <a href="#"><img src={logo}  className="menu__logo" alt="Логотип" /></a>
      <div className="menu-layer">
        <nav ref={menuRef} className={`menu section-width ${isOpen ? "menu--open" : ""}`}>
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
