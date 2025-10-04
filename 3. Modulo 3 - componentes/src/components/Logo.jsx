import "react";
import LogoImage from "../images/logo.png";
import "../styles/logo.css";

const Logo = () => {
  return <img 
  src={LogoImage} 
  alt="Logo Open Spaces" 
  className="page__logo" />;
};

export default Logo;
