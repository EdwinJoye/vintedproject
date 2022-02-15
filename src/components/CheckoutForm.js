import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios, { Axios } from "axios";

const CheckoutForm = (item) => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);
  const userId = "item.";

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElements = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElements, {
        name: { event },
      });
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        { stripeToken }
      );
      console.log(response.data);
      if (response.data.status === "succeeded") {
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="boxGlobaleAchat">
      <form className="container" onSubmit={handleSubmit}>
        <div className="boxDuHaut">
          <div className="résuméDeLaCommande">Résumé de la commande</div>
          <div className="boxDouble">
            <h1 className="boxTitre">Commande</h1>
            <div className="boxPrix">Prix €</div>
          </div>
          <div className="boxDouble">
            <h2 className="boxTitre">Frais protection acheteurs</h2>
            <div className="boxPrix">Prix €</div>
          </div>
          <div className="boxFraisDePortPrix">
            <h3 className="boxTitre">Frais de port</h3>
            <div className="boxPrix">2.OO €</div>
          </div>
        </div>
        <div className="boxVide"></div>
        <div className="boxDuBas">
          <div className="boxTotalPrix">
            <h4 className="boxTitreTotal ">Total</h4>
            <div className="boxPrixTotal">Prix €</div>
          </div>
          <div className="boxText">
            Il ne vous reste plus qu'une étape pour vous offrir ${item._id} 😍.
            Vous allez payer 13 € (frais de protection et frais de port inclus).
          </div>
          <div className="boxVide"></div>
          <CardElement className="boxNuméroDeCarte"></CardElement>
          <div className="boxPay">
            <input className="buttonPay " type="submit" value="Pay" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default CheckoutForm;
