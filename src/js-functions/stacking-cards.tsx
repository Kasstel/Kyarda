import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./stacking-card.css";
import '../variables.css';

gsap.registerPlugin(ScrollTrigger);

export default function StackingCards() {
  useEffect(() => {
    interface initScrollProps{
      section: HTMLElement;
      items: HTMLElement[];
    }

    function initScroll({ section, items }: initScrollProps) {
      items.forEach((element, index) => {
        if (index !== 0) {
          gsap.set(element, { yPercent: 200 });
        }
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top",
          end: () => `+=${items.length * 70}%`,
          scrub: 1,
          invalidateOnRefresh: true,
          markers: true,
        },
        defaults: { ease: "none" },
      });

      items.forEach((item, index) => {
        timeline.to(item, {
          scale: 0.9, // постепенно уменьшаем
          yPercent: index * 10, // сдвигаем вниз, формируя стопку
          borderRadius: "10px",
        });

        if (items[index + 1]) {
          timeline.to(
            items[index + 1],
            { yPercent: 0 },
            "<"
          );
        }
      });
    }


    const scrollSection = document.querySelectorAll('.scroll-section');

    scrollSection.forEach((section) => {
      const wrapper = section.querySelector(".wrapper-cards")
      const items = wrapper?.querySelectorAll(".card")
      
      initScroll({
  section: section as HTMLElement,
  items: Array.from(items ?? []) as HTMLElement[]
});
    })
    return () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};
  }, []);

  return (
    <section className="scroll-section vertical-section">
      <div className="wrapper-cards">
        <div role='list' className="card-list">
          <div role='list-item' className="card">
            <div className="card__content">
              <h2 className="card__number">1</h2>
              <h2 className="card__title">ЛЕСОЗАГОТОВКА</h2>
              <p className="card__text">
                Лесозаготовка – это многоступенчатый процесс, направленный на рациональное использование лесных ресурсов. 
                <br />Он включает в себя:
                <br />1. Оценку состояния лесных массивов.
                <br />2. Планирование маршрутов.
                <br />3. Безопасную вырубку деревьев.
                <br />4. Подготовку древесины к транспортировке.
                <br />5. Вывоз.
              </p>
            </div>
            <img src='../../public/images/quality.jpg' className="card__media"></img>
          </div>
          <div role='list-item' className="card">
            <div className="card__content">
              <h2 className="card__number">2</h2>
              <h2 className="card__title">Переработка</h2>
            </div>
            <img src='../../public/images/quality.jpg' className="card__media"></img>
          </div>
          <div role='list-item' className="card">
            <div className="card__content">
              <h2 className="card__number">3</h2>
              <h2 className="card__title">Переработка</h2>
            </div>
            <img src='../../public/images/quality.jpg' className="card__media"></img>
          </div>
          <div role='list-item' className="card">
            <div className="card__content">
              <h2 className="card__number">4</h2>
              <h2 className="card__title">Переработка</h2>
            </div>
            <img src='../../public/images/quality.jpg' className="card__media"></img>
          </div>
          <div role='list-item' className="card">
            <div className="card__content">
              <h2 className="card__number">5</h2>
              <h2 className="card__title">Переработка</h2>
            </div>
            <img src='../../public/images/quality.jpg' className="card__media"></img>
          </div>
          <div role='list-item' className="card">
            <div className="card__content">
              <h2 className="card__number">6</h2>
              <h2 className="card__title">Переработка</h2>
            </div>
            <img src='../../public/images/quality.jpg' className="card__media"></img>
          </div>
          <div role='list-item' className="card">
            <div className="card__content">
              <h2 className="card__number">7</h2>
              <h2 className="card__title">Переработка</h2>
            </div>
            <img src='../../public/images/quality.jpg' className="card__media"></img>
          </div>
          <div role='list-item' className="card">
            <div className="card__content">
              <h2 className="card__number">8</h2>
              <h2 className="card__title">Переработка</h2>
            </div>
            <img src='../../public/images/quality.jpg' className="card__media"></img>
          </div>
        </div>
      </div>
    </section>
  );
}