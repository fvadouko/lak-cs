
// async function findAll(curYear,curMonth) {

//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   var raw = JSON.stringify({
//     year: curYear,
//     month: curMonth
//   });

//   var requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow"
//   };

//   fetch("http://localhost:5000/api/paie/findAll", requestOptions)
//     .then(response => response.json())
//     //.then(result => console.log(result))
//     .catch(error => console.log("error", error));
// } 

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

  // async function findPaieByUser(year,month,id){
  //   console.log(`year: ${year} - month ${month} - id ${id}`);
  //   try {
  //       const response = await fetch(`http://localhost:5000/api/paie/findPaieByUser/${year}/${month}/${id}`);
  //       const data = await response.json();
  //       console.log(data);
  //       return data;   
  //   } catch (error) {
  //     console.log(`Error: ${error}`);
  //   }
  // }

  export default {
    findAll,findPaieByUser
  };