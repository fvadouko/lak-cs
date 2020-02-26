import React from "react";
import Enrgistrement from "../components/formulaires/Enregistrement";
import { Link } from "react-router-dom";
const EmployePage = props => {
  return (
    <div>
      <h3 className="text-center">Ajout employé</h3>
      <br />
      <Enrgistrement />
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

export default EmployePage;
