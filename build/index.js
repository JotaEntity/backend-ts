"use strict";
const express = require("express");
// rest of the code remains same
const app = express();
const PORT = 21168;
app.get("/", (req, res) => res.send("Programming in TypeScript & deploy in JavaScript"));
app.listen(PORT, function () {
    console.log(PORT);
});
