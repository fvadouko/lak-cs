import React, { useState, useEffect } from "react";
import Tableau from "../components/paies/tableau";
import Fiche from "../components/paies/fiche";
import { Link } from "react-router-dom";
import Detail from "../components/paies/detail";
// var table = true;
// var fiche = false;
// var detail = false;
const Paiepage = props => {
  const [tables, setTables] = useState(true);
  const [fiches, setFiches] = useState(false);
  const [details, setDetails] = useState(false);
  //const [paieByUser, setPaieByUser] = useState([]);

  useEffect(() => {
    //setTables(true);
    // setTimeout(function() {
    //   setTable(false);
    //   setFiche(true);
    // }, 6000);
  });

  const handleChangePageOne = (value) => {
    setTables(false);
    setFiches(true);
    setDetails(false);

  };

  const handleChangePageTwo = () => {
    setTables(false);
    setFiches(false);
    setDetails(true);
  };

  return (
    <div>
      <h3 className="text-center">Paies</h3>
      <br />
      {tables ? <Tableau onChangePageOne={handleChangePageOne} /> : null}
      {fiches ? <Fiche onChangePageTwo={handleChangePageTwo}  paieByUser = {paieByUser}/> : null}
      {details ? <Detail /> : null}
      {/* {fiche ?  : null} */}
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

export default Paiepage;
