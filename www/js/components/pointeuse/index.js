import React, { useState } from "react";
import pointeuseApi from "../../services/pointeuseApi";
import Clock from "./clock";

var concatValue = "";
const PointeuseComponent = props => {
  const [departures, setDepartures] = useState(null);
  const [password, setPassword] = useState("");

  const [arrival, setArrival] = useState(false);
  const [departure, setDeparture] = useState(false);

  const fillInputPassword = async value => {
    if (concatValue.length <= 6) {
      concatValue = concatValue.toString().trim() + value.toString().trim();
      concatValue = concatValue.trim();
      console.log("[pointeuse] line 62", concatValue);
      setPassword(concatValue);
      console.log("[pointeuse] line 64", password);
    }

    if (concatValue.length == 6) {
      console.log("[pointeuse] line 68", concatValue);
      if (arrival) {
        // $("#arrivalsModal").modal("hide");
        //handleArrival();

        //code autorisation pointeuse arrivee ici
        try {
          const last = await pointeuseApi.lastPointeuse(concatValue);
          console.log("Pointeuse Line 73", last);
          if (last.departures != null || last === false) {
            handleArrival();
          } else {
            alert("Vous n' êtes pas autorisé");
          }
        } catch (error) {
          console.log("error: ", error);
        }

        $("#arrivalsModal").modal("hide");
      }
      if (departure) {
        console.log("Pointeuse Line 86");
        $("#departuresModal").modal("hide");
        handleDepartures();
      }
    }
  };

  const handleClickArrival = () => {
    setPassword("");
    concatValue = "";
    setArrival(true);
    setDeparture(false);
    $("#arrivalsModal").modal("show");
  };

  const handleClickDeparture = () => {
    setPassword("");
    concatValue = "";

    setArrival(false);
    setDeparture(true);
    $("#departuresModal").modal("show");
  };

  //Gestion de l'event submit du formulaire d'enregistrement des heures d'arrivée
  const handleArrival = async () => {
    if (password !== "") {
      let arrivals = new Date();
      try {
        console.log("[pointeuse] line 68", concatValue);
        const arrival = await pointeuseApi.create(
          concatValue,
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
      console.log("Pointeuse Line 137");
      try {
        console.log("Pointeuse Line 139 ", concatValue);
        const departure = await pointeuseApi.setDepartures(
          concatValue,
          departures
        );
        console.log("Pointeuse Line 141", departure);
        //console.log("concatValue ",concatValue)
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
      <Clock />
      <h1 id="horloge" className="text-center"></h1>

      <div className="btn-c">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleClickArrival()}
          style={{ width: "165px", height: "65px" }}
        >
          Arrivée
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleClickDeparture()}
          style={{ width: "165px", height: "65px" }}
        >
          Départ
        </button>
      </div>

      <div
        className="modal fade"
        id="arrivalsModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Saisissez votre mot de passe
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <div style={{ width: "250px" }} className="mx-auto">
                <div
                  className="btn-group-vertical mt-4"
                  role="group"
                  aria-label="Basic example"
                >
                  <div className="btn-group ">
                    <input
                      className="text-center form-control-lg mb-2"
                      defaultValue={password}
                      type="password"
                    />
                  </div>
                  <div className="btn-group pl-4 pr-4">
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(1)}
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(2)}
                    >
                      2
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary py-3 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(3)}
                    >
                      3
                    </button>
                  </div>
                  <div className="btn-group pl-4 pr-4">
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(4)}
                    >
                      4
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(5)}
                    >
                      5
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary py-3 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(6)}
                    >
                      6
                    </button>
                  </div>
                  <div className="btn-group pl-4 pr-4">
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(7)}
                    >
                      7
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(8)}
                    >
                      8
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(9)}
                    >
                      9
                    </button>
                  </div>
                  <div className="btn-group pl-4 pr-4">
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle invisible"
                      onClick={() => fillInputPassword(7)}
                    ></button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(0)}
                    >
                      0
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
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
        className="modal fade"
        id="departuresModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Date de départ
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <div style={{ width: "150px" }} className="mx-auto">
                <div
                  className="btn-group-vertical mt-4"
                  role="group"
                  aria-label="Basic example"
                >
                  <div className="btn-group ">
                    <input
                      className="text-center form-control-lg mb-2"
                      defaultValue={password}
                      type="password"
                      style={{ border: "1px solid #ccc !important" }}
                    />
                  </div>
                  <div className="btn-group pl-4 pr-4">
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(1)}
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(2)}
                    >
                      2
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary py-3 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(3)}
                    >
                      3
                    </button>
                  </div>
                  <div className="btn-group pl-4 pr-4">
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(4)}
                    >
                      4
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(5)}
                    >
                      5
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary py-3 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(6)}
                    >
                      6
                    </button>
                  </div>
                  <div className="btn-group pl-4 pr-4">
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(7)}
                    >
                      7
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(8)}
                    >
                      8
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(9)}
                    >
                      9
                    </button>
                  </div>
                  <div className="btn-group pl-4 pr-4">
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle invisible"
                      onClick={() => fillInputPassword(7)}
                    ></button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
                      onClick={() => fillInputPassword(0)}
                    >
                      0
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary mr-2 mb-2 rounded-circle"
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
