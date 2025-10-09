import "react";
import { Link } from "react-router-dom";

const Repositories = () => {
  return (
    <>
      <h1>Repositories</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolore blanditiis quisquam numquam, cum beatae accusamus fugit unde natus exercitationem temporibus soluta rerum eligendi adipisci, consectetur officiis odit? Suscipit, corporis!</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </>
  );
};

export default Repositories;
