import homeImg from "../assets/home.png";
import './About.css';
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function About() {

  const {pathname} = useLocation()

  useLayoutEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

  return (
    <div className="container">
      <h1>About Us</h1>

      <div className="about">
        <img src={homeImg} alt="shop" />
        <div>
          <h3>Our Story</h3>
          <p>
            RSTS Vintage Shop was founded in 2020 to provide quality products at affordable prices.
          </p>
          <p>
            We sell JDM vintage accessories and sporting goods.
          </p>
        </div>
      </div>

      <div className="grid">
        <div className="box">
          <h2>Our Mission</h2>
          <p>Our mission is to provide high-quality mobile phones and accessories at affordable prices while ensuring excellent customer service and a smooth shopping experience for every customer.</p>
        </div>
        <div className="box">
          <h2>Our Vision</h2>
          <p>Our vision is to be the leading retailer of mobile phones and accessories in the region, known for our commitment to customer satisfaction and product quality.</p>
        </div>
      </div>
    </div>
  );
}