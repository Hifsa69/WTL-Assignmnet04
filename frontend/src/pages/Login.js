import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/login", form);

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      nav("/dashboard");
    } else {
      alert("Invalid Login!");
    }
  };

  return (
    <div className="container mt-4">
      <form className="shadow p-4 rounded" onSubmit={submit}>
        <h3>Student Login</h3>

        <input className="form-control mt-3"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input className="form-control mt-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn btn-primary w-100 mt-3">Login</button>

        <p className="mt-3">
          No account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}
