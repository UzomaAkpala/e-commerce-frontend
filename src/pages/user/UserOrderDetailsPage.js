import { Container, Row, Col } from "react-bootstrap";

function UserOrderDetailsPage() {
  return (
    <Container fluid>
      <Row className="mt-4">
        <h1>Order details</h1>
        <Col md={8}>
          <br />

          <Row>
            <Col md={6}>
              <h2>Shipping</h2>
            </Col>

            <Col md={6}>
              <h2>Payment method</h2>
            </Col>
          </Row>
        </Col>

        <h>Order Summary</h>
      </Row>
    </Container>
  );
}

export default UserOrderDetailsPage;
