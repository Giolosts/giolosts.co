import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import styles from "./style.module.css";
import TextComponent from "../../TextComponent";
import IndustryList from "./IndustryList";

const Industry = () => {

  
  return (
    <Container className={styles.Container}>
      <Row>
        <TextComponent
          color="#3EE04E"
          Title="INDUSTRY LIST"
          Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla enim a mattis congue. Morbi e"
        />
      </Row>
      <Row>
        <IndustryList />
      </Row>
    </Container>
  );
};

export default Industry;
