const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(
    "mongodb+srv://imranmohib387:M03362230775@cluster0.9mplh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log("Error in DB connection", err);
    });
};
