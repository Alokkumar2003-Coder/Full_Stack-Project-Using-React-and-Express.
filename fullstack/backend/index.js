const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");

connectToMongo();
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// app.get("/", (req, res) => {
//   res.send("Hello Alok!");
// });

// app.get("/api/v1/login", (req, res) => {
//   res.send("Hello Login!");
// });

// app.get("/api/v1/signup", (req, res) => {
//   res.send("Hello Signup!");
// });

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
