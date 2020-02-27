import React from "react";
import BlockEvents from "../components/scheduler/index";
import { Link } from "react-router-dom";

const Planningpage = props => {
  return (
    <div>
      <h3 className="text-center">Planning</h3>
      <br />
      <BlockEvents />
      <div className="place-bis">
        <Link to="/">
          <button
            className="btn btn-light btn-lg"
            href="#"
            role="button"
            style={{ marginTop: "10%" }}
          >
            Retour
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Planningpage;