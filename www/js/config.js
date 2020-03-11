const dev = "http://51.91.78.134/application/public/index.php/";

const prod = "http://localhost:5000/";
//const prod = "http://51.91.78.134/application/public/index.php/";
const config = process.env.NODE_ENV == "development" ? dev : prod;

export default config;
