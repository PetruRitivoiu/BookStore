let express = require("express");
let cors = require("cors");
let app = express();
let bodyParser = require("body-parser");
let path = require("path");

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

//Initialize the database
var admin = require("firebase-admin");
var serviceAccount = require("./firebase_auth/tic-app-df920-firebase-adminsdk-6g2g9-4b62e08b42.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tic-app-df920.firebaseio.com"
});

var db = admin.database();

//Routes
app.get("/", function(req, res) {
  res.send("Response from node.js server --> root");
});

//Create
app.post("/book", function(req, res) {
  let ref = db.ref(req.body.author);

  ref.once("value").then(function(snapshot) {
    let dbEntry = ref.push(req.body);
    console.log(dbEntry.key);
    res.send(dbEntry.key);
  });
});

//Update
app.put("/book/edit", function(req, res) {
  //edit book
  res.send("Book edited " + req.body.title);
});

//Delete
app.put("/book/delete", function(req, res) {
  let ref = db.ref(req.body.author);

  ref
    .orderByChild("title")
    .equalTo(req.body.title)
    .once('value')
    .then(function (snapshot) {
      snapshot.forEach(function(childSnapshot) {
        ref.child(childSnapshot.key).remove();
      });
    });

    res.send(req.body.title)
});

//404 route
app.get("*", function(req, res) {
  res.send("ai solicitat o pagina inexistenta");
});

//============================

//Server start
app.listen(5000, function() {
  console.log("server on");
});
