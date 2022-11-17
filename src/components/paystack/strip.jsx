import React, { useState, useEffect } from "react";
import "./App.css";
import{loadStripe}  from "@stripe/stripe-js"

const stripePromise = loadStripe("sk_test_51M4wMGCvRnhRTWsxZkrJzdKMFKSI38Agc6Y8CtV35V5HlRsLT1UzGgBXuNmienLNMrR36wEBhmzEpUo4R36VcQz000n111yQXi")

const ProductDisplay = ({handleClick}) => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <form  action="http://localhost/foundation/create-checkout-session.php" method="POST">
      <button type="submit" onClick={handleClick}>
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export const Strip=()=> {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleClick = async (event) =>{

    const stripe = await stripePromise;

    const  response = await fetch(".http://localhost/foundation/create-checkout-session.php",{

      method:"POST"
    });
    const session = await response.json()

    const result  = await stripe.redirectToCheckout({
      sessionId :session.id
    })

  }

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}