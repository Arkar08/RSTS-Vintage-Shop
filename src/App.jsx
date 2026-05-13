import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Policy from "./pages/Policy";
import tiktok from "./assets/tiktok.png";
import ebay from "./assets/ebay.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";

function App() {
  return (
    <>
      <div className="annocuements">
        <p>Click the eBay icon for rare finds & best deals.</p>
        <div className="social-icons">
          <a href="https://ebay.us/m/h3jD5y">
            <img src={ebay} alt="ebay" className="imageList" />
          </a>
          <a href="https://www.tiktok.com/@rstsmm?_t=ZS-90ivYWzqCuY&_r=1">
            <img src={tiktok} alt="tiktokImage" className="imageList" />
          </a>
          <a href="https://www.facebook.com/share/17XZeCWg1Q/?mibextid=wwXIfr">
            <img src={facebook} alt="facebook" className="imageList" />
          </a>
          <a href="https://www.instagram.com/rsts_vintage?igsh=YjE4c3N0anl1amRl&utm_source=qr">
            <img src={instagram} alt="instagram" className="imageList" />
          </a>
        </div>
      </div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
