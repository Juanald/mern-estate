import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import Profile from "./pages/Profile.tsx";
import SignUp from "./pages/SignUp.tsx";
import Signin from "./pages/Signin.tsx";
import Header from "./components/Header.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

// const router = createBrowserRouter([
//   { path: "/", element: <Home />, errorElement: <ErrorPage /> },
//   { path: "/signin", element: <Signin />, errorElement: <ErrorPage /> },
//   { path: "/about", element: <About />, errorElement: <ErrorPage /> },
//   { path: "/signup", element: <SignUp />, errorElement: <ErrorPage /> },
//   { path: "/profile", element: <Profile />, errorElement: <ErrorPage /> },
//   { path: "*", element: <ErrorPage /> },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
