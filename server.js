var mongoose = require('mongoose');
var express = require('express');
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");
    http = require("http");
var	cors = require('cors');
var app = express();

//Include the models and controllers of the app
var models = require('./models/modelBdBoxo')(app, mongoose);
var controllerUser = require('./controllers/controllerUser');

	app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));  
	app.use(bodyParser.json());
	app.use(methodOverride());

var connect = mongoose.connect('mongodb://104.155.107.128:80/mydb', function(err,res){ 
       console.log(err,res); 
      if(res) { 
        console.log('Connected!!!' );  
      } else {
     } 
   });

var users = connect.model('BoxoUsers');

  app.get('/begin', function(req, res) {
    res.send("here");
  });
  //app.use(router);
  var boxoRoutes = express.Router();

//Create routes by server rest API
  boxoRoutes.route('/actionUsers')
    .get(controllerUser.showAllUsers)   //Obtain data
    .post(controllerUser.addNewUser);  //Set users
 //   .put(controllerUser.updateUser); // Edit information
//    .delete(); // Delete data from db
/*  boxoRoutes.route('/getUniqueUser/:id')
    .get(controllerUser.getUniqueUser)
*/
  boxoRoutes.route('/addUser')
//  .post(controllerUser.addNewUser);
  app.use('/boxoRest', boxoRoutes);

//Declaración de módelos
//var users = mongoose.model('BoxoUsers');
app.listen(3000, function(){
	console.log("Running server");
})