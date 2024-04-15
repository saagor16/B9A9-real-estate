import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Home/Home";
import Error from "./Error/Error";
import Login from "./Login/Login";
import Register from "./Register/Register";
import AuthProvider from "./providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import UpdateProfile from "./UpdateProfile/UpdateProfile";
import Profile from "./UserProfile/Profile";
import Single from "./Single/Single";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/single/:id",
        element:<Single></Single>,
        loader:() =>
        (fetch('../data.json')),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
