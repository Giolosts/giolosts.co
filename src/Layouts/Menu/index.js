import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, Button } from "react-bootstrap";
import logo from "../../Assets/Images/giolosts_logo.png";
import styles from "../../Assets/Styles/Layouts/Menu.module.css";
import { useState, useEffect } from "react";

import ContactModal from "../../Components/ContactModal";

const MenuNav = () => {
  const [scroll, setScroll] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className={scroll ? styles.nav : styles.NotScrolled}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className={styles.logo}
            alt="Giolosts Technologies"
          />
          <span className={styles.NavItems}>GIOLOSTS TECHNOLOGIES</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link
              className={styles.NavItems}
              style={{ color: "#FFF" }}
              href="/"
            >
              HOME
            </Nav.Link>
            <Nav.Link
              className={styles.NavItems}
              style={{ color: "#FFF" }}
              href="/engineer"
            >
              FOR ENGINEERS
            </Nav.Link>
            <Nav.Link
              className={styles.NavItems}
              style={{ color: "#FFF" }}
              href="/companies"
            >
              FOR COMPANIES
            </Nav.Link>
          </Nav>
          <Nav>
            <Button
              onClick={() => setModalShow(true)}
              className={styles.ContactButton}
              variant="outline-light"
              style={{ borderRadius: 50 }}
            >
              CONTACT US
            </Button>

            <ContactModal show={modalShow} onHide={() => setModalShow(false)} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNav;
