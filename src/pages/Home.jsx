import Card from "../components/Card";
import homeImg from "../assets/home.png";
import './Home.css';
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const {pathname} = useLocation()

  useLayoutEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])
  
  return (
    <div className="container">
      <section className="hero">
        <div>
          <h1>Welcome to RSTS Vintage Shop</h1>
          <p>Best quality products at affordable prices</p>
        </div>
        <img src={homeImg} alt="product" />
      </section>

      <h2>Featured Categories</h2>

      <div className="grid">
        <Card title="Watches And Clock" image={homeImg} />
        <Card title="Golf Clubs" image={homeImg} />
        <Card title="Games And Camera" image={homeImg} />
        <Card title="Figure And Toys" image={homeImg} />
      </div>
    </div>
  );
}