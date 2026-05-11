import Card from "../components/Card";
import './Category.css';
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import watch from '/watch.png'
import japanese from '/japanese-knives.png'
import game from '/game-camera.png'
import binocular from '/binoculars.png'
import golf from '/golf-clubs.png'
import figure from '/figure-toys.png'
import fragrance from '/fragrance.png'
import handtool from '/hand-tools.png'
import jewelery from '/jewelery.png'

export default function Category() {

  const {pathname} = useLocation()

  useLayoutEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

  return (
    <div className="container">
      <h1>Categories</h1>

      <div className="grid">
        <Card title="Watches And Clock" image={watch} />
        <Card title="Japanese Knives" image={japanese} />
        <Card title="Games And Camera" image={game} />
        <Card title="Binoculars" image={binocular} />
        <Card title="Golf Clubs" image={golf} />
        <Card title="Figure And Toys" image={figure} />
        <Card title="Fragrance" image={fragrance} />
        <Card title="Hand Tools" image={handtool} />
        <Card title="Jewelry" image={jewelery} />
      </div>
    </div>
  );
}