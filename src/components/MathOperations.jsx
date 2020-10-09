import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const MathOperations = ({clickHandlerFunction}) => {
  return (
    <div className="math-operations">
      <Button text="+" clickHandler={clickHandlerFunction} />
      <Button text="-" clickHandler={clickHandlerFunction} />
      <Button text="*" clickHandler={clickHandlerFunction} />
      <Button text="/" clickHandler={clickHandlerFunction} />
      <Button text="=" clickHandler={clickHandlerFunction} />
    </div>
  );
};

MathOperations.propTypes = {
  clickHandlerFunction: PropTypes.func.isRequired,
};

export default MathOperations;
