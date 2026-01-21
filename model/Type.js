const mongoose = require("mongoose");

const TypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
  },
  { timestamps: true },
);

TypeSchema.statics.alreadyExist = function (name) {
  return this.findOne({ name });
};

module.exports = mongoose.model("Type", TypeSchema);
