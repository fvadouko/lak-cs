import config from "../config";

function create(password, arrivals, departures) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    passwords: password,
    arrivals: arrivals,
    departures: null
  });

  console.log(raw);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch(config + "api/create/pointeuses", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
}

function update(password, departures) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let monthsArray = [
    "janvier",
    "févier",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
  ];

  var raw = JSON.stringify({
    passwords: password,
    departures: departures,
    week: parseInt(moment().weeks()),
    month: monthsArray[parseInt(new Date().getMonth())],
    year: parseInt(moment().year())
  });

  console.log(raw);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch(config + "api/edit/pointeuses", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
}

function lastPointeuse(password) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    passwords: password
  });

  console.log(raw);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch(config + "api/lastPointeuse", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
}

export default {
  create,
  update,
  lastPointeuse
};
