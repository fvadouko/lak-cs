import axios from "axios";
import config from "../config";
import moment from "moment";

async function findEvents() {
  return axios
    .get(config + "apip/events")
    .then(response => {
      const events = response.data["hydra:member"];

      console.log("[eventApi] users", events);
      return events;
    })
    .catch(error => {
      console.log("[eventApi] Error", error);
    });
}

async function findUsers() {
  return axios.get(config + "apip/users").then(response => {
    const users = response.data["hydra:member"];

    return users;
  });
}

function create(
  subject,
  department,
  startTime,
  endTime,
  isAllDay,
  employeeId,
  description,
  repeat,
  timezone
) {
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
    "decembre"
  ];
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    title: subject,
    location: department,
    start: startTime,
    endt: endTime,
    allday: isAllDay,
    user: "/apip/users/" + employeeId.toString(),
    description: description,
    repeat: repeat,
    timezone: timezone,
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

  fetch(config + "apip/events", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
}

export default {
  findEvents,
  findUsers,
  create
};
