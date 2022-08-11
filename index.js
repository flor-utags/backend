const express = require("express");
const app = express();

app.get("/", (req, res) => [    
    res.send({ code: 200, message: "Backend"})
]);
app.listen(3000);
