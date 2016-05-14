var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();
var port = 8000;

//-----------Importing Controllers-----------//
var ListingCtrl = require('./server_assets/Controllers/ListingCtrl');
var PurchaseCtrl = require('./server_assets/Controllers/PurchaseCtrl');
var ClientCtrl = require('./server_assets/Controllers/ClientCtrl');
var UserCtrl = require('./server_assets/Controllers/UserCtrl');
var User = require('./server_assets/Models/User')
var TaskCtrl = require('./server_assets/Controllers/TaskCtrl')

//----------Fluff------------//
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname+'/dist'));
app.listen(port, function () {
  console.log("Listening on port: " + port);
});

//-----------Connection to database-----------//
mongoose.connect('mongodb://localhost/simplre')
mongoose.connection.once('connected', function() {
  console.log('connected to db');
})



//-----------Client Endpoints-----------//
app.get('/api/client', ClientCtrl.read);
app.get('/api/client/:id', ClientCtrl.readOne);
app.post('/api/client', ClientCtrl.create);
app.put('/api/client/:id', ClientCtrl.update);
app.delete('/api/client/:id', ClientCtrl.delete);

//-----------Listing Contract Endpoints-----------//
app.get('/api/listing', ListingCtrl.read);
app.get('/api/listing/:id', ListingCtrl.readOne);
app.post('/api/listing', ListingCtrl.create);
app.put('/api/listing/:id', ListingCtrl.update);
app.delete('/api/listing', ListingCtrl.delete);

//-----------Purchase Contract Endpoints-----------//
app.get('/api/purchase', PurchaseCtrl.read);
app.get('/api/purchase/:id', PurchaseCtrl.readOne);
app.post('/api/purchase', PurchaseCtrl.create);
app.put('/api/purchase/:id', PurchaseCtrl.update);
app.delete('/api/purchase', PurchaseCtrl.delete);

//-----------User Endpoints-----------//
app.get('/api/user', UserCtrl.read);
app.get('/api/user/:id', UserCtrl.readOne);
// app.post('/api/user', UserCtrl.create);
app.put('/api/user/:id', UserCtrl.update);
app.delete('/api/user', UserCtrl.delete);

//-----------Task Endpoints-----------//
app.get('/api/task', TaskCtrl.read);
app.get('/api/task/:id', TaskCtrl.readOne);
app.post('/api/task', TaskCtrl.create);
app.put('/api/task/:id', TaskCtrl.update);
app.delete('/api/task', TaskCtrl.delete);
