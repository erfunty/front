import React, { Children, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return <div className="accordion">
      {data.map((d, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={i + 1}
          title={d.title}
          key={d.title}
        >
        {d.text}
        </AccordionItem >
      ))}
    </div>
}
function AccordionItem({ num, title, text, curOpen, onOpen ,children}) {
  const isOpen=num===curOpen
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => onOpen(()=>isOpen?null:num)}
    >
      <p className="number">{num < 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
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
