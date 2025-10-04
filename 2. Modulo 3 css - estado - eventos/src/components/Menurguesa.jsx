import { useState } from "react";
import "../styles/app.css";

const Menurguesa = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="app">
        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <nav className={`menu ${isOpen ? "menu--open" : ""}`}>
        <button className="menu-close" onClick={toggleMenu}>
          ✖
        </button>
        <ul>
          <li href="#">Inicio</li>
          <li href="#">Servicios</li>
          <li href="#">Contacto</li>
        </ul>
      </nav>
    </>
  );
};

export default Menurguesa;
