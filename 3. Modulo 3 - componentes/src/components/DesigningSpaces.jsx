import "react";
import IconCreate from "../images/creando-espacios.jpg";
import '../styles/designingSpaces.css'

const DesigningSpaces = () => {
  return (
    <section className=".designing-spaces">
      <img 
      src={IconCreate} 
      alt="creando-espacios"
      className="designing-spaces__image"
       />
    </section>
  );
};

export default DesigningSpaces;
