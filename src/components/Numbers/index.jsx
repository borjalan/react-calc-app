import React from "react";
import Button from "../Button";
import PropTypes from "prop-types";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const Numbers = ({ clickNumber }) => (
  <div className="numbers">
    {numbers.map((num) => (
      <Button key={num} text={num.toString()} clickHandler={clickNumber} />
    ))}
  </div>
);

Numbers.propTypes = {
  clickNumber: PropTypes.func.isRequired,
};

export default Numbers;
