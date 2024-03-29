import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddedToCartMessageComponent = () => {
  const [show, setShow] = useState(true);
  return (
    <Alert
      show={show}
      variant="success"
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>This was added to your cart!</Alert.Heading>
      <p>
        <Button variant="success">Go Back</Button>{" "}
        <Link to="/cart">
          <Button variant="danger">Go Back</Button>
        </Link>
      </p>
    </Alert>
  );
};

export default AddedToCartMessageComponent;
