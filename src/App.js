import React from "react";
import ReactDOM from "react-dom/client";
import NavbarContainer from "./components/NavbarContainer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

const AppContainer = () => {
  return (
    <div>
      <NavbarContainer />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppContainer/>
  },
  {
    path:"/about",
    element: <About/>
  },
  {
    path:"/contact",
    element: <Contact/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
