import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// Css
import './index.css'

/*---- Compontents ---- */
import Header from "./compontents/Header";



const App = ()=>(
<Header/>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
