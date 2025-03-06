import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import styles from "./style.module.css";
import SprintPhoto from "../../../Assets/Images/sprint.png";

import TextComponent from "../../../Components/TextComponent";

const Sprint = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Image src={SprintPhoto} className={styles.Photo} />
        </Col>
        <Col xs={12} md={6} className={styles.TextComponent}>
          <TextComponent
            Title="DESIGN SPRINT"
            color={"rgb(62, 224, 78)"}
            Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla enim a mattis congue. Morbi e Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla enim a mattis congue. Morbi e"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Sprint;
