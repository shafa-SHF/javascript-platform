const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/vacancies", require("./routes/vacancy.routes"));

app.get("/", (req, res) => {
  res.send("Job Portal API Running");
});

module.exports = app;
