import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [user, setUser] = useState({});

  const getProfile = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get("http://localhost:5000/api/student/profile", {
      headers: { Authorization: token }
    });

    setUser(res.data);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>Welcome, {user.name}</h3>
        <p>Email: {user.email}</p>

        <a href="/courses" className="btn btn-success mt-3">View Courses</a>
      </div>
    </>
  );
}
