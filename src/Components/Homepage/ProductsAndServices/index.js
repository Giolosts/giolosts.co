import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import styles from "./style.module.css";
import StaffImg from "../../../Assets/Images/service-img.png";
import ProductDev from "../../../Assets/Images/product-development.jpg";
import SoftSol from "../../../Assets/Images/software-solutions.png";
import AgileImg from "../../../Assets/Images/Agile-Project-Management.png";

const ProductAndServices = () => {
  return (
    <Container className={styles.Container}>
      <h1 className={styles.Title}>PRODUCT AND SERVICES</h1>
      <Row>
        <Col sm={12} md={6}>
          <div className={styles.serviceItem}>
            <div className={styles.ImgContainer}>
              <Image className={styles.img} src={StaffImg} />
            </div>
            <div className={styles.text}>
              <h5 className={styles.productTitle}>STAFF AUGMENTATION</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className={styles.serviceItem}>
            <div className={styles.ImgContainer}>
              <Image className={styles.img} src={ProductDev} />
            </div>
            <div className={styles.text}>
              <h5 className={styles.productTitle}>PRODUCT DEVELEOPMENT</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <div className={styles.serviceItem}>
            <div className={styles.ImgContainer}>
              <Image className={styles.img} src={SoftSol} />
            </div>
            <div className={styles.text}>
              <h5 className={styles.productTitle}>COSTUM SOFTWARE SOLUTIONS</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className={styles.serviceItem}>
            <div className={styles.ImgContainer}>
              <Image className={styles.img} src={AgileImg} />
            </div>
            <div className={styles.text}>
              <h5 className={styles.productTitle}>MANAGE AGILE</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductAndServices;
