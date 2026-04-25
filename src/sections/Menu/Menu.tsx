import { useEffect } from "react";
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

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
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
        <nav className="menu section-width">
          <ul className="nav-list">
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
