import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// const stripePromise = loadStripe(
//   "pk_test_51QnQzSA4N9NOGpc40RzDDNtwe30pRy21XgcipQvfHMc5vldTCPg7R1MyTkewkAxTrauzYDXsZ5MCd0eLNsp6Plnw00ZkWenois"
// );

const stripePromise = loadStripe("pk_test_51RmajWGf3MLlLMdgLWgzVxsZU6IR478W6WFcjFvBxF2l4tQNfJ3jTuyXwsm1KnPkNAmjkEsTpg2ClqylxR7FQPDr00gPuNN3xE");


createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>
);