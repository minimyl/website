import React from "react";
import { Navbar, Portfolio, Contact, About, Footer } from "./";
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
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default Main;
