import CheckoutForm from "../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const Payment = (item) => {
  const stripePromise = loadStripe(
    "pk_test_51KTQJVEeTeeHVINL7y3RuMe3FiKGHmTkpm6N3W3Je7C6BMtH08lnI0MiEgRrnbEtx7aOTNqQcH8r5MjGpzumTnyp00WpVybudc"
  );
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm></CheckoutForm>
    </Elements>
  );
};
export default Payment;
