import React, { Children, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [bill, setBill] = useState(0);
  const [tips, setTips] = useState([0, 0]);
  return (
    <div className="accordion">
      <Bill bill={bill} onBill={setBill} />
      <SelectService k={0} tip={tips[0]} onTips={setTips}>
        How did you like the srvice?
      </SelectService>
      <SelectService k={1} tip={tips[1]} onTips={setTips}>
        How did your friend like the srvice?
      </SelectService>
      <Pay bill={bill} tips={tips} />
      <Reset onBill={setBill} onTips={setTips} />
    </div>
  );
}
function Pay({ bill, tips }) {
  const tipA = ((tips[0] + tips[1]) / 200) * bill;
  return (
    <h3>
      you pay ${bill + tipA}(${bill}+${tipA}tip)
    </h3>
  );
}
function Bill({ bill, onBill }) {
  return (
    <div>
      How much was the bill?
      <input
        type="text"
        placeholder="bill"
        value={bill}
        onChange={(e) => onBill(+e.target.value)}
      />
    </div>
  );
}
function SelectService({ k, tip, onTips, children }) {
  return (
    <div>
      {children}
      <select
        value={tip}
        onChange={(e) =>
          onTips((tips) => tips.map((t, i) => (i === k ? +e.target.value : t)))
        }
      >
        <option value={0}>Dissatified(0%)</option>
        <option value={5}>It waas okey(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolutly amazing!(20%)</option>
      </select>
    </div>
  );
}
function Reset({ onTips, onBill }) {
  return (
    <div>
      <button
        onClick={() => {
          onTips([0, 0]);
          onBill(0);
        }}
      >
        Reset
      </button>
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
