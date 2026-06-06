import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import StudentList from "./StudentList";

function App() {
  const [students, setStudents] = useState([
    "Gayatri",
    "Ravi",
    "Anjali",
  ]);

  const [newStudent, setNewStudent] = useState("");

  const inputRef = useRef(null);

  // Focus input on component load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Update browser tab title
  useEffect(() => {
    document.title = `Students: ${students.length}`;
  }, [students]);

  // Add student
  const addStudent = () => {
    if (newStudent.trim() === "") return;

    setStudents([...students, newStudent]);
    setNewStudent("");
    inputRef.current.focus();
  };

  // useCallback for delete function
  const deleteStudent = useCallback((index) => {
    setStudents((prevStudents) =>
      prevStudents.filter((_, i) => i !== index)
    );
  }, []);

  // useMemo for total students
  const totalStudents = useMemo(() => {
    return students.length;
  }, [students]);

  // useMemo for total characters
  const totalCharacters = useMemo(() => {
    return students.reduce(
      (total, student) => total + student.length,
      0
    );
  }, [students]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Management Dashboard</h1>

      <input
        type="text"
        placeholder="Enter student name"
        value={newStudent}
        ref={inputRef}
        onChange={(e) => setNewStudent(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <button
        onClick={() => inputRef.current.focus()}
        style={{ marginLeft: "10px" }}
      >
        Focus Input
      </button>

      <hr />

      <h3>Total Students: {totalStudents}</h3>
      <h3>Total Characters: {totalCharacters}</h3>

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default App;