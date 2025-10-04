import "react";
import Logo from "./Logo";
import Link from "./Link";
import "../styles/header-container.css";
import HeaderImg from "./HeaderImg";

const HeaderContainer = () => {
  return (
    <header className="page__header">
      <HeaderImg />
      <div className="header__nav-fixed">

        <button className="nav__toggle" aria-label="Menú">
          <i className="fas fa-bars"></i>
        </button>

        <nav className="header__nav">
          <ul className="nav__menu">
            <li>
              <Link text="Productos" />
            </li>
            <li>
              <Link text="Colecciones" />
            </li>
            <li>
              <Link text="Tienda" />
            </li>
            <li>
              <Link text="Inicio" />
            </li>
          </ul>
        </nav>
      </div>
     </header>
  );
};

export default HeaderContainer;
