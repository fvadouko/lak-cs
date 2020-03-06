import config from "../config";
async function findAll(year, month) {
  console.log(`year: ${year} - month ${month}`);
  try {
    const response = await fetch(`${config}api/paie/findAll/${year}/${month}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

async function getWeeksByUser(year, month, id) {
  console.log(`year: ${year} - month ${month} - id ${id}`);
  try {
    const response = await fetch(
      `${config}api/paie/getWeeksByUser/${year}/${month}/${id}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

async function TotalHoursDone(year, month, id) {
  console.log(`year: ${year} - month ${month} - id ${id}`);
  try {
    const response = await fetch(
      `${config}api/paie/TotalHoursDone/${year}/${month}/${id}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

async function TotalPlanningHours(year, month, id) {
  console.log(`year: ${year} - month ${month} - id ${id}`);
  try {
    const response = await fetch(
      `${config}api/paie/TotalPlanningHours/${year}/${month}/${id}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

async function getOvertimes(year, month, id) {
  console.log(`year: ${year} - month ${month} - id ${id}`);
  try {
    const response = await fetch(
      `${config}api/paie/getOvertimes/${year}/${month}/${id}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

async function getUser(id) {
  try {
    const response = await fetch(`${config}apip/users/${id}`);
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
  getUser
};
