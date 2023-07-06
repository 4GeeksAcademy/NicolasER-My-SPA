//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
]);

//render your react application
ReactDOM.render(<router />, document.querySelector("#app"));
