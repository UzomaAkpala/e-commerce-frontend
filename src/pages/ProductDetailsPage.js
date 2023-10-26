import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { id } = useParams();
  console.log(id);
  return <h1>Product details page</h1>;
}

export default ProductDetailsPage;
