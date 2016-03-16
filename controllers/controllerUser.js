var mongoose = require('mongoose');
var BoxoUsers = mongoose.model('boxousers');

//GET - Return all usersBD in the DB (The colection of users)
exports.showAllUsers = function(req, res) {
    BoxoUsers.find(function(err, boxoDb) {
    if(err) { res.send(500, err.message); }
       res.status(200).jsonp(boxoDb);
    });
};

//POST - Insert a new user in the Collection
exports.addNewUser = function(req, res) {  
   // console.log(req.body);
    var newUser = new BoxoUsers({
        dbB_nameUsr:     	req.body.nombre,
        dbB_ltNameUsr:     	req.body.apellido,
        dbB_dateBorn:  		req.body.fechaNacido,
        dbB_nickname:   	req.body.usuario,
        dbB_password:  		req.body.contrasena,
        dbB_cities:  		req.body.ciudad,
        dbB_locationSaved:  req.body.ubicacion,
        dbB_typeRol:  		req.body.rol,
        dbB_email:  		req.body.email

    });
    newUser.save(function(err, newUser) {
        if(err) { return res.status(500).send(err.message); }
	    res.status(200).jsonp(newUser);
    });
};

exports.deleteUser = function(req, res) {  
    	BoxoUsers.findById(req.params.id, function(err, boxoDb) {
        boxoDb.remove(function(err) {
        if(err)
            return res.status(500).send(err.message);
      	res.status(200).send();
        })
    });
};

//GET - Return a TVShow with specified ID
exports.getUniqueUser = function(req, res) {
    console.log(req.params.id);
    BoxoUsers.findById(req.params.id, function(err, Boxo) {
    if(err) return res.send(500, err.message);

    console.log('GET /tvshow/' + req.params.id);
        res.status(200).jsonp(Boxo);
    });
};

/*
    exports.updateUsers = function(req, res) {  
        BoxoUsers.findById(req.params.id, function(err, boxoDb) {

        boxoDb.dbB_nameUsr:        req.body.dbB_nameUsr,
        boxoDb.dbB_ltNameUsr:      req.body.dbB_ltNameUsr,
        boxoDb.dbB_dateBorn:       req.body.dbB_dateBorn,
        boxoDb.dbB_nickname:       req.body.dbB_nickname,
        boxoDb.dbB_password:       req.body.dbB_password,
        boxoDb.dbB_cities:         req.body.dbB_citiestitle,
        boxoDb.dbB_locationSaved:  req.body.dbB_locationSaved,
        boxoDb.dbB_typeRol:        req.body.dbB_typeRol,
        boxoDb.dbB_email:          req.body.dbB_email

        boxoDb.save(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(boxoDb);
        });
    });
};

*/