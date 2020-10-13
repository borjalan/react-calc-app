import React from "react";
import Button from "../Button";
import PropTypes from "prop-types";

const operations = ["+", "-", "*", "/", "="];

const MathOperations = ({ clickOperation }) => {
  return (
    <section className="math-operations">
      {operations.map((sim) => (
        <Button key={`sim_${sim}`} text={sim} clickHandler={clickOperation} />
      ))}
    </section>
  );
};

MathOperations.propTypes = {
  clickOperation: PropTypes.func.isRequired,
  clickEqual: PropTypes.func.isRequired,
};

export default MathOperations;
