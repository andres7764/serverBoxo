var mongoose = require('mongoose');
var BoxoUsers = mongoose.model('BoxoUsers');

//GET - Return all usersBD in the DB (The colection of users)
exports.showAllUsers = function(req, res) {
    BoxoUsers.find(function(err, boxoDb) {
    if(err) { res.send(500, err.message); }
       res.status(200).jsonp(boxoDb);
    });
};

//POST - Insert a new user in the Collection
exports.addNewUser = function(req, res) {  

    var newUser = new BoxoUsers({
        dbB_nameUsr:     	req.body.dbB_nameUsr,
        dbB_ltNameUsr:     	req.body.dbB_ltNameUsr,
        dbB_dateBorn:  		req.body.dbB_dateBorn,
        dbB_nickname:   	req.body.dbB_nickname,
        dbB_password:  		req.body.dbB_password,
        dbB_cities:    		req.body.dbB_citiestitle,
        dbB_locationSaved:  req.body.dbB_locationSaved,
        dbB_typeRol:  		req.body.dbB_typeRol,
        dbB_email:  		req.body.dbB_email

    });
    newUser.save(function(err, newUser) {
        if(err) { return res.status(500).send(err.message); }
	    res.status(200).jsonp(newUser);
    });
};


exports.deleteUser = function(req, res) {  
    	BoxoUsers.findById(req.params.id, function(err, boxoDb) {
        boxoDb.remove(function(err) {
        if(err) return res.status(500).send(err.message);
      	res.status(200).send();
        })
    });
};

/* //GET - Return a unique user in the DB (The colection of users)
exports.getUniqueUser = function(req, res) {  
    BoxoUsers.findById(req.params.id, function(err, showUniqueUser) {
    if(err) return res.send(500. err.message);
	    console.log('GET /boxoDb/' + showUniqueUser);
        res.status(200).jsonp(showUniqueUser);
    });
}; */

/* exports.updateUsers = function(req, res) {  
    BoxoUsers.findById(req.params.id, function(err, boxoDb) {
        tvshow.title   = req.body.petId;
        tvshow.year    = req.body.year;
        tvshow.country = req.body.country;
        tvshow.poster  = req.body.poster;
        tvshow.seasons = req.body.seasons;
        tvshow.genre   = req.body.genre;
        tvshow.summary = req.body.summary;

        tvshow.save(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(tvshow);
        });
    });
};
*/