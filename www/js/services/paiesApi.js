import axios from "axios";

// async function findAll() {
//   return axios.get("http://localhost:5000/api/paie/findAll").then(response => {

//     //const paies = response.data["hydra:member"];
//     return paies;
//   });
// }


async function findAll(){
  
  try {
      const response = await fetch("http://localhost:5000/api/paie/findAll");
      const data = await response.json();
      return data;   
  } catch (error) {
    console.log(`Error: ${error}`);
  }

}

async function findAll(){
  
  try {
      const response = await fetch("http://localhost:5000/api/paie/findAll");
      const data = await response.json();
      return data;   
  } catch (error) {
    console.log(`Error: ${error}`);
  }

}

export default {
    findAll
  };