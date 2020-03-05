import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Fiche = ({ onChangePageTwo, wksbyuser, thoursdone, tplanninghours, overtimes, user }) => {
  console.log('la semaine ici '+wksbyuser)
  return (
    <div>
      <div class="limiter">
        <div class="container-table100">
          <table className="table table-hovered">
            <thead>
              <tr>
                <th>
                  <img src="img/avatar.png" alt="" />
                  <span className="emp-name">
                    <h6>
                      {user.lastname} <br /> {user.firstname}
                    </h6>
                  </span>
                  <p className="text-center month-title">
                      { wksbyuser.month} {wksbyuser.year}
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
            
              <tr onClick={() => onChangePageTwo()}>
                <td style={{ width: "58%" }}></td>
                {
                  wksbyuser.map(wks=>{
                    return(
                      <td className="text-center" style={{ fontWeight: "bold" }}>S{wks.week}</td>
                    )
                  })
                }
              </tr>

              <tr>
                <td style={{ fontWeight: "bold" }}>Total heures planning</td>
                {
                  tplanninghours.map(tph=>{
                    return(
                      <td className="text-center">
                        <h3>{tph.TotalPlanningHours}</h3>
                      </td>
                    )
                  })
                }
              </tr>

              {/*
              <tr>
                <td>Abs à retirer du compteur</td>
                {
                  wksbyuser.map(wks=>{
                    return(
                      <td className="text-center">S{wks.week}</td>
                    )
                  })
                }
              </tr>              
              */}
              

              <tr>
                <td>Volume horaire(hebdo) .contrat</td>
                {
                  thoursdone.map(thd=>{
                    return(
                      <td className="text-center">
                        <h3>{thd.TotalHoursDone}</h3>
                      </td>
                    )
                  })
                }
              </tr>

              <tr>
                <td style={{ fontWeight: "bold" }}>Compteur d'heures</td>
                {
                  overtimes.map(ot=>{
                    return(
                      <td className="text-center">
                        <h3>+{ot.overtimes}</h3>
                      </td>
                    )
                  })
                }
              </tr>

              {/*}
                <tr>
                  <td>Modifs manuelles du compteur</td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                  <td className="text-center"></td>
                </tr>
              */}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Fiche;
