import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "../src/Components/Cover_page/coverpage.css";
import "../src/Pages/MenuPage/menupage.css";
import Cover_page from "./Pages/Cover_page/Cover_page";
import Home_page from "./Pages/Cover_page/HomePage/homepage";
import Menu from "./Pages/MenuPage/menupage";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Cover_page />} />
        <Route path="/home" element={<Home_page />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
