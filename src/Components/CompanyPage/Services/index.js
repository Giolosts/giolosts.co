import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import ServicesPhoto from '../../../Assets/Images/services.png';
import TextComponent from "../../TextComponent";
import styles from "./style.module.css";

const Services = () => {
  return (
    <Container className={styles.Container}>
      <Row>
        <h1 className={styles.Title}>SERVICES</h1>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <Image src={ServicesPhoto} className={styles.Photo} />
        </Col>
        <Col xs={12} md={4} className={styles.TextComponent}>
          <TextComponent
            Title="WHAT WE DO?"
            fontweight="bold"
            Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla enim a mattis congue. Morbi e Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla enim a mattis congue. Morbi e"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
