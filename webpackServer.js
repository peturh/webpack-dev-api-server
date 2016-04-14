//require webpack, the config and webpack-dev-server

const webpack = require("webpack");
const config = require("./webpack.config");
const WebpackDevServer = require("webpack-dev-server");

//to be able to declare what ports we run we need PORT as in-parameter

// (PORT) => basically translates to function(PORT) for you people who have been lazy enough to not keep up with ECMAScript 6.
module.exports = (PORT) => {
    //initiate the webpack-dev-server, and proxy all the requests to the api server
    const server = new WebpackDevServer(webpack(config), {
        proxy: {
            "*": `http://localhost:${PORT - 1}`
        }
    });
    // run the webpack server and listen the PORT
    server.listen(PORT, 'localhost');
}