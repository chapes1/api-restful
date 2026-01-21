const mongoose = require('mongoose');

const RegionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
}, { timestamps: true });

RegionSchema.statics.alreadyExist = function(name) {
  return this.findOne({ name });
}

module.exports = mongoose.model('Region', RegionSchema);