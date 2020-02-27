function create(firstname, lastname, designation, picture,password,hourlyrate) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    firstname: firstname,
    lastname: lastname,
    designation: designation,
    picture: picture,
    passwords: password,
    hourlyrate: parseInt(hourlyrate),
    createdAt:new Date()
  });

  console.log(raw);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("http://localhost:5000/apip/users", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
}

export default {
  create
};
