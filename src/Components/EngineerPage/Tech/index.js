import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./style.module.css";

import reactlogo from '../../../Assets/Images/react.png';
import angularlogo from '../../../Assets/Images/angular.png';
import mongodblogo from '../../../Assets/Images/mongodb.png'
import nestjslogo from '../../../Assets/Images/nestjs.png';
import nodelogo from '../../../Assets/Images/node.png'
import postgrelogo from '../../../Assets/Images/postgre.png';


const Tech = () => {
  return (
    <Container className={styles.Container} fluid>
      <Row>
        <Col>
          <h1 className={styles.Title}>TECHNOLOGY USED</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={3} className={styles.LogoCol}>
            <Image height={150} src={reactlogo}/>
            <h5 className={styles.LogoText}>REACT</h5>
        </Col>
        <Col md={3} className={styles.LogoCol}>
            <Image height={150} src={angularlogo}/>
            <h5 className={styles.LogoText}>ANGULAR</h5>
        </Col>
        <Col md={3} className={styles.LogoCol}>
            <Image height={150} src={mongodblogo}/>
            <h5 className={styles.LogoText}>MONGO DB</h5>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={3} className={styles.LogoCol}>
            <Image height={150} src={nestjslogo}/>
            <h5 className={styles.LogoText}>NEST JS</h5>
        </Col>
        <Col md={3} className={styles.LogoCol}>
            <Image height={150} src={nodelogo}/>
            <h5 className={styles.LogoText}>NODE JS</h5>
        </Col>
        <Col md={3} className={styles.LogoCol}>
            <Image height={150} src={postgrelogo}/>
            <h5 className={styles.LogoText}>POSTGRE SQL</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Tech;
