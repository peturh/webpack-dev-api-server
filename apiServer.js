const express = require('express');
const serveStatic = require('serve-static');

module.exports = (PORT) =>{
    const app = express();

    app.use(serveStatic(__dirname + "/src"));
    app.listen(PORT);

    app.post('/api/coolrequest', function (req, res) {

        }
    );
    app.post('/api/anothercoolrequest', function (req, res) {

        }
    );
}
