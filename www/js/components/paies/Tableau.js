import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Tableau = ({ onChangePageOne }) => {
  return (
    <div>
      <div class="limiter">
        <div class="container-table100">
          <div class="wrap-table100">
            <div class="table100 ver5 m-b-110">
              <div class="table100-head">
                <table>
                  <thead>
                    <tr class="row100 head">
                      <th class="cell100 column1">Employes</th>
                      <th class="cell100 column2 text-center">
                        Vol Horaire mensuel
                      </th>
                      <th class="cell100 column3 text-center">
                        Taux horaire brut
                      </th>
                      <th class="cell100 column4 text-center">
                        Sal mensuel brut
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>

              <div class="table100-body js-pscroll">
                <table>
                  <tbody>
                    <tr class="row100 body" onClick={() => onChangePageOne()}>
                      <td class="cell100 column1">
                        <img src="img/avatar.png" />
                        Constance De Ray
                      </td>
                      <td class="cell100 column2 text-center">156.00</td>
                      <td class="cell100 column3 text-center">17.00</td>
                      <td class="cell100 column4 text-center">2 652</td>
                    </tr>

                    <tr class="row100 body" onClick={() => onChangePageOne()}>
                      <td class="cell100 column1">
                        <img src="img/avatar.png" />
                        Constance De Ray
                      </td>
                      <td class="cell100 column2 text-center">156.00</td>
                      <td class="cell100 column3 text-center">17.00</td>
                      <td class="cell100 column4 text-center">2 652</td>
                    </tr>

                    <tr class="row100 body" onClick={() => onChangePageOne()}>
                      <td class="cell100 column1">
                        <img src="img/avatar.png" />
                        Constance De Ray
                      </td>
                      <td class="cell100 column2 text-center">156.00</td>
                      <td class="cell100 column3 text-center">17.00</td>
                      <td class="cell100 column4 text-center">2 652</td>
                    </tr>

                    <tr class="row100 body">
                      <td class="cell100 column1">
                        <img src="img/avatar.png" />
                        Constance De Ray
                      </td>
                      <td class="cell100 column2 text-center">156.00</td>
                      <td class="cell100 column3 text-center">17.00</td>
                      <td class="cell100 column4 text-center">2 652</td>
                    </tr>

                    <tr class="row100 body">
                      <td class="cell100 column1">
                        <img src="img/avatar.png" />
                        Constance De Ray
                      </td>
                      <td class="cell100 column2 text-center">156.00</td>
                      <td class="cell100 column3 text-center">17.00</td>
                      <td class="cell100 column4 text-center">2 652</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tableau;
