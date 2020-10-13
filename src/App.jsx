import React from "react";
import "./App.css";
import Result from "./components/Result";
import MathOperations from "./components/MathOperations";
import Functions from "./components/FunctionsPannel";
import Numbers from "./components/Numbers";

const App = () => {
  const useState = React.useState;
  const arrayTextoFuncionModificaTexto = useState("");
  const texto = arrayTextoFuncionModificaTexto[0];                  // 1er posición: valor (que inicialmente es el valor por defecto)
  const funcionModificarTexto = arrayTextoFuncionModificaTexto[1];   // 2da posición: función que me va a permitir modificar el valor por defecto

  const clickOperationFunction = (res) => console.log("Function: ", res);

  const clickNumberFunction = (res) => {
    funcionModificarTexto(res);
  };

  const clickFunctionFunction = (res) => console.log("Función: ", res);
  return (
    <main className="react-calculadora">
      <Result value={texto} />
      <Numbers clickNumber={clickNumberFunction} />
      <Functions clickFunction={clickFunctionFunction} />
      <MathOperations clickOperation={clickOperationFunction} />
    </main>
  );
};

export default App;
