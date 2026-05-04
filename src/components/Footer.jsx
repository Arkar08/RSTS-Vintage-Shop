import "./Footer.css";
import { Link } from "react-router-dom";
import tiktok from "../assets/tiktok.png";
import ebay from "../assets/ebay.png";
import facebook from "../assets/facebook.png";
import social from "../assets/social.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-section">
          <h2>RSTS Vintage Shop</h2>
          <p>
            Worldwide shipping with tracking.Customer satisfaction is our top priority.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <h3>Policy</h3>
          <ul>
            <li><Link to="/policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>Watched & Jewellery</li>
            <li>Sporting Goods</li>
            <li>Games & Camera</li>
            <li>Antique & Vintage items</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📍Shop1,Mount Gravatt Sunday Market,Trash and Treasure,1644 Logan Rd,Mt Gravatt, 4122,QLD</p>
          <p>📞 +61 493 385 869</p>
          <p>✉️ RSTSMM.com@gmail.com</p>
          <div className="social-icons">
              <a href="https://www.tiktok.com/@rstsmm?_t=ZS-90ivYWzqCuY&_r=1">
                <img
                  src={tiktok}
                  alt="tiktokImage"
                  className="imageList"
                />
              </a>
              <a href="https://ebay.us/m/h3jD5y">
                <img
                  src={ebay}
                  alt="ebay"
                  className="imageList"
                />
              </a>
              <a href="https://www.facebook.com/share/17XZeCWg1Q/?mibextid=wwXIfr">
                <img
                  src={facebook}
                  alt="facebook"
                  className="imageList"
                />
              </a>
              <a href="https://wa.me/61493385869">
                <img
                  src={social}
                  alt="social"
                  className="imageList"
                />
              </a>
            </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 RSTS Vintage Shop. All Rights Reserved.</p>
      </div>
    </footer>
  );
}