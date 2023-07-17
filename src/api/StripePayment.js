import { useState } from "react";

function StripePayment() {
  const [product, setProduct] = useState({
    name: "Hobby",
    price: 12,
    productOwner: "Test",
    description: "All the basics for starting a new business",
    quantity: 1,
  });
}

export default StripePayment;
