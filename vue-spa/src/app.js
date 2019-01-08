import Vue from "vue";

import db from './components/firebaseInit.js';
let ref = db.ref("Franz Kafka");

ref.on("value", function(snapshot){
  console.log("Test conexiune baza de date: " + snapshot.val()[0].author);
});

let app = new Vue({
  data: {
    hello: "Hello World!",
    numbers: ["one", "two", "three"]
  }
});

export { app };
