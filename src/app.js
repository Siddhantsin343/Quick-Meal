import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// Css
import "./index.css";

/*---- Compontents ---- */
import Header from "./compontents/Header";
import Body from "./compontents/Body";

const App = () => (
  <>
    <Header />
    <Body />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
