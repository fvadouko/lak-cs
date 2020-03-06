import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Detail = ({ onChangePageTwo, wksbyuser, thoursdone, tplanninghours, overtimes, user, year, month } )=> {



  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>
              <h5
                style={{ backgroundColor: "#0f056b", padding: "20px" }}
                className="text-light text-center"
              >
                {month} {year}
              </h5>
            </th>
          </tr>
          <tr style={{ backgroundCcolor: "#C0C0C0" }}>
            <th scope="col">Date</th>
            <th scope="col">Prévu</th>
            <th scope="col">Réel</th>
            <th scope="col">Ecart</th>
            <th scope="col">Repas</th>
            <th scope="col" class="text-dark">
              Tps travail
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vend 1</td>
            <td>08:00-10:00</td>
            <td>08:00-12:00</td>
            <td>2h</td>
            <td>1</td>
            <td>04:00</td>
          </tr>

          {/*
            
          */}
          <tr>
            <td>Sam 2</td>
            <td>08:00-12:00</td>
            <td>08:00-12:00</td>
            <td></td>
            <td>1</td>
            <td>04:00</td>
          </tr>
          <tr>
            <td>Dim 3</td>
          </tr>

          <tr>
            <th>Sem 28</th>
            <td></td>
            <td></td>
            <td>2h</td>
            <td>2</td>
            <td>08:00</td>
          </tr>

          <tr>
            <td>Lun 4</td>
            <td>08:00-12:00</td>
            <td>08:00-12:00</td>
            <td></td>
            <td></td>
            <td>04:00</td>
          </tr>

          <tr>
            <td>Mar 5</td>
            <td>08:00-12:00</td>
            <td>08:00-12:00</td>
            <td></td>
            <td>1</td>
            <td>04:00</td>
          </tr>

          <tr>
            <td>Merc 6</td>
            <td>08:00-10:00</td>
            <td>08:00-08:12</td>
            <td></td>
            <td>1</td>
            <td>04:00</td>
          </tr>

          <tr>
            <td>Jeu 7</td>
            <td>08:00-10:00</td>
            <td>08:00-08:12</td>
            <td>1h35</td>
            <td></td>
            <td>05:35</td>
          </tr>

          <tr>
            <td>Vend 8</td>
            <td>08:00-10:00</td>
            <td>08:00-08:12</td>
            <td></td>
            <td></td>
            <td>04:00</td>
          </tr>

          <tr>
            <td>Sam 9</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>Dim 10</td>
            <td>08:00-12:00</td>
            <td>08:00-12:00</td>
            <td></td>
            <td>1</td>
            <td>04:00</td>
          </tr>

          <tr>
            <th>Sem 29</th>
            <td></td>
            <td></td>
            <td>1h35</td>
            <td>3</td>
            <td>21:35</td>
          </tr>

          <tr>
            <td>mard 11</td>
            <td>08:00-12:00</td>
            <td>08:00-12:00</td>
            <td>15min</td>
            <td></td>
            <td>04:15</td>
          </tr>

          <tr>
            <td>merc 12</td>
            <td>08:00-12:00</td>
            <td>08:00-12:00</td>
            <td>1h30</td>
            <td>1h</td>
            <td>04:00</td>
          </tr>

          <tr>
            <td>Jeu 13</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>sam 15</td>
            <td>08:00-12:00</td>
            <td>08:00-12:00</td>
            <td></td>
            <td>1</td>
            <td>04:00</td>
          </tr>

          <tr>
            <td>Dim 16</td>
            <td>08:00-12:00</td>
            <td>08:00-12:00</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr style={{ backgroundColor: "#C0C0C0" }}>
            <th scope="col">Total Period</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col" class="text-dark">
              122:15
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
