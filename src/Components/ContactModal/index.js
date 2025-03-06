import React from "react";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import styles from "./styles.module.css";

import Modal from "react-bootstrap/Modal";

const ContactModal = (props) => {
  return (
    <Modal
      {...props}
      size="m"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h5>CONTACT FORM</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className={styles.formRow}>
          <Col sm={12} md={6}>
            <Form.Label>
              <h6 className={styles.formLabel}>FIRSTNAME</h6>
            </Form.Label>
            <Form.Control type="text" placeholder="Enter your First Name" />
          </Col>
          <Col sm={12} md={6}>
            <Form.Label>
              <h6 className={styles.formLabel}>LASTNAME</h6>
            </Form.Label>
            <Form.Control type="text" placeholder="Enter your Last Name" />
          </Col>
        </Row>
        <Row className={styles.formRow}>
          <Col sm={12} md={12}>
            <Form.Label>
              <h6 className={styles.formLabel}>EMAIL ADDRESS</h6>
            </Form.Label>
            <Form.Control type="email" placeholder="Enter your EMAIL" />
          </Col>
        </Row>
        <Row className={styles.formRow}>
          <Col sm={12} md={12}>
            <Form.Label>
              <h6 className={styles.formLabel}>Contact Number</h6>
            </Form.Label>
            <Form.Control type="number" placeholder="09xxxxxxx" />
          </Col>
        </Row>
        <Row className={styles.formRow}>
          <Col sm={12} md={12}>
            <Form.Label>
              <h6 className={styles.formLabel}>Message</h6>
            </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success">Submit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModal;
