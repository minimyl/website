import React from "react";
import { Navbar, About, Portfolio, Home } from "./";
import {
  createBrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const Main = () => {


  return (
    <div id="main">
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
};

export default Main;
