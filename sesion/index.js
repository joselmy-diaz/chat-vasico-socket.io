const cookie = require('cookie');
var bcrypt = require('bcryptjs');

var salt = bcrypt.genSaltSync(10); 
var hash = bcrypt.hashSync("joselmy",salt); 


bcrypt.compare("joselmy", hash, function(err, res) {
  console.log(res);
});

console.log(hash);

class user{
  constructor (nombre,apeyido,yabas){
    this.nombre = nombre;
    this.apeyido = apeyido;
    this.yabas = yabas
  }

  creerYabe (dis) {
    return this.yabas
  }
}

var yo = new user('joselmy','diaz',['uuuuuu'])

function hola () {
  return function sesion (req, res, exit) {
    //res.cookie('id','');
    //var cookies = cookie.parse(req.headers.cookie);
    console.log();
    exit();
  }
};

module.exports = hola;
