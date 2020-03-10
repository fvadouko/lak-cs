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
  formdata.append("file", input.files[0]);

  return fetch(config + "apip/media_objects", {
    method: "POST",
    body: formdata
  })
    .then(response => response.text())
    .then(result => {
      console.log("result");
      console.log(result);

      let url = JSON.parse(result);
      console.log("URL content", url.contentUrl);
      console.log("URL content", url.contentUrl.toString().substr(7));
      console.log("@id content", url["@id"]);
      console.log("@id content", url["@id"].toString().substr(20));

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
}

export default {
  create
};
