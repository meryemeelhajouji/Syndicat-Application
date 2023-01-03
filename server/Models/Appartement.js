const mongoose = require("mongoose");

const Appartement = new mongoose.Schema(
  {
    Adresse: {
      type: String,
      require: true,
    },
    numero: {
      type: Number,
      unique: true,
      require: true,
    },
    loue: {
      type: Boolean,
    },
    surface: {
      type: String,
    },
    prix: {
      type: Number,
    },
    client_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "clients",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("appartement", Appartement);