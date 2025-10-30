import BlurText from "../../UI-features/BlurText/BlurText";
import LogoLoop from "../../UI-features/LogoLoop/LogoLoop";
import "./Footer.css";

export default function Footer() {
  const imageLogos = [
    {
      src: "/images/vk-logo.png",
      alt: "Ссылка на Вк",
      href: "https://company1.com",
    },
    {
      src: "/images/avito-logo.png",
      alt: "Ссылка на Авито",
      href: "https://company2.com",
    },
    {
      src: "/images/2gis-logo.png",
      alt: "Ссылка на 2 гис",
      href: "https://company3.com",
    },
    {
      src: "/images/yandex-maps-logo.png",
      alt: "Ссылка на Яндекс-карты",
      href: "https://company3.com",
    },
  ];
  return (
    <>
      <section id="contacts" className="footer">
        <BlurText
          text="Мы ответим на все ваши вопросы!"
          delay={150}
          animateBy="words"
          direction="top"
          className="footer_title"
        />
        <div className="footer__paragraph-block">
          <p>
            Свяжитесь с нами, чтобы узнать больше о нашей продукции и условиях
            сотрудничества.
          </p>
          <p>
            Мы будем рады помочь вам в осуществлении ваших строительных идей!
          </p>
        </div>
        <div className="footer__contacts">
          <ul className="footer__contacts-list">
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p>График работы: ежедневно
          с 9.00 - 20.00</p>
          <div
          style={{ height: "200px", width: "400px", position: "relative", overflow: "hidden" }}
        >
          <LogoLoop
            logos={imageLogos}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            ariaLabel="Technology partners"
          />
        </div>
        </div>
        
      </section>
    </>
  );
}
