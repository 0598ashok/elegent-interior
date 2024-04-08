import React from "react";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Designs from "./Components/Designs";
import UploadImages from "./Components/UploadImages";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/designs" element={<Designs />} />
          <Route exact path="/9491178402" element={<UploadImages/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
