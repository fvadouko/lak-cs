import React from "react";
import { Link } from "react-router-dom";

const Homepage = props => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="btn-c">
        <Link to="/employe">
          <button className="btn btn-light btn-lg" href="#" role="button">
            Ajout d'un employé
          </button>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <div className="btn-c">
        <Link to="/planning">
          <button className="btn btn-light btn-lg" href="#" role="button">
            Planning
          </button>
        </Link>
        <Link to="/pointeuse">
          <button className="btn btn-light btn-lg" href="#" role="button">
            Pointeuse
          </button>
        </Link>
        <Link to="/paies">
          <button className="btn btn-light btn-lg" href="#" role="button">
            Paies
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
