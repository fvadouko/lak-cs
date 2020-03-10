import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import paiesApi from "../../services/paiesApi";

const Tableau = ({ onChangePageOne }) => {
  const [paies, setPaies] = useState([]);
  const [months, setMonths] = useState([]);
  const [curMonth, setcurMonth] = useState();
  const [curYear, setcurYear] = useState();


  const month_string = ["janvier","février","mars",
    "avril","mai","juin",
    "juillet","août","septembre",
    "octobre","novembre","décembre"];
  
  var list = [];


  const fetchPaies = async (year,month) =>{
    try {
      let pt = await paiesApi.findAll(year,month);
      setPaies(pt);
    } catch (error) {
      console.log("error", error)
    }
  }

  const handlePeriodePaie = (e)=>{
    let cYear = new Date().getFullYear();
    let cMonth = e.target.value;

    setcurMonth(cMonth);
    fetchPaies(cYear,cMonth);
  }

  useEffect(() =>{
    let cYear = new Date().getFullYear();
    const cm = new Date().getMonth();
    let cMonth = month_string[cm];
    let list = [];

    for(let i=0;i<=cm;i++){
      list.push(month_string[i])
    }

    setMonths(list);
    setcurMonth(cMonth);
    setcurYear(cYear);
    fetchPaies(cYear,cMonth);
  },[])
  
  return (

    <div>
        <div class="limiter">
          <div class="container-table100">

            <select
                class="form-control"
                id="exampleFormControlSelect1"
                name="periode"
                value={curMonth}
                onChange={handlePeriodePaie}
            >
                {
                  months.map(month=>{
                    return(
                      <option value={month}>{month} {curYear}</option>
                      )
                  })
                }
            </select>

            <div class="wrap-table100">
              <div class="table100 ver5 m-b-110">
                <div class="table100-head">

                  <table>
                    <thead>
                      <tr class="row100 head">

                        {
                        <th class="cell100 column1">
                          Employes
                        </th>}
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
                            <tr class="row100 body" 
                                onClick={() => onChangePageOne(pt.year,pt.month,pt.user)} 
                            >
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
