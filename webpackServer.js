const webpack = require("webpack");
const config = require("./webpack.config");
const WebpackDevServer = require("webpack-dev-server");

module.exports = (PORT) => {

    const server = new WebpackDevServer(webpack(config), {
        proxy: {
            "*": `http://localhost:${PORT - 1}`
        }
    });
    server.listen(PORT, 'localhost');
}