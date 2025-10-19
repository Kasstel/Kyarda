import './App.css'
import './assets/fonts/fonts.css'
import './variables.css'
import {initParallax} from './js-functions/parallax.ts'
import { useEffect } from 'react';

import ArticlesSection from './sections/About/About.tsx';
import StackingCards from './sections/Production/stacking-cards.tsx';
import Header from './sections/Header/Header.tsx';
import Experience from './sections/Experience/Experience.tsx';
import Menu from './sections/Menu/Menu.tsx';
import Mission from './sections/Mission/Mission.tsx';
  

function App() {
   useEffect(() => {
    const cleanup = initParallax();       // навешиваем обработчик
    return cleanup;                       // снимаем на unmount
  }, []);

  return (
    <>
    <header>
      <Menu/>
    </header>
    
    <div className="wrapper">
      <div className="content">
      <Header/>  
      <main>
        <ArticlesSection/>
        <Mission/>
        <Experience/>
        <StackingCards/>
      </main>
      </div>
    </div>
      
    </>
  )
}

export default App
