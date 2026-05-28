import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { skillName: "html&css", level:'beginner' , backGroundColor: "#ffa500" },
  { skillName: "javascript", level: 'intermediate', backGroundColor: "#fff200" },
  { skillName: "react", level:'advanced' , backGroundColor: "#61dafb" },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img src="profilePhoto.webp" className="avatar" alt="avatar" />;
}
function Intro() {
  return (
    <>
      <h1>erfan sohrabi</h1>
      <p className="data">
        front-end developer and student in znj. almost coding ,try in learn love
        and also english.
      </p>
    </>
  );
}
function SkillList() {
  return <div className="skill-list">
    {skills.map(skill=><Skill {...skill}/>)}
  </div>
}
function Skill(props){
  let emoji;
  switch(props.level){
    case'beginner': emoji="😏"
    break;
    case'intermediate': emoji="🙄"
    break;
    case'advanced': emoji="😑"
    break;
    default: emoji="❓"
  }
  return <div className="skill" style={{backgroundColor:props.backGroundColor}}>
    <p>{props.skillName}</p>
    <p>{emoji}</p>
  
  </div>

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
//E:\project\react\react-code\jonasReactChallenges\Practice-projects\run-practical
