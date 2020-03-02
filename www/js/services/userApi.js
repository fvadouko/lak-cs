function create(firstname, lastname, designation, picture) {
  var formdata = new FormData();

  const input = document.querySelector('input[type="file"]');
  formdata.append("file", input.files[0]);

  return fetch("http://localhost:5000/apip/media_objects", {
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
        createdAt: "2020-03-02T12:52:43.888Z"
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      return fetch("http://localhost:5000/apip/users", requestOptions)
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
