import { useState } from "react";
import classes from "./StudentCard.module.css";

const StudentCard = (props) => {
  const [userTags, setUserTags] = useState(props.tags);
  const [hideScores, setHideScores] = useState(false);

  function hideScoresHandler() {
    setHideScores(!hideScores);
  }

  function inputEntry(event) {
    if (event.keyCode === 13) {
      setUserTags([...userTags, event.target.value]);
      props.onSaveUserTags({ id: props.id, tags: event.target.value });
      event.target.value = "";
    }
  }

  const average = (
    props.grades.reduce((a, b) => +a + +b) / props.grades.length
  ).toFixed(2);

  const testScores = props.grades.map((el, index) => (
    <li key={Math.random() * 100}>
      {`Test${index + 1}:  
      ${el}%`}
    </li>
  ));

  return (
    <div className={classes.studentName}>
      <div className={classes.studentImage}>
        <img src={props.pic} alt="student Pic"></img>
      </div>
      <div className={classes.studentInfoWrapper}>
        <div className={classes.studentButton}>
          <h1>{`${props.firstName} ${props.lastName}`}</h1>
          <button onClick={hideScoresHandler}>
            {!hideScores ? (
              <i class="fas fa-plus"></i>
            ) : (
              <i class="fas fa-minus"></i>
            )}
          </button>
        </div>
        <div className={classes.studentInfo}>
          <ul>
            <li>Email: {props.email}</li>
            <li>Company: {props.company}</li>
            <li>Skill: {props.skill}</li>
            <li>Average: {average}%</li>
          </ul>
          <div className={!hideScores ? classes.hideTestScores : ""}>
            <ul>{testScores}</ul>
          </div>
          <div>
            <ul className={classes.studentTagWrapper}>
              {userTags.map((el) => (
                <li key={Math.random()}>{el}</li>
              ))}
            </ul>
          </div>
          <div className={classes.searchWrapper}>
            <input
              onKeyDown={inputEntry}
              type="text"
              placeholder="Add a Tag"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
