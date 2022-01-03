const StudentCard = (props) => {

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
              <li>tag1</li>
              <li>tag2</li>
            </ul>
          </div>
          <div>
            <input type="text" placeholder="Add a Tag"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard