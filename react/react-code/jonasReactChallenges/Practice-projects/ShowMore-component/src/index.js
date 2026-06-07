import React, { Children, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}
function TextExpander({
  children,
  className,
  buttonColor = "blue",
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  expanded = false,
  collapsedNumWords = 10,
}) {
  const [isOpen, setIsOpen] = useState(expanded);
  return (
    <div className={className}>
      {isOpen
        ? children
        : `${children
            .split(" ")
            .filter((_, i) => i < collapsedNumWords)
            .join(" ")}... `}
      <span
        style={{ color: buttonColor }}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {isOpen ? collapseButtonText : expandButtonText}
      </span>
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
