import {
  Container,
  Row,
  Col,
  Form,
  Alert,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import CartItemComponent from "../../components/CartItemComponent";

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
              <b>Name</b>: John Doe
              <b>Address</b>: 8739 Mayflower St. Los Angeles, CA 90063
              <b>Phone</b>: 888 777 66776
            </Col>

            <Col md={6}>
              <h2>Payment method</h2>
              <Form.Select disabled={false}>
                <option value="pp"> PayPal</option>
                <option value="cod">
                  {" "}
                  Cash On Delivery (delivery may be delayed)
                </option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert className="mt-3" variant="danger">
                  Not delivered
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant="success">
                  Paid on 2023-10-31 Not delivered
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Order items</h2>
          <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((item, idx) => (
              <CartItemComponent key={idx} />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order Summary</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              Items price (after tax): <span className="fw-bold">$892</span>
            </ListGroup.Item>

            <ListGroup.Item>
              Shipping: <span className="fw-bold">included</span>
            </ListGroup.Item>

            <ListGroup.Item>
              Tax: <span className="fw-bold">included</span>
            </ListGroup.Item>

            <ListGroup.Item className="text-danger">
              Total Price: <span className="fw-bold">$904</span>
            </ListGroup.Item>

            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button size="lg" variant="danger" type="button">
                  Pay for the order
                </Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default UserOrderDetailsPage;
