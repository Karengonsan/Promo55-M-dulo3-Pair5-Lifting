import "react";
import Link from "./Link";
import "../styles/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__container">
        <div className="footer__block">
          <h3>Tienda</h3>
          <ul>
            <Link text={"Productos"} />
            <Link text={"Cajoneras"} />
            <Link text={"Para toda la casa"} />
            <Link text={"Habitaciones"} />
          </ul>
        </div>

        <div className="footer__block">
          <h3>Nosotros</h3>
          <ul>
            <Link text={"Nuestra guía"} />
            <Link text={"Nuestro diseño"} />
            <Link text={"Nuestra historia"} />
            <Link text={"Ayuda"} />
          </ul>
        </div>

        <div className="footer__block">
          <h3>Contacto</h3>
          <ul>
            <Link text={"ayuda@openspaces.com"} />
            <Link text={"Socios"} />
          </ul>

          <div className="footer__social">
            <a href="https://adalab.es" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://adalab.es" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://adalab.es" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
