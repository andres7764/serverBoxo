var express = require('express');
   app = express();
   bodyParser  = require("body-parser");
   methodOverride = require("method-override");
   http = require("http");
   //cors = require('cors');
   mongoose = require('mongoose');

  // mongoose.connect('mongodb://104.155.107.128:80/mydb', function(err,res){ 
  mongoose.connect('mongodb://localhost/boxoApp', function(err, res) {
    if(err) console.log("error"+ err);
  });

    //app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));  
    app.use(bodyParser.json());
    app.use(methodOverride());

    //Include the models and controllers of the app
    var models = require('./models/modelBdBoxo');
    var controllerUser = require('./controllers/controllerUser');

   //get Routes principal 
    app.get('/', function(req,res) {
      res.send("wellcome");
    })

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
app.listen(3000);
console.log("Running server");  