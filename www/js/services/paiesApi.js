
async function findAll(year,month){
  console.log(`year: ${year} - month ${month}`);
  try {
      const response = await fetch(`http://localhost:5000/api/paie/findAll/${year}/${month}`);
      const data = await response.json();
      console.log(data);
      return data;   
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

  async function getWeeksByUser(year,month,id){
    console.log(`year: ${year} - month ${month} - id ${id}`);
    try {
        const response = await fetch(`http://localhost:5000/api/paie/getWeeksByUser/${year}/${month}/${id}`);
        const data = await response.json();
        console.log(data);
        return data;   
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  async function TotalHoursDone(year,month,id){
    console.log(`year: ${year} - month ${month} - id ${id}`);
    try {
        const response = await fetch(`http://localhost:5000/api/paie/TotalHoursDone/${year}/${month}/${id}`);
        const data = await response.json();
        console.log(data);
        return data;   
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  async function TotalPlanningHours(year,month,id){
    console.log(`year: ${year} - month ${month} - id ${id}`);
    try {
        const response = await fetch(`http://localhost:5000/api/paie/TotalPlanningHours/${year}/${month}/${id}`);
        const data = await response.json();
        console.log(data);
        return data;   
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  async function getOvertimes(year,month,id){
    console.log(`year: ${year} - month ${month} - id ${id}`);
    try {
        const response = await fetch(`http://localhost:5000/api/paie/getOvertimes/${year}/${month}/${id}`);
        const data = await response.json();
        console.log(data);
        return data;   
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  async function getUser(id){

    try {
        const response = await fetch(`http://localhost:5000/apip/users/${id}`);
        const data = await response.json();
        console.log(data);
        return data;   
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }


  /*Renvoie un tableau de event
      {
        "week": "8",
        "jour": "5", à faire passer dans un tableau de jour exple [lundi,...]
        "title": "La sécurité de louer plus simplement",
        "eventID": "1",
        "debutPrevu": "2020-02-21 17:30:24",
        "finPrevu": "2020-02-21 18:00:24",
        "user": "2"
    }
  */
  async function getEventsByUser(year,month,id){
    console.log(`year: ${year} - month ${month} - id ${id}`);
    try {
        const response = await fetch(`http://localhost:5000/api/paie/getEventsByUser/${year}/${month}/${id}`);
        const data = await response.json();
        console.log(data);
        return data;   
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }


  /*Renvoie un tableau de pointeuses
    {
        "week": "8",
        "jour": "5",
        "pointeusesID": "2",
        "debutReel": "2020-02-21 17:35:24",
        "finPrevu": "2020-02-21 18:00:24",
        "user": "2"
    },
  */
  async function getPointeusesByUser(year,month,id){
    console.log(`year: ${year} - month ${month} - id ${id}`);
    try {
        const response = await fetch(`http://localhost:5000/api/paie/getPointeusesByUser/${year}/${month}/${id}`);
        const data = await response.json();
        console.log(data);
        return data;   
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  export default {
    findAll,
    getWeeksByUser,
    TotalHoursDone,
    TotalPlanningHours,
    getOvertimes,
    getUser,
    getEventsByUser,
    getPointeusesByUser
  };