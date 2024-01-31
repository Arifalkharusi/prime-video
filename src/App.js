import React from "react";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Preview from "./Components/Preview/Preview";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Play from "./Components/Play/Play";
import Search from "./Components/Search/Search";
import ScrollToTop from "./Components/ScrollToTop";
import Favourite from "./Components/Favourite/Favourite";

function App() {
  return (
    <div className="app">
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/play" element={<Play />} />
        <Route path="/search" element={<Search />} />
        <Route path="/fav" element={<Favourite />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
