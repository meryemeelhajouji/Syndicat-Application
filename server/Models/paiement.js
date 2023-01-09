const mongoose = require("mongoose");

const paiement  = new mongoose.Schema(
{

  Date:{
    type: Date,
    required: true
  },
  appartementid:{
    type: mongoose.Schema.Types.ObjectId,
     ref: 'appartements'
    }
}
)
 module.exports= mongoose.model("paiement", paiement);