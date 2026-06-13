import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components from the pages directory
import Navbar from "./Components/pages/Navbar";
import Home from "./Components/pages/Home";
import FeaturedItems from "./Components/pages/FeaturedItems";
import ShopBySport from "./Components/pages/ShopBySport";
import FeaturedBrands from "./Components/pages/FeaturedBrands";
import ReadyToGear from "./Components/pages/ReadyToGear";
import About from "./Components/pages/About";
import Footer from "./Components/pages/Footer";
import Products from "./Components/pages/Products";
import ContactUs from "./Components/pages/ContactUs"
import AboutUs from "./Components/pages/AboutUs";
import Contact from "./Components/pages/Contact";

function App() {
  // State for count (currently unused, consider removing if not needed)
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

     
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <ShopBySport />
              <FeaturedBrands />
              <FeaturedItems />
              <ReadyToGear />
              <About />
              <Contact />
              
            </>
          }
        />
         <Route path="/Products" element={<Products />} />
         <Route path="/Contactus" element={<ContactUs />} />
         <Route path="/AboutUs"  element={<AboutUs />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
