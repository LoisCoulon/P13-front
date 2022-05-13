import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home";
import "./main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import User from "./Pages/User/User";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
