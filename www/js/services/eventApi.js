import config from "../config";
const moment = require("moment");

const path = require("path");
const database = require("nedb");
const eventsUrl = path.join(__dirname, "/db/events.db");
const usersUrl = path.join(__dirname, "/db/users.db");
// var Datastore = require("nedb"),
//   db = new Datastore({ filename: eventsUrl, autoload: true });
let EVENTS = new database({ filename: eventsUrl });
let USERS = new database({ filename: usersUrl });

function create(
  subject,
  department,
  startTime,
  endTime,
  isAllDay,
  employeeId,
  description,
  repeat,
  timezone
) {
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
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  var event = {
    title: subject,
    location: department,
    start: startTime,
    endt: endTime,
    allday: isAllDay,
    user: employeeId,
    description: description,
    repeat: repeat,
    pointed: false,
    timezone: timezone,
    week: parseInt(moment().weeks()),
    month: monthsArray[parseInt(new Date().getMonth())],
    year: parseInt(moment().year())
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

  return new Promise((resolve, reject) => {
    EVENTS.find({}, (err, doc) => {
      if (err) reject(err);
      resolve(doc);
    });
  });
  // EVENTS.insert(event, err => {
  //   if (err) {
  //     console.log(`From eventApi.create error in EVENTS.insert: ${err}`);
  //   }
  // });
}

function update(
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
) {
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
    user: employeeId,
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

  EVENTS.update({ _id: id }, event, {}, err => {
    if (err) {
      console.log(`From eventApi.update error in EVENTS.update: ${err}`);
    }
  });
}

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
async function findEvents() {
  // EVENTS.loadDatabase(err => {
  //   if (err) {
  //     console.log(
  //       `From eventApi.findEvents error in EVENTS.loadDatabase: ${err}`
  //     );
  //   }
  // });
  return new Promise((resolve, reject) => {
    config.loadDatabase();
    config.insert([{ a: 5 }, { a: 42 }], function(err, newDocs) {
      config.find({}, (err, doc) => {
        if (err) reject(err);
        console.log("eventApi, data Line 169", doc);
        resolve(doc);
      });
    });
  });
}
// async function findEvents() {
//   return getData()
//     .then(docs => {
//       return docs;
//     }) // here you will get it
//     .catch(err => console.error(err));

//   // EVENTS.find({},(err,events)=>{
//   //     const data = (err)?`From eventApi.findEvents error in EVENTS.find: ${err}`:events;
//   //     return data;
//   // });
// }

//  Find Events not pointed by user
function eventsNotPointed(e_id, e_year, e_month, e_week) {
  EVENTS.loadDatabase(err => {
    if (err) {
      console.log(
        `From eventApi.findEvents error in EVENTS.loadDatabase: ${err}`
      );
    }
  });

  EVENTS.find(
    { _id: e_id, year: e_year, month: e_month, week: e_week, pointed: false },
    (err, events) => {
      const data = err
        ? `From eventApi.eventsNotPointed error in EVENTS.find: ${err}`
        : events;
      return data;
    }
  );
}

//  Set Events pointed
function setEventPointed(e_id) {
  EVENTS.loadDatabase(err => {
    if (err) {
      console.log(
        `From eventApi.setEventPointed error in EVENTS.loadDatabase: ${err}`
      );
    }
  });

  EVENTS.update({ _id: e_id }, { pointed: true }, {}, err => {
    if (err) {
      console.log(
        `From eventApi.setEventPointed error in EVENTS.update: ${err}`
      );
    }
  });
}

function findOne(search) {
  EVENTS.loadDatabase(err => {
    if (err) {
      console.log(`From eventApi.findOne error in EVENTS.loadDatabase: ${err}`);
    }
  });

  EVENTS.findOne({ _id: search }, (err, event) => {
    const data = err
      ? `From eventApi.findOne error in EVENTS.find: ${err}`
      : event;
    return data;
  });
}

function deleteOne(search) {
  EVENTS.loadDatabase(err => {
    if (err) {
      console.log(
        `From eventApi.deleteOne error in EVENTS.loadDatabase: ${err}`
      );
    }
  });

  EVENTS.delete({ _id: search }, err => {
    if (err) {
      console.log(`From eventApi.deleteOne error in EVENTS.delete: ${err}`);
    }
  });
}

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
