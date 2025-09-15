import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/all";
import { useEffect } from "react";
import "../App.css"
import "../assets/fonts/fonts.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function ArticlesSection() {
  useEffect(() => {
    if (ScrollTrigger.isTouch !== 1){
      ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true,
        })

      const articles = gsap.utils.toArray<HTMLElement>('.about__info-card');

       articles.forEach((article) => {gsap.fromTo( article, {x: -500, y: 10, opacity: 0}, {
      opacity: 1,
      x: 0,
      stagger: 1 ,
      scrollTrigger: {
        trigger: '.about',
        start: "-=400", 
        end: "-=100",
        scrub: true,
       
      },
    })})

      gsap.fromTo('.avatarka', {opacity: 0}, {
        opacity: 1,
        scrollTrigger: {
            trigger: '.about',
            start: '-=400',
            end: '-=100',
            scrub: true
        }
    } )

      gsap.fromTo('.about__title-block', {y: -100, opacity: 0}, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.about',
            start: '-=400',
            end: '-=100',
            scrub: true
        }
    } )


    }
    
  }, []);

  return (
    <section className='about section' >
          <div data-speed="1" className="about__title-block section-title">
              <h2 className="main-title">завод пиломатериалов</h2>
              <h2 className="main-title">"Кьярда"</h2>
          </div>
          <div data-speed=".9" className="list-view" id="list-view">
            <ul className="about__info-block ">
              <li className="first about__info-card">
                <h2 className="main-title">1997</h2>
                <p className="text-block text">Год основания</p>
              </li>
              <li className="about__info-card">
                <h2 className="main-title">20 000</h2>
                <p className="text-block text">Завершенных заказов</p>
              </li>
              <li className="about__info-card">
                <h2 className="main-title">97 %</h2>
                <p className="text-block text">Довольных клиентов</p>
              </li>
              <li className="about__info-card">
                <h2 className="volume main-title">15 000 м3</h2>
                <p className="text-block text">Обрабатывается ежегодно</p>
              </li>
          </ul>
          </div>
          <div data-speed="1" className="headliner-block">
            <div className="avatarka">
            </div>
            <div className="special-block">
              <p className="special-title">Собственник:</p>
              <p className="special-title">Константинов Николай Михайлович</p>
            </div>
          </div>   
    </section>
    
  )
}