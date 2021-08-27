"use strict";
const express = require("express");
// rest of the code remains same
const app = express();
const PORT = 8000;
app.get("/", (req, res) => res.send("Programming in TypeScript & deploy in JavaScript"));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
