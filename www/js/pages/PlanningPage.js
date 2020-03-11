import React from "react";

import { Link } from "react-router-dom";
import BlockEvents from "../components/planning";

const Planningpage = props => {
  return (
    <div className="container" style={{ marginTop: "-35px" }}>
      <Link to="/">
        <button
          className="btn btn-light btn-lg"
          href="#"
          role="button"
          style={{ position: "relative", top: "48px", left: "45px" }}
        >
          Retour
        </button>
      </Link>
      <h3 className="text-center">Planning</h3>

      <button
        className="btn btn-light btn-lg invisible"
        href="#"
        role="button"
      ></button>
      <BlockEvents />
    </div>
  );
};

export default Planningpage;
