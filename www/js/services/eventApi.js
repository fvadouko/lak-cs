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

export default {
  findEvents,
  findUsers
};
