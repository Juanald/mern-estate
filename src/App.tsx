import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signin", element: <Signin /> },
  { path: "/about", element: <About /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/profile", element: <Profile /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
