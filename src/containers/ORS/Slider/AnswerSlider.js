import React from "react";
import { Slider } from "@material-ui/core";

const AnswerSlider = ({ name, getAriaValueText, className }) => {
  return (
    <Slider
      className={className}
      name={name}
      defaultValue={0}
      getAriaValueText={getAriaValueText}
      aria-labelledby="discrete-slider-small-steps"
      step={1}
      marks
      min={0}
      max={10}
      valueLabelDisplay="auto"
    />
  );
};

export default AnswerSlider;
