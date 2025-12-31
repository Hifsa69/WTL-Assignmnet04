const express = require("express");
const Student = require("../models/Student");
const Course = require("../models/Course");

const router = express.Router();

// Create course
router.post("/course", async (req, res) => {
  const course = new Course(req.body);
  await course.save();

  res.json({ message: "Course Added" });
});

// Get all students
router.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

module.exports = router;
