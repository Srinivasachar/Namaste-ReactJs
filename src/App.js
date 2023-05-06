import React from "react";
import ReactDOM from "react-dom/client";
import NavbarContainer from "./components/NavbarContainer";
import Body from "./components/Body";

const AppContainer = () => {
  return (
    <div>
      <NavbarContainer />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContainer />);
