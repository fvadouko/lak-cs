import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PointeuseComponent = props => {
  const [dte, setDte] = useState("");
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
        <button type="button" className="btn btn-success">
          Arrivée
        </button>
        <button type="button" className="btn btn-danger">
          Départ
        </button>
      </div>
    </div>
  );
};

export default PointeuseComponent;
