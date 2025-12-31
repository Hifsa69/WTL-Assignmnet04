import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/register", form);
    alert("Account Created!");
  };

  return (
    <div className="container mt-4">
      <form className="shadow p-4 rounded" onSubmit={submit}>
        <h3>Student Register</h3>

        <input className="form-control mt-3"
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input className="form-control mt-3"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input className="form-control mt-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn btn-primary w-100 mt-3">Register</button>

        <p className="mt-3">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}
