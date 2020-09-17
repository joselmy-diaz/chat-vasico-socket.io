const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
var http = require('http').createServer(app);
//const sesion = require('./sesion');

app.set('port', 2000);

//app.use(sesion());
app.use(cookieParser())
//app.use(morgan('dev'))

var Session = session({
  secret: 'viesai.joselmy',
  resave: false,
  saveUninitialized: false
});

app.use(Session);

const soquet = require('./socket.io')(http,Session);

app.use(express.static('./public'));

app.get('/g1', (req, res) => {
  req.session.user = 'g1'
  res.redirect('/');
});

app.get('/g2', (req, res) => {
  req.session.user = 'g2'
  res.redirect('/')
});

http.listen(app.get('port'), () => {
  console.log('port:',app.get('port'));
});
