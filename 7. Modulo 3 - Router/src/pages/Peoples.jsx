import "react";
import { Link } from "react-router-dom";

const People = () => {
  return (
    <>
    <h1>People</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus error quis blanditiis autem maxime optio accusantium ipsa, voluptates repellendus tempore iste reiciendis numquam! Molestiae nobis eligendi sit totam culpa molestias!</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </>
  );
};

export default People