const express = require("express");
const app = express();
// console.dir(app);
let port = 3000;

// listen if a function which is listen the request port
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
// app.use((req, res) => {
//     //console.log(req);
//     console.log("Handling the respones");

//     // In send function we send html(tags), string, code
//     // res.send("This the first response");
//     //console.log(req);
//     let code = "<h1>Hello, Aman</h1>";
//     res.send(code);

// });

// app.get("/apple",(req,res) =>{
//     res.send({
//         name: "apple",
//         color: "red",
//     });
// });

// app.get("*",(req,res) => {
//     res.send("this path is not exit")
// });

app.get("username/:id",(req, res) => {
    let {username, id} = req.params;
    let htmlStr = '<h1>Welcome to the page of @${username}!</h1>';
    res.send(htmlStr);
});
app.get("/search", (req,res ) => {
    console.log(req.query);
    res.send("no result");
});
