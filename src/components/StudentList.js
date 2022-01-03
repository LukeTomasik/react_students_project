import { useState, useEffect } from "react";
import StudentCard from "./StudentCard";

const StudentList = () => {
  const [students, setStudentData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchStudentData();
  }, []);

  async function fetchStudentData() {
    try {
      const response = await fetch(
        "https://api.hatchways.io/assessment/students"
      );
      // Check to see if response is OK

      const data = await response.json();

      // Remake prop names into a object with simpler names

      const singlularStudent = data.students.map((el) => (
        <StudentCard
          key={el.id}
          id={el.id}
          firstName={el.firstName}
          lastName={el.lastName}
          pic={el.pic}
          email={el.email}
          company={el.company}
          skill={el.skill}
          grades={el.grades}
        />
      ));

      setStudentData(singlularStudent);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div>
        <input type="text" placeholder="Filter By Name"></input>
        <input type="text" placeholder="Filter By Tag"></input>
      </div>
      <div>{students}</div>
    </div>
  );
};

export default StudentList;
