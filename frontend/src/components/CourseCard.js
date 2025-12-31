export default function CourseCard({ course, enroll }) {
  return (
    <div className="card p-3 shadow-sm">
      <h5>{course.name}</h5>
      <p>{course.description}</p>
      <button className="btn btn-success" onClick={() => enroll(course._id)}>
        Enroll
      </button>
    </div>
  );
}
