import React from "react";
import { Link } from "react-router-dom";

const Homepage = props => {
  return (
    <div className="place">
      <Link to="/planning">
        <button className="btn btn-light btn-lg" href="#" role="button">
          Planning
        </button>
      </Link>
      <button className="btn btn-light btn-lg" href="#" role="button">
        Pointeuse
      </button>
      <button className="btn btn-light btn-lg" href="#" role="button">
        Paies
      </button>
    </div>
  );
};

export default Homepage;
