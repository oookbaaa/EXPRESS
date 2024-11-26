const mongo = require("mongoose");

const Schema = mongo.Schema;

const product = new Schema({
  name: String,
  desc: String,
  prix: Number,
  status: Boolean,
});

module.exports = mongo.model("product", product);