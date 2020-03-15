//const dev = "http://51.91.78.134/application/public/index.php/";

//const prod = "http://localhost:5000/";
//const prod = "http://51.91.78.134/application/public/index.php/";

const path = require("path");
const eventsUrl = path.join(__dirname, "/db/events.db");
var Datastore = require("nedb");
console.log("config, data Line 9", eventsUrl);
const config = new Datastore({ filename: eventsUrl });
config.persistence.compactDatafile();
//const config = process.env.NODE_ENV == "development" ? dev : prod;

export default config;
