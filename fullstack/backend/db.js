const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/my_db";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, {})
    .then(() => {
      console.log("Connected to Mongo Successfully!");
    })
    .catch((error) => {
      console.error("Error connecting to Mongo:", error.message);
    });
};

module.exports = connectToMongo;
