import react, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/404";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div></div>
    </div>
  );
}

export default App;
