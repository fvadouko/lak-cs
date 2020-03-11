import config from "../config";

function create(
  firstname,
  lastname,
  designation,
  picture,
  password,
  hourlyrate
) {
  var formdata = new FormData();
  const input = document.querySelector('input[type="file"]');
  console.log("Mon image ici ",input.files[0])
  if (input.files[0] !== null && input.files[0] !== undefined){

  formdata.append("file", input.files[0]);

  /**
   * Enregistrement de l'image avant les informations de l'utilisateur
   */
  return fetch(config + "apip/media_objects", {
    method: "POST",
    body: formdata
  })
    .then(response => response.text())
    .then(result => {
      
      let url = JSON.parse(result);
      
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        designation: designation,
        picture: url.contentUrl.toString().substr(7),
        image: "/apip/media_objects/" + url["@id"].toString().substr(20),
        passwords: password,
        hourlyrate: parseInt(hourlyrate),
        createdAt: new Date()
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      return fetch(config + "apip/users", requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          return result;
        })
        .catch(error => console.log("error", error));
    })
    .catch(error => {
      console.log("error");
      console.log("error", error);
    });
  }else{
    
      
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      designation: designation,
      passwords: password,
      hourlyrate: parseInt(hourlyrate),
      createdAt: new Date()
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
/**
   * Enregistrement d'un utilisateur sans image
   */
    return fetch(config + "apip/users", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        return result;
      })
      .catch(error => console.log("error", error));
  }
}

export default {
  create
};
