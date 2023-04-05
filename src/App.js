import React from "react";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Preview from "./Components/Preview/Preview";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
