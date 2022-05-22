import React from "react";
//import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App tab="home" />);

// During an update, there's no need to pass the container again.
root.render(<App tab="profile" />);
