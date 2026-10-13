import React, { createContext, useContext } from "react";
import { useState } from "react";

import "./index.css";
import ReactDOM from "react-dom/client";
const CounterContext = createContext();
function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);
  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}
function Count(){
  const {count}=useContext(CounterContext)
  return <span>{count}</span>
}
function Label({children}){
  return <span>{children}</span>
}
function Increase({children}){
  const {increase}=useContext(CounterContext)
  return <button onClick={increase}>{children}</button>
}
function Decrease({children}){
  const {decrease}=useContext(CounterContext)
  return <button onClick={decrease}>{children}</button>
}
Counter.Count=Count
Counter.Label=Label
Counter.Increase=Increase
Counter.Decrease=Decrease

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}
      <Counter>
        <Counter.Label>My super flexible counter</Counter.Label>
        <Counter.Increase>+</Counter.Increase>
        <Counter.Count></Counter.Count>
        <Counter.Decrease>-</Counter.Decrease>
      </Counter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
//E:\project\react\react-code\jonasReactChallenges\Practice-projects\run-practical
