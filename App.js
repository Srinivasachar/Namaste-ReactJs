import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("h1",{id: "parent"},
             React.createElement("div",{id: "child"},
             [React.createElement("h1", {}, "H1 - children of parent"),
             React.createElement("h2", {}, "H2 Tag")]));



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);