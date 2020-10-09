import React from "react";
import "./App.css";
import Result from "./components/Result";
import MathOperations from "./components/MathOperations";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";

const App = () => {
  const clickHandlerFunction = (text) =>
    console.log("El botton " + text + " se pulso");

  return (
    <main className="react-calculadora">
      <Result value={"0"} />
      <Numbers clickHandlerFunction={clickHandlerFunction} />
      <Functions clickHandlerFunction={clickHandlerFunction} />
      <MathOperations clickHandlerFunction={clickHandlerFunction} />
    </main>
  );
};

export default App;
