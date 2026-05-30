import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="Appcounter">
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="counter">
      <div className="step">
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        {/* <button onClick={()=>step>1&&setStep(c=>--c)}>-</button> */}
        <div>step:{step}</div>
        {/* <button onClick={()=>step>=0&&setStep(c=>++c)}>+</button> */}
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input value={count} onChange={(e) => setCount(+e.target.value)} />
        {/* <div>Count:{count}</div> */}
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <DateT countN={count} />
      <button
        style={{ width: "90px", borderRadius: "30px" }}
        onClick={() => {
          setCount(0);
          setStep(1);
        }}
      >
        reset
      </button>
    </div>
  );
}
function DateT({ countN }) {
  let str;
  const date = new Date();
  str = `${Math.abs(countN)} days ${countN > 0 ? "from today is" : "ago was"} ${new Date(date.getTime() + countN * 24 * 60 * 60 * 1000).toDateString()}`;
  if (countN === 0) str = `Today is ${date.toDateString()}`;

  return <p>{str}</p>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
//E:\project\react\react-code\jonasReactChallenges\Practice-projects\run-practical
