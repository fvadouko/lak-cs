import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import paieApi from "../../services/paiesApi";
import moment from 'moment';

var treel ={};

const Detail = ({ onChangePageTwo, wksbyuser, thoursdone, tplanninghours, overtimes, user, year, month } )=> {

  const [prevu,setPrevu] = useState([]);
  const [reel,setReel] = useState([]);
  const [weeksPlan,setWeeksPlan] = useState([]);

  const jour_string = ["Dim","Lun","Mar","Mer","Jeu","Vend","Sam"];



  const getPrevu = async(year,month,user)=>{
    try {
      const tp = await paieApi.getEventsByUser(year,month,user.id);
      setPrevu(tp);    
    } catch (error) {
      console.log("error: " +error);
    }
  }

  const getReel = async(year,month,user)=>{
    try {
      const tr = await paieApi.getPointeusesByUser(year,month,user.id);
      setReel(tr);   
    } catch (error) {
      console.log("error: " +error);
    }
  }

  const getWeeksPlanned = async(year,month,user)=>{
    try {
      const weeksPlan = await paieApi.weeksPlanned(year,month,user.id);
      setWeeksPlan(weeksPlan);
    } catch (error) {
      console.log("error from getWeeksPlanned : " +error);
    }
  }

  const ecart = (a,b,c,d)=>{
    
    let ma = new Date(a);//Event
    let mb = new Date(b);
    
    let mc = new Date(c);//Pointeuses
    let md = new Date(d);

    console.log(a+"\n");
    console.log(b+"\n");
    console.log(c+"\n");
    console.log(d+"\n");

    let ms1,ms2,ms3=0;

    if( (a==null || b==null) || (a=='' || b=='') ){
      return 0
    }else{
      ms1 = moment(mb).diff(moment(ma));
      ms2 = moment(md).diff(moment(mc));
      ms3 = (ms2>ms1)?ms2-ms1:ms1-ms2;
      return moment(ms3).format('HH:mm:SS');
    } 
    
  }


  const workTime = (a,b)=>{

    let ma = new Date(a);
    let mb = new Date(b);
    let ms1;

    if((a==null || b==null) || (a=="" || b=="")){
      return 0;
    }else{
      ms1 = moment(mb).diff(moment(ma));
      return moment(ms1).format('HH:mm:SS');
    }
  }


  const TotalWorkTime = (reel)=>{

    let tot=0;
    let tmp;

    reel.forEach(elt => {
          if( elt.heureArrivee != null && elt.heureDepart != null){
              tot = tot + moment(elt.heureDepart).diff(moment(elt.heureArrivee));
          }else{
              tot += 0;
          }
    })     

    return moment(tot).format('HH:mm:SS');
  }


  useEffect(()=>{

    getPrevu(year,month,user);
    getReel(year,month,user);
    getWeeksPlanned(year,month,user);

  },[])

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
          
            {

              prevu.map((prev,treel)=>{
                  lblFor:for(let i=0;i<reel.length;i++){
                    if( parseInt(prev.week) == parseInt(reel[i].week) && 
                        parseInt(prev.jour) == parseInt(reel[i].jour) 
                        // && parseInt(prev.hdbt) == parseInt(reel[i].hdbt)
                      )
                        {
                          treel = reel[i];
                          break lblFor;
                        }
                    }
                    return(

                        <tr>
                          <td>{jour_string[prev.jour]} {prev.lejour}</td>
                          <td>{prev.debutPrevu} - {prev.finPrevu}</td>
                          <td>{treel.debutReel} - {treel.finReel}</td>
                          <td>
                            {
                              ecart(treel.heureArrivee,treel.heureDepart,prev.heureArrivee,prev.heureDepart)
                            }
                          </td>
                          <td>
                              1
                          </td>
                          <td>
                              {workTime(treel.heureArrivee,treel.heureDepart)}
                          </td>
                        </tr> 

                    )
                })

            }

          <tr style={{ backgroundColor: "#C0C0C0" }}>
            <th scope="col">Total Période</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col" class="text-dark">
              {TotalWorkTime(reel)}
            </th>
          </tr>

        </tbody>
      </table>

    </div>
    
  );
};

export default Detail;
