import { useState, useEffect } from "react";
import StudentCard from "./StudentCard";
import classes from "./StudentList.module.css";
const StudentList = () => {
  const [nameInput, setNameInput] = useState("");

  const [tagInput, setTagInput] = useState("");
  const [students, setStudentData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchStudentData();
  }, []);

  const saveUserTags = (event) => {
    // let student = students.find((el) => el.id == event.id);
    const newStudents = students.map((el) => {
      if (el.id === event.id) {
        return { ...el, tags: [...el.tags, event.tags] };
      } else {
        return el;
      }
    });

    setStudentData(newStudents);
  };

  async function fetchStudentData() {
    try {
      const response = await fetch(
        "https://api.hatchways.io/assessment/students"
      );

      // Check to see if response is OK

      const data = await response.json();

      // Remake prop names into a object with simpler names

      const singlularStudent = data.students.map((el) => {
        return {
          key: el.id,
          id: el.id,
          firstName: el.firstName.toUpperCase(),
          lastName: el.lastName.toUpperCase(),
          pic: el.pic,
          email: el.email,
          company: el.company,
          skill: el.skill,
          grades: el.grades,
          tags: [],
        };
      });
      setStudentData(singlularStudent);
    } catch (err) {
      setError(err);
      console.log(error);
    }
  }

  const filterNameHandler = (event) => {
    setNameInput(event.target.value.toUpperCase());
  };

  const filterTagHandler = (event) => {
    setTagInput(event.target.value);
  };

  let filteredStudents = students.filter(
    (el) => el.firstName.includes(nameInput) || el.lastName.includes(nameInput)
  );

  const filteredTags = filteredStudents.filter((el) =>
    el.tags.join("").includes(tagInput)
  );

  return (
    <div className={classes.listSizing}>
      <div className={classes.searchWrapper}>
        <input
          onChange={filterNameHandler}
          type="text"
          placeholder="Filter By Name"
        ></input>
        <input
          onChange={filterTagHandler}
          type="text"
          placeholder="Filter By Tag"
        ></input>
      </div>
      <div className={classes.studentListWrapper}>
        {filteredTags.map((el) => (
          <StudentCard
            id={el.id}
            firstName={el.firstName}
            lastName={el.lastName}
            pic={el.pic}
            email={el.email}
            company={el.company}
            grades={el.grades}
            city={el.city}
            skill={el.skill}
            key={el.id}
            tags={el.tags}
            onSaveUserTags={saveUserTags}
          />
        ))}
      </div>
    </div>
  );
};
export default StudentList;
