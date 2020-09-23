import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import AnswerSlider from "../containers/ORS/Slider/AnswerSlider";

const ORSForm = () => (
  <form noValidate autoComplete="off">
    <div id={"name-wrapper"}>
      <TextField required label="이름" name="name" />
    </div>
    <div className={"questions"}>
      <div>
        <Typography className={"question"} gutterBottom>
          개인적으로 (자기자신의 웰빙)
        </Typography>
        <AnswerSlider name="Q1" />
      </div>
      <div>
        <Typography className={"question"} gutterBottom>
          대인적으로 (가까운 관계, 가족)
        </Typography>
        <AnswerSlider name="Q2" />
      </div>
      <div>
        <Typography className={"question"} gutterBottom>
          사회적으로 (친구관계, 학교, 직장)
        </Typography>
        <AnswerSlider name="Q3" />
      </div>
      <div>
        <Typography className={"question"} gutterBottom>
          전반적으로 (웰빙에 대한 전반적 느낌)
        </Typography>
        <AnswerSlider name="Q4" />
      </div>
    </div>

    <Button
      className={"submitBtn"}
      variant="contained"
      color="primary"
      type="submit"
    >
      전송하기
    </Button>
  </form>
);

export default ORSForm;
