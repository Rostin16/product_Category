const express=require("express");
const db = require("./configs/dataBase");
const bodyParser = require("body-parser");
const app= express();
const port=8080;
// app.set("view engine", "ejs");
app.use('uploads/',express.static(__dirname+'/uploads'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',require("./routers"));

app.listen(port,(err)=> {
    if(!err){
        db();
        console.log("server start at http://localhost:"+port);
    }
    else{
        console.log(err.message);
        
    }
})