import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import paiesApi from "../../services/paiesApi";

const Tableau = ({ onChangePageOne }) => {
  const [paies, setPaies] = useState([]);

  const fetchPaies = async () =>{
    try {
      let pt = await paiesApi.findAll();
      console.log(pt)
      setPaies(pt)
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() =>{
    fetchPaies();
  },[])
  
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
                {
                  paies.map(pt =>{
                    return(
                      <tr class="row100 body" onClick={() => onChangePageOne()}>
                      <td class="cell100 column1">
                        <img src="img/avatar.png" />
                          {pt.name}
                      </td>
                      <td class="cell100 column2 text-center">{pt.volumehoraire}</td>
                      <td class="cell100 column3 text-center">{pt.hourlyrate}</td>
                      <td class="cell100 column4 text-center">{pt.rawsalary}</td>
                    </tr>
                    )
                  })
                }
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
