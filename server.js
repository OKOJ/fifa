var express = require("express");

var PORT = process.env.PORT || 8080;

var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphdb = require("express-handlebars");

var app = express();
app.use(express.static("/public"));

app.use(bodyParser.urlencoded({
    extended:false
})); 

app.use(methodOverride("_method"));
app.engine("handlebars", exphdb({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/fifa_controller.js");

app.use(routes);



app.listen(PORT, function(){

    console.log("server listening on: http://localhost:" + PORT);
});