import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pointeuseApi from "../../services/pointeuseApi";

const PointeuseComponent = props => {
  //const [arrival, setArrival] = useState(0);
  const [departures, setDepartures] = useState(null);
  //const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
 
  const [nom, setNom] = useState("");
  const [horloge, setHorloge] = useState("");

  

  useEffect(() => {
    showDate();
    
    const initialDate = new Date();

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };

    let dateLocale = String(initialDate.toLocaleDateString(undefined, options));
    document.getElementById("p1").innerHTML = dateLocale;
  }, []);

  const refresh = () => {
    var t = 1000; // rafraîchissement en millisecondes
    setTimeout(showDate(), t);
  };

  const showDate = () => {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if (h < 10) {
      h = "0" + h;
    }
    if (m < 10) {
      m = "0" + m;
    }
    if (s < 10) {
      s = "0" + s;
    }
    var time = h + ":" + m + ":" + s;
    document.getElementById("horloge").innerHTML = time;
    //refresh();
  };


  //Gestion de l'event submit du formulaire d'enregistrement des heures d'arrivée
  const handleArrival = async e =>{

    e.preventDefault();

    if(password!==""){

        let arrivals = new Date();
        try {
          await pointeuseApi.create(password,arrivals,departures);
          $('#arrivalsModal').modal('toggle');
        } catch (error) {
          console.log("error", error);
        } 

    }else{
      alert("Veuillez saisir votre mot de passe");
    }
 
  }

  //Gestion de l'event submit du formulaire d'enregistrement des heures de depart
  const handleDepartures = async e =>{

    e.preventDefault();

    if(password!==""){

      let departures = new Date();
      try {
        await pointeuseApi.update(password,departures);
        $('#departuresModal').modal('toggle');
      } catch (error) {
        console.log("error", error);
      } 

  }else{
    alert("Veuillez saisir votre mot de passe");
  }
  }

  return (
    <div className="place-bis-bis">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p id="p1" className="text-center"></p>
      <h1 id="horloge" className="text-center"></h1>

      <div className="btn-c">

        <button type="button" 
                className="btn btn-success" 
                data-toggle="modal" 
                data-target="#arrivalsModal"
                onClick={()=>setPassword("")}
        >
          Arrivée
        </button>

        <button type="button" 
                className="btn btn-danger"
                data-toggle="modal" 
                data-target="#departuresModal"
                onClick={()=>setPassword("")}
        >
          Départ
        </button>

      </div>

      <div class="modal fade" id="arrivalsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
          
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Date d'arrivée</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <form onSubmit={handleArrival} class="justify-content-center">
                <div class="modal-body">
                    <div class="px-2">
                            <div class="form-group">
                              <label class="sr-only">Password</label>
                              <input
                                type="password"
                                class="form-control"
                                placeholder="Votre mot de passe"
                                name="password"
                                onChange={e=>setPassword(e.target.value)}
                                required
                              />
                            </div>
                    </div>
                </div>

                <div class="modal-footer ">
                    <button type="submit" 
                            class="btn btn-primary btn-lg" 
                    >
                      Enrégistrer
                    </button>
                    <button type="button" 
                            class="btn btn-secondary btn-lg" 
                            data-dismiss="modal"
                    >
                      Annuler
                    </button>
                </div>
            </form>

          </div>
        </div>
      </div>


      
      <div class="modal fade" id="departuresModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          
          <div class="modal-content">
            
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Date de départ</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <form onSubmit={handleDepartures} class="justify-content-center">
                  <div class="modal-body">
                      <div class="px-2">
                              <div class="form-group">
                                <label class="sr-only">Password</label>
                                <input
                                  type="password"
                                  class="form-control"
                                  placeholder="Votre mot de passe"
                                  name="password"
                                  onChange={e=>setPassword(e.target.value)}
                                  required
                                />
                              </div>
                      </div>
                  </div>

                <div class="modal-footer ">
                    <button type="submit" 
                            class="btn btn-primary btn-lg" 
                    >
                      Enrégistrer
                    </button>
                    <button type="button" 
                            class="btn btn-secondary btn-lg" 
                            data-dismiss="modal"
                    >
                      Annuler
                    </button>
                </div>
              </form>
          </div>
        </div>
      </div>     
    </div>
  );
};

export default PointeuseComponent;
