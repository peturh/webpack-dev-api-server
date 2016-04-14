//require express and serve-static

const express = require('express');
const serveStatic = require('serve-static');

//to be able to declare what ports we run we need PORT as in-parameter

// (PORT) => basically translates to function(PORT) for you people who have been lazy enough to not keep up with ECMAScript 6.
module.exports = (PORT) =>{

    //initate express
    const app = express();
    //serve some static content, in my case /src (this is however not included in this project
    app.use(serveStatic(__dirname + "/src"));
    //listen to PORT
    app.listen(PORT);


    //get some cool api routes going here (or preferably in another file, but it's here for brevity
    app.post('/api/coolrequest', function (req, res) {
        //of course the routes need to do some shit
        }
    );
    app.post('/api/anothercoolrequest', function (req, res) {

        }
    );
};
