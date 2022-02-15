import CheckoutForm from "../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Navigate } from "react-router-dom";

const Payment = ({ token }) => {
  const stripePromise = loadStripe(
    "pk_test_51KTQJVEeTeeHVINL7y3RuMe3FiKGHmTkpm6N3W3Je7C6BMtH08lnI0MiEgRrnbEtx7aOTNqQcH8r5MjGpzumTnyp00WpVybudc"
  );
  return token ? (
    <Elements stripe={stripePromise}>
      <CheckoutForm></CheckoutForm>
    </Elements>
  ) : (
    <Navigate to="/login"></Navigate>
  );
};
export default Payment;
