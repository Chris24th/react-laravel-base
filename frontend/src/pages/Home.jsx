import { useEffect } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user-data"));
  const onLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
    console.log(user);
  }, []);

  return (
    <Container>
      <Row>
        <p>Logged In as: {user.email}</p>
      </Row>
      <Row>
        Home
        <Col>
          <Button onClick={onLogout}>Logout</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
