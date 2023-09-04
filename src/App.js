import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import NavbarContainer from "./components/NavbarContainer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppContainer = () => {
  return (
    <div>
      <NavbarContainer />
      <Outlet />
    </div>
  );
};

const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppContainer/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/",
        element: <Body/>
      },{
        path:"/about",
        element: <Suspense fallback={<h1>Loading....</h1>}><About/></Suspense>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/restaurant/:id",
        element: <RestaurantMenu/>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
