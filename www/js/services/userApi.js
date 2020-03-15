//import config from "../config";
const path = require ('path');
const database = require('nedb');

const userUrl = path.join(__dirname,'/db/users.db');
let USERS =  new database({filename:userUrl});


const loadUser = ()=>{
  USERS.loadDatabase((err)=>{
    if(err){
        return(`From usertApi.create error in USERS.loadDatabase: ${err}`);
    };       
  });
}

const create = (
  firstname,
  lastname,
  designation,
  picture,
  password,
  hourlyrate
)=>{

  var formdata = new FormData();
  const input = document.querySelector('input[type="file"]');
  //console.log("Mon image ici ",input.files[0])

  // USERS.loadDatabase((err)=>{
  //     if(err){
  //         console.log(`From usertApi.create error in USERS.loadDatabase: ${err}`);
  //     };       
  // });
  loadUser();

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
    
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    var raw = {
      firstname: firstname,
      lastname: lastname,
      designation: designation,
      passwords: password,
      hourlyrate: parseInt(hourlyrate),
      createdAt: new Date()
    };

    USERS.insert(raw,(err,doc)=>{
      if(err){
        console.log(`From usertApi.create error in USERS.insert: ${err}`);
      }
    })
    // var requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow"
    // };
    /**
     * Enregistrement d'un utilisateur sans image
     */

    // return fetch(config + "apip/users", requestOptions)
    //   .then(response => response.text())
    //   .then(result => {
    //     console.log(result);
    //     return result;
    //   })
    //   .catch(error => console.log("error", error));
  }
}

const findUsers = async()=>{

  USERS.loadDatabase((err)=>{
      if(err){
          console.log(`From userApi.findUsers error in USERS.loadDatabase: ${err}`);
      };       
  });

  return(
    new Promise((resolve,reject)=>{
      USERS.find({},(err,users)=>{
        if(err){
          reject(`From userApi.findUsers error in USERS.find: ${err}`)
        }else{
          resolve(users);
        }
      });
    })
  )
}

const findOne = async(search)=>{

  USERS.loadDatabase((err)=>{
      if(err){
          console.log(`From userApi.findOne error in USERS.loadDatabase: ${err}`);
      };       
  });

  return(
    new Promise((resolve,reject)=>{
      USERS.findOne({_id:search},(err,user)=>{
        if(err){
          reject(`From userApi.findOne error in USERS.findOne: ${err}`);
        }else{
          resolve(user);
        }
      });
    })
  )
}


const findUserByPassword = async(search)=>{

  USERS.loadDatabase((err)=>{
      if(err){
          console.log(`From userApi.findUserByPassword error in USERS.loadDatabase: ${err}`);
      };       
  });

  return(
    new Promise((resolve,reject)=>{
      USERS.findOne({passwords:search},(err,user)=>{
        if(err){
          reject(`From userApi.findOne error in USERS.findOne: ${err}`);
        }else{
          resolve(user);
        }
      });
    })
  )
}


export default {
  create,
  findOne,
  findUserByPassword,
  findUsers
};
