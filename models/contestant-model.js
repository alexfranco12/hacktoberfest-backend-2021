const mongoose = require("../db/connection");

const ContestantSchema = new mongoose.Schema(
  {
    city: {type: String},
    costumeImgUrl: {type: String},
    costumeTitle: {type: String},
    country: {type: String},
    name: {type: String},
    votes: {type: Number},
  },
  { timestamps: true }
);

// Ensure virtual fields are serialised.
ContestantSchema.set('toJSON', {
  virtuals: true
});

const Contestant = mongoose.model("Contestant", ContestantSchema);

module.exports = Contestant;
