import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const ForgotPassword = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="align-self-center">
            <Card>
              <Card.Body>
                bio
                {/* for edit */}
                user bio
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Card>
            <Card.Body>new row</Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default ForgotPassword;
