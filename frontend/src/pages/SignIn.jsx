import { useState, useEffect } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const onLogin = async (e) => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:8000/api/signin", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.error) {
          setError(res.data.error);
        } else {
          sessionStorage.setItem("user-data", JSON.stringify(res.data));
          navigate("/");
        }
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
            <Form onSubmit={onLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-danger">
                  {error && error}
                </Form.Label>
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
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      ;
    </div>
  );
};

export default SignIn;
