import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import styles from "./Company.module.css";

import CompanyPhoto from "../../../Assets/Images/home-img3.png";
import TextComponent from "../../TextComponent/index";

const Companies = () => {

  const ButtonComponent = <Button variant="outline-success" style={{ borderRadius: 50 }} >FOR COMPANIES</Button>
  return (
    <Container className={styles.CompanyContainer}>
      <Row>
        <Col xs={12} md={6}>
          <TextComponent
            Title="FOR COMPANIES"
            Text="GIOLOSTS TECHNOLOGIES TEAM PROVIDES HIGH-PERFORMING, ON-DEMAND TEAMS OF DEVELOPERS FOR THE WORLD'S LEADING BRANDS."
            Button={ButtonComponent}
          />
        </Col>
        <Col xs={12} md={6}>
          <Image className={styles.CompanyPhoto} src={CompanyPhoto} />
        </Col>
      </Row>
    </Container>
  );
};

export default Companies;
