import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/all";
import { useEffect } from "react";
import "../../App.css";
import "../../assets/fonts/fonts.css";
import BlurText from "../../UI-features/BlurText/BlurText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function ArticlesSection() {
  useEffect(() => {
    if (ScrollTrigger.isTouch !== 1) {
      ScrollSmoother.create({
        wrapper: ".wrapper",
        content: ".content",
        smooth: 1.5,
        effects: true,
      });

      const articles = gsap.utils.toArray<HTMLElement>(".about__info-card");

      articles.forEach((article) => {
        gsap.fromTo(
          article,
          { x: -500, y: 10, opacity: 0 },
          {
            opacity: 1,
            x: 0,
            stagger: 1,
            scrollTrigger: {
              trigger: ".about",
              start: "-=400",
              end: "-=100",
              scrub: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".avatarka",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".about",
            start: "-=400",
            end: "-=100",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".about__title-block",
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".about",
            start: "-=400",
            end: "-=100",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" className="about section">
      <div data-speed="1" className="about__title-block section-title">
        <h2 className="main-title">завод пиломатериалов</h2>
        <h2 className="main-title">"Кьярда"</h2>
      </div>
      <div data-speed=".9" className="list-view" id="list-view">
        <ul className="about__info-block ">
          <li className="first about__info-card">
            <h2 className="main-title">
              <BlurText
                text="1997"
                delay={150}
                animateBy="letters"
                direction="bottom"
                className="title"
              />
            </h2>
            <BlurText
              text="Год основания"
              delay={150}
              animateBy="words"
              direction="bottom"
              className="text-block text"
            />
          </li>
          <li className="about__info-card">
            <h2 className="main-title">
              <BlurText
                text="20000"
                delay={150}
                animateBy="letters"
                direction="bottom"
                className="title"
              />
            </h2>
            <p className="text-block text">
              <BlurText
                text="Завершенных заказов"
                delay={150}
                animateBy="words"
                direction="bottom"
                className="title"
              />
            </p>
          </li>
          <li className="about__info-card">
            <h2 className="main-title">
              <BlurText
                text="97 %"
                delay={150}
                animateBy="letters"
                direction="bottom"
                className="title"
              />
            </h2>
            <p className="text-block text">
              <BlurText
                text="Довольных клиентов"
                delay={150}
                animateBy="words"
                direction="bottom"
                className="title"
              />
            </p>
          </li>
          <li className="about__info-card">
            <h2 className="volume main-title">
              <BlurText
                text="15 000 м3"
                delay={90}
                animateBy="letters"
                direction="bottom"
                className="title"
              />
            </h2>
            <p className="text-block text">
              <BlurText
                text="Обрабатывается ежегодно"
                delay={150}
                animateBy="words"
                direction="bottom"
                className="title"
              />
            </p>
          </li>
        </ul>
      </div>
      <div data-speed="1" className="headliner-block">
        <div className="avatarka"></div>
        <div className="special-block">
          <p className="special-title">
            <BlurText
              text="Собственник:"
              delay={150}
              animateBy="words"
              direction="top"
              className="title"
            />
          </p>
          <p className="special-title">
            <BlurText
              text="Константинов Николай Михайлович"
              delay={150}
              animateBy="words"
              direction="top"
              className="title"
            />
          </p>
        </div>
      </div>
    </section>
  );
}
