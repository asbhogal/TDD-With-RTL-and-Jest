import React from "react";
import ReactDOM from "react-dom/client";
import App from "../components/App";

register();

const   rootElement = document.getElementById("root"),
        root = ReactDOM.createRoot(rootElement);

root.render (
    <App />
)