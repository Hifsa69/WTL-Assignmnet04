import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "../components/CourseCard";
import Navbar from "../components/Navbar";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  const loadCourses = async () => {
    const res = await axios.get("http://localhost:5000/api/admin/courses");
    setCourses(res.data);
  };

  const enrollCourse = async (id) => {
    const token = localStorage.getItem("token");
    await axios.post(
      "http://localhost:5000/api/student/enroll",
      { courseId: id },
      { headers: { Authorization: token } }
    );
    alert("Enrolled!");
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>Available Courses</h3>

        <div className="row mt-3">
          {courses.map((c) => (
            <div className="col-md-4 mt-3" key={c._id}>
              <CourseCard course={c} enroll={enrollCourse} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
