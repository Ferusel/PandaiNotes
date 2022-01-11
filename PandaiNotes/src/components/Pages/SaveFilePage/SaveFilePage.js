import React from "react";
import { Container } from "react-bootstrap";

import ModuleFileTemplate from "../../HomeComponents/ModuleFileTemplate/ModuleFileTemplate";

const SaveFilePage = (props) => {
  return (
    <>
      <Container>
        <ModuleFileTemplate mainHeader={"Save As"} useCase="SAVEFILE" />
      </Container>
    </>
  );
};

export default SaveFilePage;
