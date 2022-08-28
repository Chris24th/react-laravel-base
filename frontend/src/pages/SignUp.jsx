import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form, Card, Container } from "react-bootstrap";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
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
        localStorage.setItem("verify-token", res.data);
        navigate("/signin");
      });
  };

  useEffect(() => {
    if (localStorage.getItem("user-data")) {
      navigate("/");
    }
  }, []);

  return (
    <Container className=" d-flex align-items-center justify-content-center">
      <div className="container-auth">
        <Card>
          <Card.Body>
            <Form onSubmit={onRegister}>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone.
                </Form.Text>
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button className="mt-3" variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Form.Text>
          Already Have Account? <Link to="/signin">Log In here.</Link>
        </Form.Text>
      </div>
    </Container>
  );
};

export default SignUp;
