import React from "react";
import "./App.css";
import Result from "./components/Result";
import MathOperations from "./components/MathOperations";
import Functions from "./components/FunctionsPannel";
import Numbers from "./components/Numbers";


const clickOperationFunction = (text) => console.log("Function: ", text);

const clickNumberFunction = (text) => console.log("Número: ", text);

const clickFunctionFunction = (text) => console.log("Función: ", text);

const App = () => {
  return (
    <main className="react-calculadora">
      <Result value={"0"} />
      <Numbers clickNumber={clickNumberFunction} />
      <Functions clickFunction={clickFunctionFunction} />
      <MathOperations clickOperation={clickOperationFunction} />
    </main>
  );
};

export default App;
