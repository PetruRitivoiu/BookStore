var express = require("express")
var app = express();

app.use(express.static("views"));

app.get("/:id", function(req,res) {
    res.render("home.ejs", {variabila_ejs : req.params.id});
})


app.get("*", function(req,res){
    res.send("404 scuze baieti");
})

app.listen(3000, function(){
    console.log("am pornit serverul");
});