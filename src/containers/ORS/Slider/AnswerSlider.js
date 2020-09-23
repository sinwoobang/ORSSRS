import React from "react";
import { Slider } from "@material-ui/core";

const AnswerSlider = (props) => {
  const { name, getAriaValueText } = props;

  return (
    <Slider
      className={"answerSlider"}
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
