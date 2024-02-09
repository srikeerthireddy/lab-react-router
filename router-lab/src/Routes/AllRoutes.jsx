// eslint-disable-next-line no-unused-vars
import React from 'react';
import Home from '../Pages/Home';
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import{Route,Routes} from "react-router-dom";

const AllRoutes=()=> {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
    </Routes>
  )
}

export default AllRoutes
