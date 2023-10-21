const express = require("express");
const app = express();
// console.dir(app);
let port = 3000;

// listen if a function which is listen the request port
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
