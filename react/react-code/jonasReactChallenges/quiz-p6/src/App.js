import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initialState = {
  questions: [],
  status: "loading",
};
const reducer = function (state, action) {
  switch (action.type) {
    case "dataRecived":
      return {
        ...state,
        questions: action.payLoad,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error("unknown");
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payLoad: data }))
      .catch((err) => dispatch({type:"dataFailed"}));
  }, []);
  return (
    <div>
      <Header />
      <Main>
        <p>1/15</p>
        <p>question</p>
      </Main>
    </div>
  );
}
//cd E:\project\react\react-code\jonasReactChallenges\quiz-p6
