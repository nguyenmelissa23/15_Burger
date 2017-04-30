const express = require("express");
const bodyParser = require("body-parser");
const methodOveride = require("method-override");

const PORT = 3000;

const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOveride("_method"));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");

app.use(express.static("./public"));

app.use("/", routes);


app.listen(PORT, function(err){
    if (err) throw err;
    console.log("Listening: http://localhost:" + PORT);
});