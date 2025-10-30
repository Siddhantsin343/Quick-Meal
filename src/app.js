import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// Css
import "./index.css";

/*---- Compontents ---- */
import Header from "./compontents/Header";
import Body from "./compontents/Body";
import Footer from "./compontents/Footer";

const App = () => (
  <>
    <Header />
    <Body />
    <Footer/>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
