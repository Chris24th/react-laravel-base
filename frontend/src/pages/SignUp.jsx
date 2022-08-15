import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const onRegister = async (e) => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:8000/api/signup", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("verify-token", res.data);
        navigate("/signin");
      });
  };

  useEffect(() => {
    if (sessionStorage.getItem("user-data")) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={onRegister}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      ;
    </div>
  );
};

export default SignUp;
