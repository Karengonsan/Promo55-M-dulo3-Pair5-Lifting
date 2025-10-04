import "react";
import "../styles/app.css";

const App = () => {
  const tasks = [
    "Comprar harina, jamón y pan rallado",
    "Hacer croquetas ricas",
    "Ir a la puerta de un gimnasio",
    "Comerme las croquetas mirando a la gente que entra en el gimnasio",
  ];

  return (
    <>
      <h1>Mi lista de tareas</h1>
      <ol>
        <li>Comprar harina, jamón y pan rallado</li>
        <li>Hacer croquetas ricas</li>
        <li>Ir a la puerta de un gimnasio</li>
        <li>
          Comerme las croquetas mirando a la gente que entra en el gimnasio
        </li>
      </ol>
    </>
  );
};

export default App;
