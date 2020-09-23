import React from "react";
import { Container } from "@material-ui/core";
import ORSForm from "../../components/ORSForm";

import "../../styles/ORS.css";

const ORS = () => (
  <div className="App">
    <header className="App-header">
      <h1>ORS</h1>
    </header>

    <Container>
      <p className={"description"}>
        오늘을 포함해 지난 한주간을 돌아보면서, 다음 삶의 영역들에서 자신이
        얼마나 잘 지냈는지 표시를 해서 자신이 그동안 어떻게 느꼈는지 제가 이해할
        수 있게 해주시면 감사하겠습니다.왼쪽에 표시하는 것은 낮은 수준을 뜻하며,
        오른 쪽에 표시하는 것은 높은 수준을 뜻합니다.
      </p>
      <ORSForm />
    </Container>
  </div>
);

export default ORS;
