const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database started!");
    })
    .catch((err) => {
      console.log("Error database", err);
    });
};
