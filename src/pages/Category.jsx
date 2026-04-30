import Card from "../components/Card";
import homeImg from "../assets/home.png";
import './Category.css';
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Category() {

  const {pathname} = useLocation()

  useLayoutEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

  return (
    <div className="container">
      <h1>Categories</h1>

      <div className="grid">
        <Card title="Watches And Clock" image={homeImg} />
        <Card title="Japanese Knives" image={homeImg} />
        <Card title="Games And Camera" image={homeImg} />
        <Card title="Binoculars" image={homeImg} />
        <Card title="Golf Clubs" image={homeImg} />
        <Card title="Figure And Toys" image={homeImg} />
        <Card title="Fragrance" image={homeImg} />
        <Card title="Hand Tools" image={homeImg} />
        <Card title="Jewelry" image={homeImg} />
      </div>
    </div>
  );
}