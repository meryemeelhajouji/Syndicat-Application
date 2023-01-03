const mongoose = require("mongoose");

const Client = new mongoose.Schema({
  name: {
    type:String,
    require:true
  },
  cin:{
    type:String,
    require:true,
    unique:true
  },

});
module.exports = mongoose.model("client", Client);