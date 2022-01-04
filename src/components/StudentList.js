import { useState, useEffect,useRef } from "react";
import StudentCard from "./StudentCard";

const StudentList = () => {

  const [nameInput,setNameInput]=useState('')
  
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

      const singlularStudent = data.students.map((el) => {
        return {
          key: el.id,
          id: el.id,
          firstName: el.firstName,
          lastName: el.lastName,
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
      console.log(err);
    }
  }

  
  const filterNameHandler = (event)=> {
    if (event.keyCode === 13) {
      // setNameInput(event.target.value)
      const filteredStudents = students.filter(el => el.firstName.includes(event.target.value))
      
    }
    
  }
  



  // changes my students array according to names and tags
  // setStudents() => my

  return (
    <div>
      <div>
        <input onKeyDown={filterNameHandler}  type="text" placeholder="Filter By Name"></input>
        <input type="text" placeholder="Filter By Tag"></input>
      </div>
      <div>
        {students.map((el) => (
          <StudentCard
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
          />
        ))}
        
      </div>
    </div>
  );
};

export default StudentList;
