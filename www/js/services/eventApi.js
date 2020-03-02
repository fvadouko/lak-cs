import axios from "axios";

async function findEvents() {
  return axios.get("http://localhost:5000/apip/events").then(response => {
    const users = response.data["hydra:member"];

    return users;
  });
}

async function findUsers() {
  return axios.get("http://localhost:5000/apip/users").then(response => {
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
    timezone: timezone
  });

  console.log(raw);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("http://localhost:5000/apip/events", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
}

export default {
  findEvents,
  findUsers,
  create
};
