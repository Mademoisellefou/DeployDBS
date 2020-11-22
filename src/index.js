const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://user_31:cReHLicneeq5AHOb@cluster0.nmmm0.mongodb.net/user?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((db) => {
    console.log("listen db");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("public", path.join(__dirname, "public"));
app.use(express.static("public"));
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;
app.listen(port, host, () => {
  console.log("Server is Working");
});

app.get("/", (req, res) => {
  res.send("hello");
});
