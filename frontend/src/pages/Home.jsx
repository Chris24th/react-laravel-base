import { useEffect } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user-data");
  const onLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, []);

  return (
    <Container>
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
