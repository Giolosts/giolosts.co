import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import styles from "./style.module.css";
import OfferImg from "../../../Assets/Images/offersImg.png";
import Card from "../../Card";

const Offer = () => {
  return (
    <Container className={styles.Container}>
      <Row className={styles.OfferImg}>
      <Col xs={12} md={6} className={styles.CardComponent}>
          <Row>
            <Col xs={12} md={6} className={styles.CardCol}>
              <Card
                className={styles.Photo}
                Title="COMPETITIVE SALARY"
                Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in"
              />
            </Col>
            <Col xs={12} md={6} className={styles.CardCol}>
              <Card
                Title="COMPETITIVE SALARY"
                Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className={styles.CardCol}>
              <Card
                Title="COMPETITIVE SALARY"
                Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in"
              />
            </Col>
            <Col xs={12} md={6} className={styles.CardCol}>
              <Card
                Title="COMPETITIVE SALARY"
                Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in"
              />
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6}>
          <h1 className={styles.title}>EXCLUSIVE OFFER</h1>
          <Image src={OfferImg} className={styles.Photo} />
        </Col>
      </Row>
    </Container>
  );
};

export default Offer;
