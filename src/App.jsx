import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';
import Policy from "./pages/Policy";

function App() {
  return (
    <>
      <div className="annocuements">
        <p>Click the eBay icon for rare finds & best deals.</p>
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