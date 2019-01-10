var express = require("express")
var cors = require ("cors"); //necesar pentru acceptarea cererilor cross origin. Detalii la: https://www.npmjs.com/package/cors
var app = express()
var path = require("path")

app.use(express.static("public"))
app.use(cors())

//Initialize the database
var admin = require('firebase-admin'); // utilizarea serviciului de baza de date cu privilegii de administrator
var serviceAccount = require('./firebase_auth/tic-app-df920-firebase-adminsdk-6g2g9-4b62e08b42.json'); //calea catre fisierul de configurare pe care il descarcati din consola Firebase: https://console.firebase.google.com/project/tic-ebusiness/settings/serviceaccounts/adminsdk unde tic-ebusiness tine loc de proiectul vostru

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://tic-app-df920.firebaseio.com'//URLul proiectului din Firebase
});

var db = admin.database();

//Routes
app.get("/", function(req, res){
	res.send("Response from node.js server --> root");
});

//404 route
app.get("*", function(req, res) {
	res.send("ai solicitat o pagina inexistenta"); //tratarea rutelor care nu sunt predefinite cu un raspuns standard
})
//============================

//Server start
app.listen(5000, function(){
	console.log('server on');
});