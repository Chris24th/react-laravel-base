import { useState, useEffect } from "react";
import { Button, Form, Card, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
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
          localStorage.setItem("user-data", JSON.stringify(res.data));
          navigate("/");
        }
      });
  };

  useEffect(() => {
    if (localStorage.getItem("user-data")) {
      navigate("/");
    }
  }, []);

  return (
    <Container
      className=" d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container-auth">
        <Card>
          <Card.Body>
            <Form onSubmit={onLogin}>
              <h1 className="mb-3">Website Name</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-danger">
                  {error && error}
                </Form.Label>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button className="mt-3" variant="primary" type="submit">
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Form.Text>
          Don't Have Account? <Link to="/signup">Register here.</Link>
        </Form.Text>
      </div>
    </Container>
  );
};

export default SignIn;
