import './App.css'
import './assets/fonts/fonts.css'
import './variables.css'
import {initParallax} from './js-functions/parallax.ts'
import { useEffect, useState } from 'react';

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
  

function App() {
  const [ready, setReady] = useState(false);
    useEffect(() => {
    const cleanup = initParallax(() => {
      setReady(true); // GSAP инициализировался
    });

    return cleanup;
  }, []);

  return (
    <>
    <ModalProvider>
      <header>
      <Menu/>
    </header>
    <div className="wrapper"  style={{
    opacity: ready ? 1 : 0,
    transition: "opacity .3s ease"
  }}>
      <div className="content">
      <Header/>  
      <main>
        <ArticlesSection />
        <Mission/>
        <Experience/>
        <StackingCards/>
        <Products/>
        <Geo/>
        <Footer/>
      </main>
      </div>
    </div>
      <Modal /> 
    </ModalProvider>
    </>
  )
}

export default App
