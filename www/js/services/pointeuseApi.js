// import config from "../config";
const moment = require('moment');
const path = require ('path');
const database = require('nedb');

const pointeusesUrl = path.join(__dirname,'/db/pointeuses.db');
const eventsUrl = path.join(__dirname,'/db/events.db');
const usersUrl = path.join(__dirname,'/db/users.db');
const eventApi = require('./eventApi');
const userApi = require('./userApi');

let POINTEUSES =  new database({filename:pointeusesUrl});
let USERS =  new database({filename:usersUrl});
let EVENTS =  new database({filename:eventsUrl});


const loadPointeuse = ()=>{
  POINTEUSES.loadDatabase((err)=>{
    if(err){
        return(`From pointeuseApi.create error in POINTEUSES.loadDatabase: ${err}`);
    }      
  });
}

const create = async(password, arrivals, e_id)=>{

  let user = await userApi.findUserByPassword(password);
  let e_jour = arrivals.getDays();

  POINTEUSES.loadDatabase((err)=>{
    if(err){
        console.log(`From pointeuseApi.create error in POINTEUSES.loadDatabase: ${err}`);
    };        
  });

  var pointeuse = {
      arrivals: arrivals,
      departures: null,
      user_id: user._id,
      overtimes:0,
      week: parseInt(moment().weeks()),
      month: monthsArray[parseInt(new Date().getMonth())],
      year: parseInt(moment().year()),
      event_id:e_id
  };

  console.log(pointeuse);

  POINTEUSES.insert(pointeuse,(err)=>{
    if(err){
      console.log(`From pointeuseApi.create error in POINTEUSES.insert: ${err}`);
    }
  });
}

const setDepartures = async(password, departures)=>{

  let monthsArray = [
    "janvier",
    "févier",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
  ];

  let user = await userApi.findUserByPassword(password);
  let pointeuse = await whereDeparturesIsNull(user._id);

  var raw = {
    departures: departures
  };

  POINTEUSES.update({_id:pointeuse._id},{$set:raw},{},(err)=>{

  });

}


const whereDeparturesIsNull = async(u_id)=>{

  loadPointeuse();

  return(
    new Promise((resolve,reject)=>{
      POINTEUSES.findOne({user_id:u_id,departure:null},(err,pointeuse)=>{
        if(err){
          reject(`From pointeuseApi.whereDeparturesIsNull error in POINTEUSES.findOne: ${err}`);
        }else{
          resolve(pointeuse);
        }
      });
    })
  )

}


const pointeusesByUser = async(p_year,p_month,u_id)=>{

  loadPointeuse();

  return(
    new Promise((resolve,reject)=>{
      POINTEUSES.find({year:p_year,month:p_month,user_id:u_id},(err,pointeuses)=>{
        if(err){
          reject(`From pointeuseApi.pointeusesByUser error in POINTEUSES.find`);
        }else{
          resolve(pointeuses);
        }
      });
    })
  )
}


export default {
  create,
  setDepartures,
  pointeusesByUser,
  whereDeparturesIsNull
};
