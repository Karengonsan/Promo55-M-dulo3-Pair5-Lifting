import "react";
import "../styles/app.css";
import HeaderContainer from "./HeaderContainer";
import Features from "./Features";
import FreeSend from "./FreeSend";
import Designing from "./Designing";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <HeaderContainer />
      <main>
        <Features />
        <FreeSend />
        <Designing />
      </main>
      <Footer />

      <a href="#" className="scroll-up" aria-label="Volver arriba">
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </>
  );
};

export default App;
