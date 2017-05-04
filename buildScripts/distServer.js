import express from 'express';
import path from 'path';
import open from 'open';
//import compression from 'compression';

var port = 3000;
var app = express();

//app.use(compression());
app.use(express.static('dist'));

app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName": "Arne", "lastName": "Karlbom", "email": "a@karlbom.se"},
    {"id": 2, "firstName": "Lisa", "lastName": "Karlbom", "email": "l@karlbom.se"},
    {"id": 3, "firstName": "Bernt", "lastName": "Que", "email": "b@karlbom.se"}
  ]);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err); // eslint-disable-line no-console
  } else {
    open('http://localhost:' + port);
  }
});
