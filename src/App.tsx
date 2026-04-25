import './App.css'
import './assets/fonts/fonts.css'
import './variables.css'
import { initParallax } from './js-functions/parallax.ts'
import { useEffect, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'lenis/dist/lenis.css';

import ArticlesSection from './sections/About/About.tsx';
import StackingCards from './sections/Production/stacking-cards.tsx';
import Header from './sections/Header/Header.tsx';
import Experience from './sections/Experience/Experience.tsx';
import Menu from './sections/Menu/Menu.tsx';
import Mission from './sections/Mission/Mission.tsx';
import Products from './sections/Products/Products.tsx';
import Geo from './sections/Geo/Geo.tsx';
import Footer from './sections/Footer/Footer.tsx';
import { ModalProvider } from './widgets/ModalContext/ModalContext.tsx';
import { Modal } from './widgets/Modal/Modal.tsx';
import { CartProvider } from './widgets/Cart/Context/Context.tsx';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {

    // Инициализируем параллакс после того как все дети смонтировались
    const cleanup = initParallax();

    // Единый refresh после полной отрисовки
    // requestAnimationFrame гарантирует, что браузер завершил layout
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
      setReady(true);
    });

    // На случай если изображения загружаются позже
    const onLoad = () => {
      ScrollTrigger.refresh(true);
    };
    window.addEventListener("load", onLoad);

    return () => {
      cleanup();
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <>
      <CartProvider>
        <ModalProvider>
          <header>
            <Menu />
          </header>
          <div
            className="wrapper"
            style={{
              opacity: ready ? 1 : 0,
              transition: "opacity .3s ease",
            }}
          >
            <div className="content">
              <Header />
              <main>
                <ArticlesSection />
                <Mission />
                <Experience />
                <StackingCards />
                <Products />
                <Geo />
                <Footer />
              </main>
            </div>
          </div>
          <Modal />
        </ModalProvider>
      </CartProvider>
    </>
  );
}

export default App;