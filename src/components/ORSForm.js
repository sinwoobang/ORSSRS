import AnswerSlider from "../containers/ORS/Slider/AnswerSlider";
import { Button } from "@material-ui/core";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const Wrapper = styled.div`
  display: block;
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
`;

const Form = styled.form`
  display: inline-block;
  width: 70%;
  text-align: left;
`;

const NameWrapper = styled.div`
  margin-top: 1%;
  margin-bottom: 5%;
`;

const SubmitBtn = styled(Button)`
  float: right;
`;

const QuestionsWrapper = styled.div`
  margin-bottom: 5%;
`;

const ORSForm = ({ className }) => (
  <Wrapper>
    <Form noValidate autoComplete="off" className={className}>
      <NameWrapper>
        <TextField required label="이름" name="name" />
      </NameWrapper>
      <QuestionsWrapper className={"questions"}>
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
      </QuestionsWrapper>

      <SubmitBtn
        className={"submitBtn"}
        variant="contained"
        color="primary"
        type="submit"
      >
        전송하기
      </SubmitBtn>
    </Form>
  </Wrapper>
);

export default ORSForm;
