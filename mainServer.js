
//require the both servers
const appServer = require("./webpack-server");
const apiServer = require("./apiserver");
//get port from environment variables
const PORT = process.env.PORT || 8080;
//check if you're in production
const PROD = process.env.NODE_ENV === "prod";

if (PROD) {
    apiServer(PORT);
} else {
    apiServer(PORT - 1);
    appServer(PORT);
}