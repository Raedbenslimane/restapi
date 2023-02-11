const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  age: Number,
  password: { type: String, required: true },
});
module.exports = mongoose.model("user", UserSchema);
