/**
* WEB322 - Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic
Policy.
* No part of this assignment has been copied manually or electronically from any other
source
* (including web sites and friends) or distributed to other students.
* I understand that if caught doing so, I will receive zero on this assignment and
possible
* fail the entire course.
*
* Name:SHUBH JIGNESHBHAI JANI
* Student ID: 153660212
* Date: 19th May 2023
* Cyclic Web App URL: https://difficult-garters-clam.cyclic.app/
* GitHub Repository URL:https://github.com/sjani5/Web322/
*
*/


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("SHUBH JIGNESHBHAI JANI - 153660212");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);