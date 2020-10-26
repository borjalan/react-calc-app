/* eslint no-eval: 0 */
import React, { useState } from "react";
import words from "lodash.words";
import "./App.css";
import Result from "./components/Result";
import MathOperations from "./components/MathOperations";
import Functions from "./components/FunctionsPannel";
import Numbers from "./components/Numbers";

const App = () => {
  // 1er posición: valor (que inicialmente es el valor por defecto)
  // 2da posición: función que me va a permitir modificar el valor por defecto
  const [stack, setStack] = useState("");

  const items = words(stack, /[^-^+^*^/]+/g);

  const value = items.length > 0 ? items[items.length - 1] : "0";

  const clickOperationFunction = (res) => {
    if (res === "=") {
      setStack(eval(stack).toString());
    } else if (stack.length < 16) {
      setStack(`${stack}${res}`);
    }
  };

  const clickNumberFunction = (res) => {
    if (stack.length < 16) {
      setStack(`${stack}${res}`);
    }
  };

  const clickFunctionFunction = (res) => {
    if (res === "C") {
      setStack("");
    } else if (stack.length > 0) {
      const newStack = stack.substring(0, stack.length - 1);
      setStack(newStack);
    }
  };

  return (
    <main className="react-calculadora">
      <Result value={value} />
      <Numbers clickNumber={clickNumberFunction} />
      <Functions clickFunction={clickFunctionFunction} />
      <MathOperations clickOperation={clickOperationFunction} />
    </main>
  );
};

export default App;
