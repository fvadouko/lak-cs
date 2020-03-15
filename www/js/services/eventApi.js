// import axios from "axios";
// import config from "../config";
// import moment from "moment";
//const config = require('../config');
const moment = require("moment");
const path = require("path");
const database = require("nedb");
const eventsUrl = path.join(__dirname, "/db/events.db");
const usersUrl = path.join(__dirname, "/db/users.db");

let EVENTS = new database({ filename: eventsUrl });
let USERS = new database({ filename: usersUrl });

const create = (
  subject,
  department,
  startTime,
  endTime,
  isAllDay,
  employeeId,
  description,
  repeat,
  timezone
) => {
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
  var d = new Date();
  var n = d.getDay();
  var event = {
    title: subject,
    location: department,
    start: startTime,
    endt: endTime,
    allday: isAllDay,
    user_id: employeeId,
    description: description,
    repeat: repeat,
    pointed: false,
    timezone: timezone,
    week: parseInt(moment().weeks()),
    month: monthsArray[parseInt(new Date().getMonth())],
    year: parseInt(moment().year()),
    day: n
  };

  // var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow"
  // };

  //   fetch(config + "apip/events", requestOptions)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.log("error", error));
  EVENTS.loadDatabase(err => {
    if (err) {
      console.log(`From eventApi.create error in EVENTS.loadDatabase: ${err}`);
    }
  });

  EVENTS.insert(event, err => {
    if (err) {
      console.log(`From eventApi.create error in EVENTS.insert: ${err}`);
    }
  });
};

const update = (
  id,
  subject,
  department,
  startTime,
  endTime,
  isAllDay,
  employeeId,
  description,
  repeat,
  timezone
) => {
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

  var event = {
    title: subject,
    location: department,
    start: startTime,
    endt: endTime,
    allday: isAllDay,
    user_id: employeeId,
    description: description,
    repeat: repeat,
    pointed: false,
    timezone: timezone,
    week: parseInt(moment().weeks()),
    month: monthsArray[parseInt(new Date().getMonth())],
    year: parseInt(moment().year())
  };

  console.log(event);

  EVENTS.loadDatabase(err => {
    if (err) {
      console.log(`From eventApi.update error in EVENTS.loadDatabase: ${err}`);
    }
  });

  EVENTS.update({ _id: id }, { $set: { event } }, {}, err => {
    if (err) {
      console.log(`From eventApi.update error in EVENTS.update: ${err}`);
    }
  });
};

//  Set Events pointed = true when pointed by a user
const setEventPointed = e_id => {
  EVENTS.loadDatabase(err => {
    if (err) {
      console.log(
        `From eventApi.setEventPointed error in EVENTS.loadDatabase: ${err}`
      );
    }
  });

  EVENTS.update({ _id: e_id }, { $set: { pointed: true } }, {}, err => {
    if (err) {
      console.log(
        `From eventApi.setEventPointed error in EVENTS.update: ${err}`
      );
    }
  });
};

//  Return list of Events not pointed by user at a periode
const eventsNotPointed = async (e_year, e_month, e_day, u_id) => {
  EVENTS.loadDatabase(err => {
    if (err) {
      console.log(
        `From eventApi.findEvents error in EVENTS.loadDatabase: ${err}`
      );
    }
  });
  return new Promise((resolve, reject) => {
    EVENTS.find(
      {
        user_id: u_id,
        year: e_year,
        month: e_month,
        day: e_day,
        pointed: false
      },
      (err, events) => {
        if (err) {
          reject(`From eventApi.findEvents error in EVENTS.find: ${err}`);
        } else {
          resolve(events);
        }
      }
    );
  });
};

// async function findEvents() {
//   return axios
//     .get(config + "apip/events")
//     .then(response => {
//       const events = response.data["hydra:member"];

//       console.log("[eventApi] users", events);
//       return events;
//     })
//     .catch(error => {
//       console.log("[eventApi] Error", error);
//     });
// }
const findEvents = async () => {
  EVENTS.loadDatabase(err => {
    if (err) {
      console.log(
        `From eventApi.findEvents error in EVENTS.loadDatabase: ${err}`
      );
    }
  });
  return new Promise((resolve, reject) => {
    EVENTS.find({}, (err, event) => {
      if (err) {
        reject(`From eventApi.findEvents error in EVENTS.find: ${err}`);
      } else {
        resolve(event);
      }
    });
  });
};

const findOne = async search => {
  EVENTS.loadDatabase(err => {
    if (err) {
      console.log(`From eventApi.findOne error in EVENTS.loadDatabase: ${err}`);
    }
  });

  return new Promise((resolve, reject) => {
    EVENTS.findOne({ _id: search }, (err, event) => {
      if (err) {
        reject(`From eventApi.findOne error in EVENTS.findOne: ${err}`);
      } else {
        resolve(event);
      }
    });
  });
};

const deleteOne = search => {
  EVENTS.loadDatabase(err => {
    if (err) {
      console.log(
        `From eventApi.deleteOne error in EVENTS.loadDatabase: ${err}`
      );
    }
  });

  EVENTS.remove({ _id: search }, err => {
    if (err) {
      console.log(`From eventApi.deleteOne error in EVENTS.delete: ${err}`);
    }
  });
};

// async function papi() {
//   let papi = await findEvents();
//   console.log(papi);
// }
// papi();
export default {
  findEvents,
  findOne,
  create,
  update,
  deleteOne,
  eventsNotPointed,
  setEventPointed
};
