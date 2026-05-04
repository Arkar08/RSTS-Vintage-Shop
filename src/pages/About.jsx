import homeImg from "../assets/home.png";
import "./About.css";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="container">
      <h1>About Us</h1>

      <div className="about">
        <img src={homeImg} alt="shop" />
        <div>
          <h3>Our Store</h3>
          <p>
            It started in 2014 with a small table at a local weekend market and
            a few carefully chosen vintage pieces. Back then, every sale felt
            personal each item had a story, and every customer left with more
            than just a purchase. At the same time, an eBay store quietly came
            to life. Late nights were spent researching, listing, packing, and
            learning what collectors truly value. Slowly, a reputation began to
            grow honest descriptions, rare finds, and reliable service. Over the
            years, that small start turned into something much bigger. From
            local markets to worldwide shipping, the mission has stayed the
            same: source unique, authentic pieces and connect them with people
            who appreciate their history. Today, it’s not just about selling ,
            it’s about trust, passion, and bringing rare finds from around the
            world to the right hands.
          </p>
        </div>
      </div>
    </div>
  );
}
