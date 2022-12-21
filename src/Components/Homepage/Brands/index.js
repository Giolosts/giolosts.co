import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./Brand.module.css";

import RiotGames from "../../../Assets/svg/rio-games.svg";
import Threadless from "../../../Assets/svg/threadless.svg";
import Sony from "../../../Assets/svg/sony.svg";
import Beachbody from "../../../Assets/svg/beachbody.svg";

import Fox from "../../../Assets/svg/fox.svg";
import Intel from "../../../Assets/svg/intel.svg";
import Twitter from "../../../Assets/svg/twitter.svg";
import Kaplan from "../../../Assets/svg/kaplan.svg";

const Brand = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={3} className={styles.BrandItem}>
          <img src={RiotGames} alt="React Logo" />
        </Col>
        <Col sm={12} md={3} className={styles.BrandItem}>
          <img src={Threadless} alt="React Logo" />
        </Col>
        <Col sm={12} md={3} className={styles.BrandItem}>
          <img src={Sony} alt="React Logo" />
        </Col>
        <Col sm={12} md={3} className={styles.BrandItem}>
          <img src={Beachbody} alt="React Logo" />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={3} className={styles.BrandItem}>
          <img src={Fox} alt="React Logo" />
        </Col>
        <Col sm={12} md={3} className={styles.BrandItem}>
          <img src={Intel} alt="React Logo" />
        </Col>
        <Col sm={12} md={3} className={styles.BrandItem}>
          <img src={Twitter} alt="React Logo" />
        </Col>
        <Col sm={12} md={3} className={styles.BrandItem}>
          <img src={Kaplan} alt="React Logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Brand;
