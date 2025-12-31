import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPanel() {
  const [students, setStudents] = useState([]);
  const [course, setCourse] = useState({ name: "", description: "" });

  const load = async () => {
    const res = await axios.get("http://localhost:5000/api/admin/students");
    setStudents(res.data);
  };

  const addCourse = async () => {
    await axios.post("http://localhost:5000/api/admin/course", course);
    alert("Course Added");
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="container mt-4">
      <h3>Admin Panel</h3>

      <h5 className="mt-4">Add New Course</h5>
      <input className="form-control mt-2"
        placeholder="Course Name"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input className="form-control mt-2"
        placeholder="Course Description"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <button className="btn btn-primary mt-2" onClick={addCourse}>Add</button>

      <h5 className="mt-5">All Students</h5>
      <ul className="list-group">
        {students.map((s) => (
          <li className="list-group-item" key={s._id}>
            {s.name} - {s.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
