import 'react'
import Icon4FreeSend from "./Icon4FreeSend";
import ButtonBuy from './ButtonBuy';
import "../styles/freeSend.css";

const FreeSend = () => {
  return (
    <section className="free-send">
      <Icon4FreeSend className="free-send__icon"/>
      <h2 className="free-send__title">Envío gratis garantizado</h2>
      <p className="free-send__text">Envío gratis en compras desde 100</p>
      <ButtonBuy />
    </section>
  );
};
export default FreeSend;
