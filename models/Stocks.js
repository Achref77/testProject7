const mongoose = require("mongoose");
const schema = mongoose.Schema;

const StockSchema = new schema({
  stockInitial : { type: String },
  stockMinimum: { type: String },
  stockSecurite: { type: String }
});

module.exports = Stock = mongoose.model("stock", StockSchema );