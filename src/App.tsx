import './App.css'
import './assets/fonts/fonts.css'
import './variables.css'
import {initParallax} from './js-functions/parallax.ts'
import { useEffect } from 'react';
import logo from '../public/images/logo.png';
import ArticlesSection from './js-functions/gsap.tsx';
import StackingCards from './js-functions/stacking-cards.tsx';

function App() {
  
 useEffect(() => {
    console.log('App mounted');           // для проверки
    const cleanup = initParallax();       // навешиваем обработчик
    return cleanup;                       // снимаем на unmount
  }, []);

  return (
    <>
    <header>
      <img src={logo} className="menu__logo" alt="Логотип" />
          <nav className="menu section-width">
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="#about" className="text-link">О нас</a>
                </li>
                <li className="nav-item">
                  <a href="#products" className="text-link">Товары</a>
                </li>
                <li className="nav-item">
                  <a href="#production" className="text-link">Производство</a>
                </li>
                <li className="nav-item">
                  <a href="#contacts" className="text-link">Контакты</a>
                </li>
              </ul>
          </nav>
    </header>
    <div className="wrapper">
      <div className="content">
        <section className='header'> 
          
        <div className="grid-section">
            <div data-speed=".9" className='layer hero-section__logo-forest'/>
            <div data-speed="1" className="layer hero-section__text-block">      
                    Кьярда
            </div>
        </div>
      </section>
      <main>
        <ArticlesSection/>
        <section className='mission'>
          <div className="mission__block">
            <h2 className="mission__block-title section-title main-title">НАША МИССИЯ</h2>
            <div data-speed="1" className="mission-speech">
              <p className='text'><a className='special-text'>Быть надёжным партнёром</a></p>
              <p className='another_mission__text text'>И<a className='another__special-text special-text'>Внедрять инновации</a></p>
            </div>
          </div>
          <div className="experience__block">
            <h2 className="experience-title section-title main-title">Почему именно мы?</h2>
            <article className='experience-card'>
              <div className="ecology experience-card__background"></div>
              <div className="card-overlay"></div>
              <div className="experience-card__content-block">
                <div className="experience-card__title-block">
                  <h3 className="experience-card__title">Экологическая</h3>
                  <h3 className="another__experience-text experience-card__title">безопасность</h3>                  
                </div>
                <p className="experience-card__paragraph">Мы придерживаемся строгих экологических норм и используем переработанные материалы, чтобы снизить негативное воздействие на окружающую среду.</p>
              </div>
            </article>
            <article className='experience-card'>
              <div className="quality experience-card__background"></div>
              <div className="card-overlay"></div>
              <div className="experience-card__content-block">
                <div className="experience-card__title-block">
                  <h3 className="experience-card__title">Высокое</h3>
                  <h3 className="uniqie__experience-text experience-card__title">качество</h3>
                </div>
                <p className="experience-card__paragraph">Мы используем современные технологии и лучшее оборудование, что гарантирует высокие эксплуатационные характеристики нашей продукции.
                </p>
              </div>
            </article>
            <article className='experience-card'>
              <div className="professional experience-card__background"></div>
              <div className="card-overlay"></div>
              <div className="experience-card__content-block">
                <div className="experience-card__title-block">
                  <h3 className="experience-card__title">Профессионализм</h3>
                </div>
                  <p className="experience-card__paragraph">В нашей команде работают опытные специалисты, готовые предоставить компетентную помощь в выборе и покупке пиломатериалов.
                </p>
              </div>     
            </article>
            <article className='experience-card'>
              <div className="individual experience-card__background"></div>
              <div className="card-overlay"></div>
              <div className="experience-card__content-block">
                <div className="experience-card__title-block">
                  <h3 className="experience-card__title">Индивидуальный</h3>
                  <h3 className="another__experience-text experience-card__title">подход</h3>
                </div>
                <p className="experience-card__paragraph">Мы предлагаем гибкие условия сотрудничества и готовы выполнять заказы любой сложности, учитывая потребности наших клиентов.
                </p>
              </div>    
            </article>
          </div>
        </section>
        <StackingCards/>
      </main>
      </div>
    </div>
      
    </>
  )
}

export default App
