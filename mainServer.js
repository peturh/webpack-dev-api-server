var appServer = require("./webpack-server");
var apiServer = require("./apiserver");

const PORT = process.env.PORT || 8080;
const PROD = process.env.NODE_ENV === "production";

if (PROD) {
    apiServer(PORT);
} else {
    apiServer(PORT - 1);
    appServer(PORT);
}