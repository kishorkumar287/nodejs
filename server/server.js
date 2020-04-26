const express = require("express");
const app = express();
const root = require("./routes/root");
const api = require("./routes/api");

console.log(typeof express);
console.log(typeof app);

app.use("/api", api);
app.use("/", root);

app.listen(3100, () => {
  console.log("API server started in port 3100!");
});
