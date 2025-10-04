import "react";
import "../styles/app.css";
import Counter from "./Counter";
import Dark from './DarkMode';
import Menurguesa from "./Menurguesa";
import Key from "./Key";


const App = () => {

  return (
    <>
      <h1>Ejercicios React</h1>
      <div>
        <h2>1. El contador</h2>
        <Counter />
      </div>
      <div>
        <h2>2. Dark mode</h2>
        <Dark />
      </div>
      <div>
        <h2>3. El menú de hamburguesa</h2>
        <Menurguesa />
      </div>
      <h2>4. Muestra la tecla pulsada en la consola</h2>
        <Key />
    </>
  );
};

export default App;
