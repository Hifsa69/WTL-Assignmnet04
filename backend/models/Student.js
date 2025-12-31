const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, default: "student" }
});

module.exports = mongoose.model("Student", studentSchema);
