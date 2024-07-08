const mongoose = require("mongoose");

const jerseysSchema = mongoose.Schema({
  

  _id: mongoose.Types.ObjectId,
  name: String,
  version: String,
  des:String,
  count:{
    xs:Number,
    s:Number,
    m:Number,
    l:Number,
    xl:Number

  },
  price:Number,
  discount:Number,
});

module.exports = jerseysSchema;
