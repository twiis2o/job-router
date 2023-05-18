import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>404 Page not found</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        possimus quo architecto illo eveniet facilis delectus, libero
        consequuntur quasi reprehenderit sed velit rerum adipisci labore maxime
        dolores reiciendis ipsum quos.
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
};

export default NotFound;
