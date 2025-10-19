import logo from '/images/logo.png';
import '../../App.css'

export default function Menu() {
  return (
    <>
      <img src={logo} className="menu__logo" alt="Логотип" />
      <nav className="menu section-width">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#about" className="text-link">
              О нас
            </a>
          </li>
          <li className="nav-item">
            <a href="#products" className="text-link">
              Товары
            </a>
          </li>
          <li className="nav-item">
            <a href="#production" className="text-link">
              Производство
            </a>
          </li>
          <li className="nav-item">
            <a href="#contacts" className="text-link">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
