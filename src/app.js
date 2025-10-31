import React, { Children } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Css
import "./index.css";

/*---- Compontents ---- */
import Header from "./compontents/Header";
import Body from "./compontents/Body";
import Footer from "./compontents/Footer";

// Page Compontent
import About from "./compontents/About"
import Contact from "./compontents/Contact"
import Error from "./compontents/Error"

const App = () => (
  <>
    <Header />
    <Outlet/>
    <Footer/>
  </>
);


const appRouter = createBrowserRouter([
  {
    path :"/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Body/>
      },
  {
    path :"/about",
    element : <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
    ],
    errorElement: <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/> );
