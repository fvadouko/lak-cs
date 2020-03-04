

function create(password,arrivals,departures) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      passwords: password,
      arrivals: arrivals,
      departures: null
    });
  
    console.log(raw);
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
  
    fetch("http://localhost:5000/api/create/pointeuses", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log("error", error));
    }  



function update(password,departures) {

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
    
      var raw = JSON.stringify({
        passwords: password,
        departures: departures
      });
    
      console.log(raw);
    
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
    
      fetch("http://localhost:5000/api/edit/pointeuses", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log("error", error));
} 

  export default {
    create,update
  };
  