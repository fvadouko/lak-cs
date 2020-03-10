
async function findAll(year,month){
  try {
    const response = await fetch(`${config}api/paie/findAll/${year}/${month}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

  async function getWeeksByUser(year,month,id){
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
    try {
        const response = await fetch(`http://localhost:5000/api/paie/TotalHoursDone/${year}/${month}/${id}`);
        const data = await response.json();
        console.log(data);
        return data;   
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  async function TotalHoursDones(year,month,id){
    try {
        const response = await fetch(`http://localhost:5000/api/paie/TotalHoursDones/${year}/${month}/${id}`);
        const data = await response.json();
        console.log(data);
        return data;   
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }


  async function TotalPlanningHours(year,month,id){
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


  async function getPointeusesByUser(year,month,id){
    console.log(`year: ${year} - month ${month} - id ${id}`);
    try {
        const response = await fetch(`http://localhost:5000/api/paie/getPointeusesByUser/${year}/${month}/${id}`);
        const data = await response.json();
        console.log(data);
        return data;   
    } catch (error) {
      console.log(`Error from getPointeusesByUser : ${error}`);
    }
  }

  async function weeksPlanned(year,month,id){
    try {
      const response = await fetch(`http://localhost:5000/api/paie/weeksPlanned/${year}/${month}/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(`Error from weeksPlanned : ${error}`);
    }
  }



  export default {
    findAll,
    getWeeksByUser,
    TotalHoursDone,
    TotalHoursDones,
    TotalPlanningHours,
    getOvertimes,
    getUser,
    getEventsByUser,
    getPointeusesByUser,
    weeksPlanned
  };
