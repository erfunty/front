import React, { Children, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
//`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`
function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("USD");
  const [final, setFinal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    function () {
      async function transfor() {
        setIsLoading(true);

        const res = await fetch(
          `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`,
        );
        console.log(res);
        const data = await res.json();
        console.log(data);
        console.log(amount * data.rates[to]);
        setFinal(amount * data.rates[to]);
        setIsLoading(false);
      }
      if (from === to) return setFinal(amount);
      transfor();
    },
    [amount, from, to],
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(+e.target.value)}
        disabled={isLoading}
      />
      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        {/* <option value="IRR">IRR</option>//not found :)1$= 2_000_000 IRR */}
      </select>
      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        {/* <option value="IRR">IRR</option> */}
      </select>
      <p>{final} {to}</p>
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
