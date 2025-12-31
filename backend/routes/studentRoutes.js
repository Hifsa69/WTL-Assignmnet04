const express = require("express");
const Student = require("../models/Student");
const Enrollment = require("../models/Enrollment");
const Course = require("../models/Course");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// View profile
router.get("/profile", auth, async (req, res) => {
  const student = await Student.findById(req.user.id);
  res.json(student);
});

// Enroll course
router.post("/enroll", auth, async (req, res) => {
  await Enrollment.create({
    studentId: req.user.id,
    courseId: req.body.courseId
  });

  res.json({ message: "Course Enrolled" });
});

module.exports = router;
