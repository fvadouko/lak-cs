import axios from "axios";

async function findAll() {
  return axios.get("http://localhost:3000/apip/posts").then(response => {
    const customers = response.data["hydra:member"];

    return customers;
  });
}

export default {
  findAll
};
