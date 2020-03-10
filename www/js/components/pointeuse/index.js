import React, { useEffect, useState } from "react";
import pointeuseApi from "../../services/pointeuseApi";
import Clock from "./clock";

var concatValue="";
const PointeuseComponent = props => {
  //const [arrival, setArrival] = useState(0);
  const [departures, setDepartures] = useState(null);
  //const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [arrival, setArrival] = useState(false);
  const [departure, setDeparture] = useState(false);

  const fillInputPassword = value => {
    if (concatValue.length <= 6) {
      concatValue = concatValue.toString().trim() + value.toString().trim();
      concatValue = concatValue.trim();

      
      setPassword(concatValue);
      console.log("line 25", concatValue);
    }

    if (concatValue.length == 6) {
      //setPassword(concatValue);
    
      console.log("line 31", concatValue);
      if (arrival) {
        handleArrival();
        $("#arrivalsModal").modal("hide");
       
      }
      if (departure) {
        handleDepartures();
        $("#departuresModal").modal("hide");
        
      }
    }
  };

  const handleClickArrival = () => {
    setPassword("");
    concatValue = "";
    setArrival(true);
    setDeparture(false);
  };

  const handleClickDeparture = () => {
    setPassword("");
    concatValue = "";
    if (arrival) {
      setArrival(false);
      setDeparture(true);
    } else {
      alert("Cliquez sur 'Arrivée, pour indiquer votre arrivée");
    }
  };

  //Gestion de l'event submit du formulaire d'enregistrement des heures d'arrivée
  const handleArrival = async () => {
    if (password !== "") {
      let arrivals = new Date();
      try {
        console.log("line 63", concatValue);
        const arrival = await pointeuseApi.create(
          concatValue, // remember this is password
          arrivals,
          departures
        );
        $("#arrivalsModal").modal("toggle");
      } catch (error) {
        //
      }
    } else {
      alert("Veuillez saisir votre mot de passe");
    }
  };

  //Gestion de l'event submit du formulaire d'enregistrement des heures de depart
  const handleDepartures = async () => {
    if (password !== "") {
      let departures = new Date();
      try {
        const departure = await pointeuseApi.update(concatValue, departures);
        $("#departuresModal").modal("toggle");
      } catch (error) {
        //
      }
    } else {
      alert("Veuillez saisir votre mot de passe");
    }
  };

  const backButton = () => {
    let nbChar = concatValue.length - 1;

    if (nbChar >= 0) {
      concatValue = concatValue.substr(0, nbChar);
      setPassword(concatValue);
    }
  };

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
      <Clock />
      <h1 id="horloge" className="text-center"></h1>

      <div className="btn-c">
        <button
          type="button"
          className="btn btn-success"
          data-toggle="modal"
          data-target="#arrivalsModal"
          onClick={() => handleClickArrival()}
          style={{ width: "165px", height: "65px" }}
        >
          Arrivée
        </button>

        <button
          type="button"
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#departuresModal"
          onClick={() => handleClickDeparture()}
          style={{ width: "165px", height: "65px" }}
        >
          Départ
        </button>
      </div>

      <div
        class="modal fade"
        id="arrivalsModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Saisissez votre mot de passe
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <div style={{ width: "250px" }} class="mx-auto">
                <div
                  class="btn-group-vertical mt-4"
                  role="group"
                  aria-label="Basic example"
                >
                  <div class="btn-group ">
                    <input
                      class="text-center form-control-lg mb-2"
                     
                      type="password"
                    defaultValue={password}
                    />
                  </div>
                  <div class="btn-group pl-4 pr-4">
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(1)}
                    >
                      1
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(2)}
                    >
                      2
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary py-3 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(3)}
                    >
                      3
                    </button>
                  </div>
                  <div class="btn-group pl-4 pr-4">
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(4)}
                    >
                      4
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(5)}
                    >
                      5
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary py-3 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(6)}
                    >
                      6
                    </button>
                  </div>
                  <div class="btn-group pl-4 pr-4">
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(7)}
                    >
                      7
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(8)}
                    >
                      8
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(9)}
                    >
                      9
                    </button>
                  </div>
                  <div class="btn-group pl-4 pr-4">
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle invisible"
                      onClick={() => fillInputPassword(7)}
                    ></button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(0)}
                    >
                      0
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => backButton()}
                    >
                      {"<-"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="departuresModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Date de départ
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <div style={{ width: "150px" }} class="mx-auto">
                <div
                  class="btn-group-vertical mt-4"
                  role="group"
                  aria-label="Basic example"
                >
                  <div class="btn-group ">
                    <input
                      class="text-center form-control-lg mb-2"
                      defaultValue={password}
                      type="password"
                      style={{ border: "1px solid #ccc !important" }}
                    />
                  </div>
                  <div class="btn-group pl-4 pr-4">
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(1)}
                    >
                      1
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(2)}
                    >
                      2
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary py-3 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(3)}
                    >
                      3
                    </button>
                  </div>
                  <div class="btn-group pl-4 pr-4">
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(4)}
                    >
                      4
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(5)}
                    >
                      5
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary py-3 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(6)}
                    >
                      6
                    </button>
                  </div>
                  <div class="btn-group pl-4 pr-4">
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(7)}
                    >
                      7
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(8)}
                    >
                      8
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(9)}
                    >
                      9
                    </button>
                  </div>
                  <div class="btn-group pl-4 pr-4">
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle invisible"
                      onClick={() => fillInputPassword(7)}
                    ></button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(0)}
                    >
                      0
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => backButton()}
                    >
                      {"<-"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointeuseComponent;
