import React from "react";
import { Link } from "react-router-dom";
import PointeuseComponent from "../components/pointeuse";

const Pointeusepage = props => {
  return (
    <div className="container">
    <Link to="/" >
      <button
        className="btn btn-light btn-lg"
        href="#"
        role="button"
        style={{position: "relative",top: "45px",left: "45px"}}
      >
        Retour
      </button>
    </Link>
<h3 className="text-center">Planning</h3>
<button
        className="btn btn-light btn-lg invisible"
        href="#"
        role="button"
        style={{ marginTop: "10%" }}
      >
      
      </button>
      <PointeuseComponent />
</div>
 
  );
};

export default Pointeusepage;
