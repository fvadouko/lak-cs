import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Fiche = ({ onChangePageTwo }) => {
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
                      Contance <br /> De Ray
                    </h6>
                  </span>
                  <p className="text-center month-title">Février 2020</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={() => onChangePageTwo()}>
                <td style={{ width: "58%" }}></td>
                <td className="text-center">S5</td>
                <td className="text-center">S6</td>
                <td className="text-center">S7</td>
                <td className="text-center">S8</td>
              </tr>

              <tr>
                <td style={{ fontWeight: "bold" }}>Total heures planning</td>
                <td className="text-center">
                  <h3>40</h3>
                </td>
                <td className="text-center">
                  <h3>40</h3>
                </td>
                <td className="text-center">
                  <h3>40</h3>
                </td>
                <td className="text-center">
                  <h3>40</h3>
                </td>
              </tr>

              <tr>
                <td>Abs à retirer du compteur</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
              </tr>

              <tr>
                <td>Volume horaire(hebdo) .contrat</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
              </tr>

              <tr>
                <td style={{ fontWeight: "bold" }}>Compteur d'heures</td>
                <td className="text-center">+2</td>
                <td className="text-center">+1</td>
                <td className="text-center">+1</td>
                <td className="text-center">+2</td>
              </tr>

              <tr>
                <td>Modifs manuelles du compteur</td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Fiche;
