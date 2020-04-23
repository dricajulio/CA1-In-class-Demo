var logger = require("morgan"),
cors = require("cors"),
http = require("http"),
express = require("express"),
bodyParser = require("body-parser"),
mongoose = require('mongoose');
<<<<<<< HEAD

var app = express();
var port = 3000;
var userCtrl = require('./user-controller');

=======
 
 
var app = express();
var port = process.env.PORT || 3000;
var userCtrl = require('./user-controller');

app.get('/users', userCtrl.createUser);

>>>>>>> 0107abe24e326fa70feffef79fee69d4992ab84e
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(require('./routes'));

app.listen(port, function(err){
    console.log("Listening on Port: " + port)
});

<<<<<<< HEAD
mongoose.connect('mongodb://localhost/test');
=======
mongoose.connect('mongodb:// locallhost/test');
>>>>>>> 0107abe24e326fa70feffef79fee69d4992ab84e
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});