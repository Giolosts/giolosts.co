import React from "react";
import { Container, Row, Col, Button,} from "react-bootstrap";
import logo from "../../Assets/Images/giolosts_logo.png";
import styles from "../../Assets/Styles/Layouts/Footer.module.css";
import {
  FaTumblrSquare,
  FaTwitterSquare,
  FaFacebookSquare,
  FaGooglePlusSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container className={styles.footerContainer} fluid>
      <Row className="justify-content-md-center">
        <Col xs lg="4" className={styles.NavItems}>
          <img
            src={logo}
            width="30"
            height="30"
            className={styles.logo}
            alt="Giolosts Technologies"
          />
          GIOLOSTS TECHNOLOGIES
          <br />
          <a to="/aboutus"><small> ABOUT US</small></a>
        </Col>
        <Col md="auto" className={styles.NavItems}>
          FOR ENGINEERS <br />
          <small><a href="/engineer">OFFERS</a></small>
        </Col>
        <Col md="auto" className={styles.NavItems}>
          FOR COMPANIES <br />
          <small><a href="/companies"> SERVICES</a></small>
        </Col>
        <Col md="auto" className={styles.NavItems}>
          <Button
            variant="outline-success"
            style={{ borderRadius: 50, alignItems: "center" }}
          >
            CONTACT US
          </Button>
        </Col>
      </Row>
      <Container className={styles.ConnectContainer}>
        <div className={styles.SocialMedContainer}>
          <div className={styles.ConnectHeader}>CONNECT</div>
          <FaTumblrSquare className={styles.SocialIcons} />
          <FaTwitterSquare className={styles.SocialIcons} />
          <FaFacebookSquare className={styles.SocialIcons} />
          <FaGooglePlusSquare className={styles.SocialIcons} />
        </div>
      </Container>
    </Container>
  );
};

export default Footer;
