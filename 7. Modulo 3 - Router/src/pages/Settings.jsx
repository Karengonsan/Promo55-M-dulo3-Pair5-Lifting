import "react";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <>
      <h1>Settings</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste iure ipsa
        maxime, expedita consequatur hic quae earum, doloremque autem possimus
        quia? Animi molestias necessitatibus maxime itaque laboriosam
        accusantium, qui sunt?
      </p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </>
  );
};

export default Settings;