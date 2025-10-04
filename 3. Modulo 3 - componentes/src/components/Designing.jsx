import "react";
import DesigningSpaces from "./DesigningSpaces";
import ButtonBuy from './ButtonBuy'
import "../styles/designing.css";

const Designing = () => {
  return (
    <section className="designing">
      <div className="designing__content">
        <h2 className="designing__title">Disfruta creando espacios</h2>
        <p className="designing__text">Una línea de productos diseñados para todos tus espacios</p>
        <ButtonBuy />
      </div>

      <DesigningSpaces />
    </section>
  );
};
export default Designing;
