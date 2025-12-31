const express = require("express");
const Student = require("../models/Student");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const student = new Student({ name, email, password: hashed });
  await student.save();

  res.json({ message: "User Registered" });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const student = await Student.findOne({ email });
  if (!student) return res.json({ message: "User Not Found" });

  const match = await bcrypt.compare(password, student.password);
  if (!match) return res.json({ message: "Wrong Password" });

  const token = jwt.sign({ id: student._id, role: student.role }, "secret");

  res.json({ token, user: student });
});

module.exports = router;
