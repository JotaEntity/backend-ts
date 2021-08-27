const express = require("express");
// rest of the code remains same
const app = express();
const PORT = 8000;
app.get("/", (req: any, res: any) =>
  res.send("Programming in TypeScript & deploy in JavaScript")
);
app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    app.settings.env,
    process.env.PORT
  );
});
