import React, { useState, useEffect } from "react";
import Tableau from "../components/paies/tableau";
import Fiche from "../components/paies/fiche";
import { Link } from "react-router-dom";
import Detail from "../components/paies/detail";
import paiesApi from "../../js/services/paiesApi";

const Paiepage = props => {
  const [tables, setTables] = useState(true);
  const [fiches, setFiches] = useState(false);
  const [details, setDetails] = useState(false);

  const [wksbyuser, setWksbyuser] = useState([]);
  const [thoursdone, setThoursdone] = useState([]);
  const [tplanninghours, setTplanninghours] = useState([]);
  const [overtimes, setOvertimes] = useState([]);

  const [fyear, setFyear] = useState([]);
  const [fmonth, setFmonth] = useState([]);
  const [user, setUser] = useState({});

const WeeksByUser = async (year,month,id) =>{

  try {
    let pt = await paiesApi.getWeeksByUser(year,month,id);
    setWksbyuser(pt);
  } catch (error) {
    console.log("error", error)
  }
}
const THoursDone = async (year,month,id) =>{

  try {
    let pt = await paiesApi.TotalHoursDone(year,month,id);
    setThoursdone(pt);
  } catch (error) {
    console.log("error", error)
  }
}
const TPlanningHours = async (year,month,id) =>{

  try {
    let pt = await paiesApi.TotalPlanningHours(year,month,id);
    setTplanninghours(pt);
  } catch (error) {
    console.log("error", error)
  }
}

const Overtimes = async (year,month,id) =>{

  try {
    let pt = await paiesApi.getOvertimes(year,month,id);
    setOvertimes(pt);
  } catch (error) {
    console.log("error", error)
  }
}


const getUser = async (id) =>{

  try {
    let pt = await paiesApi.getUser(id);
    console.log("le resultat "+pt);
    setUser(pt);
  } catch (error) {
    console.log("error", error)
  }
}

  useEffect(() => {
    //setTables(true);
    // setTimeout(function() {
    //   setTable(false);
    //   setFiche(true);
    // }, 6000);
  });

  const handleChangePageOne = (year,month,id) => {
    setTables(false);
    setFiches(true);
    setDetails(false);

    setFyear(year);
    setFmonth(month);
  
    WeeksByUser(year,month,id);
    THoursDone(year,month,id);
    TPlanningHours(year,month,id);
    Overtimes(year,month,id);
    getUser(id);
  };

  const handleChangePageTwo = () => {
    setTables(false);
    setFiches(false);
    setDetails(true);
  };

  return (
    <div  className="container">
      <Link to="/">
          <button
            className="btn btn-light btn-lg"
            href="#"
            role="button"
            style={{position: "relative",top: "37px",left: "45px"}}
          >
            Retour
          </button>
      </Link>

      <h3 className="text-center">Paies</h3>
      <br />
      {tables ? <Tableau onChangePageOne={handleChangePageOne} /> : null}

      {fiches ? <Fiche onChangePageTwo={handleChangePageTwo}  
      wksbyuser = {wksbyuser}  
      thoursdone = {thoursdone}
      overtimes = {overtimes}  
      user = {user}
      year = {fyear}
      month = {fmonth}
      tplanninghours = {tplanninghours}/> : null
      }

      {details ? <Detail  
      user = {user}
      year = {fyear}
      month = {fmonth}/> : null}
      {/* {fiche ?  : null} */}

    </div>
  );
};

export default Paiepage;
