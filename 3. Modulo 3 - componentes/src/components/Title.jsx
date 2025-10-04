import "react";
import ButtonBuy from "./ButtonBuy";
import "../styles/title.css";

const Title = () => {
  return (
    <div className="page__content">
      <h1 className="page__title">Disfruta creando espacios</h1>
      <ButtonBuy />
    </div>
  );
};

export default Title