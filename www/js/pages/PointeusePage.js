import React from "react";
import { Link } from "react-router-dom";
import PointeuseComponent from "../components/pointeuse";

const Pointeusepage = props => {
  return (
    <div>
      <h3 className="text-center">Pointeuse</h3>
      <br />
      <PointeuseComponent />
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

export default Pointeusepage;
