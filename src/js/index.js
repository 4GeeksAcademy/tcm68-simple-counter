//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App.jsx";

// include your styles into the webpack bundle
import "../styles/index.css";


//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
