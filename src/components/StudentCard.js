import {useState,useRef} from 'react'


const StudentCard = (props) => {
  const [userTags,setUserTags]=useState(props.tags)


  function inputEntry(event) {
    if (event.keyCode === 13) {
      console.log(event.target.value)
      setUserTags([...userTags,event.target.value])
      console.log(userTags)
      event.target.value=''
    }
    
  }

    const average = (props.grades.reduce((a,b) => (+a) + (+b)) / props.grades.length).toFixed(2)

    const testScores = props.grades.map(el=> <li key={Math.random()*100}>{el}</li>)
    
  return (
    <div>
      <div>
        <img src={props.pic}></img>
      </div>
      <div>
        <div>
          <h1>{props.firstName}{props.lastName}</h1>
          <p>+</p>
        </div>
        <div>
          <ul>
            <li>Email: {props.email}</li>
            <li>Company: {props.company}</li>
            <li>Skill: {props.skill}</li>
            <li>Average: {average}%</li>
          </ul>
          <div>
            <ul>
           {testScores}
            </ul>
          </div>
          <div>
            <ul>
             {userTags.map(el=> <li key={Math.random()}>{el}</li>)}
            </ul>
          </div>
          <div>
            <input onKeyDown={inputEntry} type="text" placeholder="Add a Tag"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard