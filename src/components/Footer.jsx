import "./Footer.css";
import { Link } from "react-router-dom";
import tiktok from "../assets/tiktok.png";
import ebay from "../assets/ebay.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-section">
          <h2>RSTS Vintage Shop</h2>
          <p>
            Worldwide shipping with tracking.Customer satisfaction is our top
            priority.
          </p>
          <div className="policy">
            <h3 className="policyText">Policy</h3>
            <ul>
              <li className="policyText">
                <Link to="/policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CATEGORIES */}
        <div></div>
        {/* <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li>Watched & Jewellery</li>
            <li>Sporting Goods</li>
            <li>Games & Camera</li>
            <li>Antique & Vintage items</li>
          </ul>
        </div> */}

        {/* CONTACT */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>
            📍Shop1,Mount Gravatt Sunday Market,Trash and Treasure,1644 Logan
            Rd,Mt Gravatt, 4122,QLD
          </p>
          <p>✉️ RSTSMM.com@gmail.com</p>
          <div className="social-icons">
            <a
              href="https://www.tiktok.com/@rstsmm?_t=ZS-90ivYWzqCuY&_r=1"
              className="tiktokIcon"
            >
              <img src={tiktok} alt="tiktokImage" className="imageList" />
            </a>
            <a href="https://ebay.us/m/h3jD5y">
              <img src={ebay} alt="ebay" className="imageList" />
            </a>
            <a href="https://www.facebook.com/share/17XZeCWg1Q/?mibextid=wwXIfr">
              <img src={facebook} alt="facebook" className="imageList" />
            </a>
            <a href="https://www.instagram.com/rsts_vintage?igsh=YjE4c3N0anl1amRl&utm_source=qr">
              <img src={instagram} alt="instagram" className="imageList" />
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
