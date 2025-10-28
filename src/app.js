import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// Css
import './index.css'
import Header from "./compontents/Header";


/*---- Compontents ---- */



const App = ()=>(
<Header/>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
