import React from "react";
import Button from "../Button";
import PropTypes from "prop-types";

const Functions = ({ clickFunction }) => {
  return (
    <div className="functions">
      <Button text="C" clickHandler={clickFunction} />
      <Button text="&larr;" clickHandler={clickFunction} />
    </div>
  );
};

Functions.propTypes = {
  clickFunction: PropTypes.func.isRequired,
};

export default Functions;
