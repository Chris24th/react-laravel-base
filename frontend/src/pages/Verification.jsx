import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Row, Col, Container } from "react-bootstrap";

const Verification = () => {
  const [token, setToken] = useState();
  const navigate = useNavigate();
  const api = async () => {
    token &&
      (await axios
        .post("http://127.0.0.1:8000/api/verification", {
          token: token,
        })
        .then((res) => {
          console.log(res.data);
          //   sessionStorage.clear();
        }));
  };
  useEffect(() => {
    if (sessionStorage.getItem("user-data")) {
      navigate("/");
    }

    setToken(sessionStorage.getItem("verify-token"));
  }, [api()]);
  const onLogin = () => {
    navigate("/signin");
  };
  return (
    <Container>
      <Row>
        <Col>Your Email is verified!</Col>
      </Row>
      <Row>
        <Button onClick={onLogin}>Login</Button>
      </Row>
    </Container>
  );
};

export default Verification;
