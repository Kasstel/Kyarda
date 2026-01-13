import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./stacking-card.module.scss";
import '../../variables.css';
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
    

    const scrollSection = document.querySelectorAll(`.${styles["scroll-section"]}`);

    scrollSection.forEach((section) => {
      const wrapper = section.querySelector(`.${styles["wrapper-cards"]}`)
      const items = wrapper?.querySelectorAll(`.${styles["card"]}`)
      
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
    <>
    <h2 id="production" className="mission__block-title section-title main-title mission">Производство</h2>
    <section className={`${styles["scroll-section"]} ${styles["vertical-section"]}`}>
      <div className={styles["wrapper-cards"]}>
        <div role='list' className={styles["card-list"]}>
          <div role='list-item' className={styles["card"]}>
            <div className={styles["card__content"]}>
              <h2 className={styles["card__number"]}>1</h2>
              <h2 className={styles["card__title"]}>ЛЕСОЗАГОТОВКА</h2>
              <div className={styles["card__text"]}>
                <p className={styles["card__text"]}>
                <a className={styles["additional"]}>Э</a>то многоступенчатый процесс, направленный на рациональное использование лесных ресурсов. 
              </p>
              <p className={styles["card__text"]}>Он включает в себя:
                <br />
                <br />1. Оценку состояния лесных массивов.
                <br />2. Планирование маршрутов.
                <br />3. Безопасную вырубку деревьев.
                <br />4. Подготовку древесины к транспортировке.
                <br />5. Вывоз.
                </p>
              </div>
            </div>
            <img src='/images/vyrubka.png'  className={styles["card__media"]}></img>
          </div>
          <div role='list-item' className={styles["card"]}>
            <div className={styles["card__content"]}>
              <h2 className={styles["card__number"]}>2</h2>
              <h2 className={styles["card__title"]}>РАСПИЛОВКА древeсины</h2>
              <div className={styles["card__text"]}>
                <p className={styles["card__text"]}>
                <a className={styles["additional"]}>У</a>гловая пилорама ВудВЕР УПК-1 предназначена для распиловки круглого леса на обрезной и необрезной пиломатериал. 
              </p>
              <p className={styles["card__text"]}>Качество геометрии и поверхности при пилении позволяет отправлять готовую продукцию на экспорт, используя любую нашу пилораму</p>
                 <p className={styles["card__text"]}>Визуальный интерфейс программы позволяет формировать автоматические схемы раскроя, извлекая максимальное количество деловой продукции из любого доступного сырья 
                </p>
              </div>
            </div>
            <img src='/images/raspilovka.png'  className={styles["card__media"]}></img>
          </div>
          <div role='list-item' className={styles["card"]}>
            <div className={styles["card__content"]}>
              <h2 className={styles["card__number"]}>3</h2>
              <h2 className={styles["card__title"]}>камерная сушка</h2>
              <div className={styles["card__text"]}>
                <p className={styles["card__text"]}>
                <a className={styles["additional"]}>Э</a>то высокотехнологичный процесс, направленный на снижение влажности заготовок до необходимого уровня.</p>
              <p className={styles["card__text"]}>Этот метод предотвращает деформацию и коробление древесины, а также риск развития грибковых инфекций.
                </p>
                <p className={styles["card__text"]}>Строгий контроль сушки позволяет достичь оптимальной влажности, в результате чего древесина становится более прочной и долговечной.
                </p>
              </div>
            </div>
            <img src='/images/sycshka.png'  className={styles["card__media"]}></img>
          </div>
          <div role='list-item' className={styles["card"]}>
            <div className={styles["card__content"]}>
              <h2 className={styles["card__number"]}>4</h2>
              <h2 className={styles["card__title"]}>СТРОГАНИЕ</h2>
              <div className={styles["card__text"]}>
                <p className={styles["card__text"]}>
                <a className={styles["additional"]}>С</a>танок Beaver предназначен для четырехсторонней плоскостной и профильной калибровки деревянных заготовок, обеспечивая точную геометрическую форму и идеально-гладкую поверхность продукции.
              </p>
              <p className={styles["card__text"]}>Используется в производстве: строганных досок, клееного бруса, щитов, погонажных изделий и других столярно-строительных товаров.
                </p>
              </div>
            </div>
            <img src='/images/stroganie.png'  className={styles["card__media"]}></img>
          </div>
          <div role='list-item' className={styles["card"]}>
            <div className={styles["card__content"]}>
              <h2 className={styles["card__number"]}>5</h2>
              <h2 className={styles["card__title"]}>ХРАНЕНИЕ</h2>
              <div className={styles["card__text"]}>
                <p className={styles["card__text"]}>
                <a className={styles["additional"]}>Э</a>то ключевой процесс, влияющий на их качество и долговечность пиломатериалов.
              </p>
              <p className={styles["card__text"]}>Он включает в себя:
                <br />
                <br />1. Хранение в сухих и хорошо проветриваемых помещениях, избегая контакта древесины с влагой;
                <br />2. Упаковку и маркировку;
                <br />3. Укладку на поддоны или в штабели, обеспечивая расстояние между слоями для циркуляции воздуха;
                <br />4. Обработка антисептиком;
                </p>
              </div>
            </div>
            <img src='/images/xranenie.png'  className={styles["card__media"]}></img>
          </div>
          <div role='list-item' className={styles["card"]}>
            <div className={styles["card__content"]}>
              <h2 className={styles["card__number"]}>6</h2>
              <h2 className={styles["card__title"]}>ТРАНСПОРТИРОВКА</h2>
              <div className={styles["card__text"]}>
                <p className={styles["card__text"]}>
                <a className={styles["additional"]}>П</a>иломатериалы с нашего производства доставляются на склады в Москве и Санкт-Петербурге собственными фурами.
              </p>
              <p className={styles["card__text"]}> Этот подход обеспечивает надежный контроль качества перевозки и строгое соблюдение сроков доставки. 
                </p>
              </div>
            </div>
            <img src='/images/transport.png'  className={styles["card__media"]}></img>
          </div>
          <div role='list-item' className={styles["card"]}>
            <div className={styles["card__content"]}>
              <h2 className={styles["card__number"]}>7</h2>
              <h2 className={styles["card__title"]}>комплектовка ЗАКАЗА</h2>
              <div className={styles["card__text"]}>
                <p className={styles["card__text"]}>
                <a className={styles["additional"]}>Н</a>а этапе сборки наши специалисты формируют заказы в соответствии с накладными и индивидуальными требованиями клиентов.</p>
              <p className={styles["card__text"]}>Каждый заказ маркируется и тщательно упаковывается в защитную пленку, что обеспечивает надежную защиту от осадков как во время транспортировки, так и при доставке к клиенту до момента использования пиломатериалов в работу.
                </p>
              </div>
            </div>
            <img src='/images/komplect.png'  className={styles["card__media"]}></img>
          </div>
          <div role='list-item' className={styles["card"]}>
            <div className={styles["card__content"]}>
              <h2 className={styles["card__number"]}>8</h2>
              <h2 className={styles["card__title"]}>ДОСТАВКА</h2>
              <div className={styles["card__text"]}>
                <p className={styles["card__text"]}>
                <a className={styles["additional"]}>Ф</a>инальный этап - мы предлагаем услуги доставки по всему Санкт-Петербургу и Ленинградской области, используя как бортовые автомобили, так и машины с манипуляторами для удобства клиентов. </p>
              <p className={styles["card__text"]}>Наша команда гарантирует безопасную и оперативную транспортировку, обеспечивая комфорт и надежность на каждом этапе доставки.
                </p>
              </div>
            </div>
            <img src='/images/dostavka.png'  className={styles["card__media"]}></img>
          </div>
        </div>
      </div>
    </section>
    </>
   
  );
}