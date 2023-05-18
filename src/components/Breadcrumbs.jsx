import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = "";

  const getBreadcrumbs = location.pathname
    .split("/")
    .filter((name) => name !== "")
    .map((name) => { (currentLink += `/${name}`)
      return(
        <div className="crumb" key={name}>
          <Link to={currentLink}>{name}</Link>
        </div>
      )
  });

  return (
    <div className="breadcrumbs">
      {getBreadcrumbs}
    </div>
  );
};

export default Breadcrumbs;
