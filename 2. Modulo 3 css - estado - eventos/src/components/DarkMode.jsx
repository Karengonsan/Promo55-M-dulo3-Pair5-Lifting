import { useState } from "react";
import "../styles/app.css";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <div className={isDark ? "ligth" : ""}>
        <button className="ligthButton" onClick={toggleDarkMode}>
          {isDark ? "Activar el dark mode" : "Desactivar el dark mode"}
        </button>
        {isDark && (
          <p className="ligthMode__text">Tienes desactivado el dark mode</p>
        )}
        <p className="ligthMode__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          quidem pariatur reprehenderit et ut quo, veritatis facere laboriosam,
          laudantium blanditiis inventore rerum maiores possimus eveniet
          dignissimos, ipsum minus expedita ad.
        </p>
      </div>
    </>
  );
};

export default DarkMode;
