import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import styles from "./Engineer.module.css";

import EngineerPhoto from "../../../Assets/Images/home-img2.png";
import TextComponent from "../../TextComponent/index";

const Engineer = () => {
  const ButtonComponent = (
    <Button variant="outline-success" style={{ borderRadius: 50 }}>
      FOR ENGINEERS
    </Button>
  );
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Image className={styles.EngineerPhoto} src={EngineerPhoto} />
        </Col>
        <Col xs={12} md={6}>
          <TextComponent
            color="#3EE04E"
            Title="FOR ENGINEERS"
            Text="JOIN THE MOST ENERGIZING COMMUNITY FOR DEVELOPERS AND GET LONG-TERM REMOTE JOBS WITH LEADING BRANDS."
            Button={ButtonComponent}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Engineer;
