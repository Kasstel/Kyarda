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
            <li className="footer__contacts-item">
              <img className="footer__contacts-item__media" src="/images/phone.png"></img>
              <a  className="footer__contacts-item__content" href="tel:+79990087678">+7 (999) 008-76-78</a>
            </li>
            <li className="footer__contacts-item">
              <img className="footer__contacts-item__media" src="/images/mail.png"></img>
              <a  className="footer__contacts-item__content" href="mailto:Kyardaspb@yandex.ru">Kyardaspb@yandex.ru</a>
            </li>
            <li className="footer__contacts-item">
              <img className="footer__contacts-item__media" src="/images/location.png"></img>
              <a  className="footer__contacts-item__content" href="https://yandex.ru/maps/10174/saint-petersburg-and-leningrad-oblast/house/derevnya_novoye_devyatkino_9a/Z0kYcg5iT0YOQFhqfXx2cX1mYA==/?ll=30.492638%2C60.070155&z=16">Новое Девяткино, 9А</a>
            </li>
          </ul>
          <p  className="footer__contacts-item footer__contacts-item__content">График работы: ежедневно с 9.00 - 20.00</p>
          <div
            style={{
              height: "100px",
              width: "400px",
              position: "relative",
              overflow: "hidden",
            }}
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
        <div className="footer__help">
          <img src='/images/manager.webp' className="footer__help-photo"></img>
          <p className="footer__help-paragraph">Олеся</p>
          <p className="footer__help-paragraph">Специалист отдела продаж</p>
        </div>
      </section>
    </>
  );
}
