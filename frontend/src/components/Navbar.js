import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <Link className="navbar-brand" to="/dashboard">
        Student Dashboard
      </Link>

      <div className="ms-auto">
        <Link to="/courses" className="btn btn-light me-2">Courses</Link>
        <Link to="/" className="btn btn-danger">Logout</Link>
      </div>
    </nav>
  );
}
