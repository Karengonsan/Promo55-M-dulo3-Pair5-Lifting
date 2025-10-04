import "react";
import Icon1Need from "../components/Icon1Need";
import Icon2Bio from "../components/Icon2Bio";
import Icon3Guide from "./Icon3Guide";
import "../styles/features.css";

const Features = () => {
  return (
    <section className="features">
      <h2 className="features__title">
        Volverse organizado se siente mejor con OPEN SPACES
      </h2>

      <div className="features__grid">
        <div className="features__item">
          <Icon1Need />
          <h3 className="features__subtitle">Lo que necesitas</h3>
          <p className="features__description">
            Una línea de productos diseñados para todos tus espacios
          </p>
        </div>

        <div className="features__item">
          <Icon2Bio />
          <h3 className="features__subtitle">Materias primas sustentables</h3>
          <p className="features__description">
            Una línea de productos diseñados para todos tus espacios
          </p>
        </div>

        <div className="features__item">
          <Icon3Guide />
          <h3 className="features__subtitle">Guía</h3>
          <p className="features__description">
            Soporte y asesoramiento para ayudarte con tu objetivo
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
