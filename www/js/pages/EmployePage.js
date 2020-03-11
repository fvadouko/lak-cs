import React from "react";
import Enrgistrement from "../components/formulaires/Enregistrement";
import { Link } from "react-router-dom";
const EmployePage = props => {
  return (
    <div>
        <div className="container">
            <Link to="/">
              <button
                className="btn btn-light btn-lg"
                href="#"
                role="button"
                style={{position: "relative",top: "45px",left: "45px"}}
              >
                Retour
              </button>
            </Link>
        <h3 className="text-center">Ajout employé</h3>
        <button
                className="btn btn-light btn-lg invisible"
                href="#"
                role="button"
                style={{ marginTop: "10%" }}
              >
              
              </button>
        </div>
        
          <br />
          <Enrgistrement />
    </div>
  );
};

export default EmployePage;
