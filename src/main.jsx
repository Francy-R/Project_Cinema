import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./routing/AppRouter";
import PaymentSummary from "./components/PaymentSummary";
//import MovieCard from './components/PaymentSummary'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PaymentSummary />
  </React.StrictMode>
);


