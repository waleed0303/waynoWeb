import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../../componnets/errorPage/errorPage";
import Contact from "../../pages/contact/contact";
import Home from "../../pages/home/home";
import About from "../../pages/about/about";
import Courier from "../../pages/courier/courier";
import RecoverPickup from "../../pages/RecoveryPickup/recoveryPickup";
import Signin from "../../pages/signin/signin";
import Signup from "../../pages/signup/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "courier",
        element: <Courier />,
      },
      {
        path: "recoverpickup",
        element: <RecoverPickup />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);
interface props {}
const RootNavigator: React.FC<props> = () => {
  return <RouterProvider router={router} />;
};

export default RootNavigator;
