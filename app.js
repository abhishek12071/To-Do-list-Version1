const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items=["Buy Food","Cook Food","Eat Food"];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    var today = new Date();
    
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var day=today.toLocaleDateString("en-US",options);
    res.render("list", { kindOfDay: day, additems:items});
})

app.post("/",function(req,res){
    var item=req.body.NewItem;
    items.push(item);
    res.redirect("/");
})

app.get("/contact",function(req,res){
    res.render("contact");
})
app.post("/contact",function(req,res){
    res.redirect('/contact');
})
app.listen(3000, function () {
    console.log("Server is running at port 3000");
});