import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

const Main = () => {
  return (
    <>
      <header>
        <nav>
          <h1>Job</h1>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
      </header>
      <Breadcrumbs/>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Main;
