import React from "react";
import BlockEvents from "../components/scheduler/index";
import { Link } from "react-router-dom";

const Planningpage = props => {
  return (
    <div>
      <BlockEvents />
      <div class="place-bis">
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
