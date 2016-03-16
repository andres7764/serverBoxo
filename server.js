var express = require('express');
<<<<<<< HEAD
   app = express();
   bodyParser  = require("body-parser");
   methodOverride = require("method-override");
   http = require("http");
   //cors = require('cors');
   mongoose = require('mongoose');
=======
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
var argv = require('optimist').argv;
    http = require("http");
var	cors = require('cors');
var app = express();
>>>>>>> origin/master

  // mongoose.connect('mongodb://104.155.107.128:80/mydb', function(err,res){ 
  mongoose.connect('mongodb://localhost/boxoApp', function(err, res) {
    if(err) console.log("error"+ err);
  });

    //app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));  
<<<<<<< HEAD
    app.use(bodyParser.json());
    app.use(methodOverride());

    //Include the models and controllers of the app
    var models = require('./models/modelBdBoxo');
    var controllerUser = require('./controllers/controllerUser');

   //get Routes principal 
    app.get('/', function(req,res) {
      res.send("wellcome");
    })
=======
	app.use(bodyParser.json());
	app.use(methodOverride());
var connect = mongoose.connect('mongodb://' + argv.be_ip + ':80/boxoApp');
// mongoose.connect('mongodb://104.155.107.128:80/mydb', function(err,res){ 
    console.log(connect); 
     
var users = connect.model('BoxoUsers');
>>>>>>> origin/master

  var boxoRoutes = express.Router();

    //Create routes by server rest API
    boxoRoutes.route('/actionUsers')
    .get(controllerUser.showAllUsers)
    .post(controllerUser.addNewUser)
   // .put(controllerUser.updateUser); // Edit information

    boxoRoutes.route('/getUniqueUser/:id')
    .get(controllerUser.getUniqueUser)

    boxoRoutes.route('/addUser')
    .post(controllerUser.addNewUser)
    app.use('/boxoRest', boxoRoutes);

//Declaración de módelos
//var users = mongoose.model('BoxoUsers');
<<<<<<< HEAD
app.listen(3000);
console.log("Running server");  
=======
app.listen(3000, argv.fe_ip);
console.log("Running server");
>>>>>>> origin/master
