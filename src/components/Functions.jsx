import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Functions = ({ clickHandlerFunction }) => {
  return (
    <div className="functions">
      <Button text="C" clickHandler={clickHandlerFunction} />
      <Button text="R" clickHandler={clickHandlerFunction} />
    </div>
  );
};

Functions.propTypes = {
  clickHandlerFunction: PropTypes.func.isRequired,
};

export default Functions;
