import Card from "../components/Card";
import homeImg from "../assets/home.png";
import './Home.css';
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import watch from '/watch.png'
import golf from '/golf-clubs.png'
import jewelery from '/jewelery.png'
import figure from '/figure-toys.png'

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
            <p>Rare Vintage Finds Direct from Japan.</p>
          </div>
          <img src={homeImg} alt="product" />
        </section>

        <h2>Featured Categories</h2>

        <div className="grid">
          <Card title="Watches And Clocks" image={watch} />
          <Card title="Jewelry" image={jewelery} />
          <Card title="Golf Clubs" image={golf} />
          <Card title="Figures And Toys" image={figure} />
        </div>
      </div>
  );
}