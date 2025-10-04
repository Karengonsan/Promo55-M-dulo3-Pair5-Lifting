import "react";
// paquetes externos
// componentes e imagenes
import PropTypes from 'prop-types';
import "../styles/link.css";

const Link = (props) => {

  return (
      <li>
        <a  href="https://adalab.es">{props.text}</a>
      </li>
  );
};
export default Link;

Link.PropTypes = {
    text: PropTypes.string,
}
