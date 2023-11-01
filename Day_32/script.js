const express  = require("express");
const app = express();
const path = require("path");
const port = 3000;
app.set("view engine","ejs");
// app.set("view",path.join(_dirname,"/view")); if you want to run file in any path


app.get("/",(req,res) => {
    //render
    res.render("home.ejs");
});


app.listen(port,() => {
    console.log(`listening on port ${port}`);
});