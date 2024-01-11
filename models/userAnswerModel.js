const mongoose = require("mongoose");
const userAnswerSchema = new mongoose.Schema({
  selectedOpt1 : {
    type: String,
    required: true
  },
  selectedOpt2 : {
    type: String,
    required: true
  },
  selectedOpt3 : {
    type: String,
    required: true
  },
  selectedOpt4 : {
    type : String,
    required :  true
  },
  selectedOpt5 : {
    type: String,
    required: true
  }
});

const userAnswerModel = mongoose.model("userAnswer", userAnswerSchema);
module.exports ={userAnswerModel};