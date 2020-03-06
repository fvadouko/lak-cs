import config from "../config";

// async function findAll() {
//   return axios.get(config+"api/paie/findAll").then(response => {

//     //const paies = response.data["hydra:member"];
//     return paies;
//   });
// }

async function findAll() {
  try {
    console.log(config + "api/paie/findAll");
    const response = await fetch(config + "api/paie/findAll");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

async function findAll() {
  try {
    const response = await fetch(config + "api/paie/findAll");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

export default {
  findAll
};
