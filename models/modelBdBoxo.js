var mongoose = require('mongoose'),

//User collection
BoxoUsers = new mongoose.Schema({
  dbB_nameUsr:    { type: String },
  dbB_ltNameUsr:     { type: Number },
  dbB_dateBorn :   { type: String },
  dbB_nickname:  { type: Number },
  dbB_password:  { type: Number },
  dbB_cities:    { type: String, enum: ['Bogotá', 'Medellín', 'Cali', 'Barranquila', 'Cartagena'] },
  dbB_locationSaved:  { type: String },
  dbB_typeRol:  { type: Number },
  dbB_email:  { type: String }
});

module.exports = mongoose.model('BoxoUsers',BoxoUsers);

/** Querys:
1) Insert en la colección de usuarios.

db.BoxoUsers.update({},{dbB_nameUsr : 'Andrés', 
                        dbB_ltNameUsr : 'Valenzuela',
  dbB_dateBorn : '1994/01/31',
dbB_nickname : 'andres',
dbB_password : 'andres',
dbB_cities : 'Bogotá',
dbB_locationSaved : '1233432.3432.231',
dbB_typeRol  : 'usuario' },true,false)
{
  "Nombre": "prueba",
  "Apellido": prueba,
  "fecha nacimiento": "1994/01/31",
  "nickname": "prueba",
  "contraseña": "prueba",
  "ciudad": "Medellín",
  "Ubicación": "2321312.43412.2",
  "rol" : "usuarioRegular"
}

*/