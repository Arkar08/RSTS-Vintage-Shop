import "./Contact.css";
import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import tiktok from "../assets/tiktok.png";
import ebay from "../assets/ebay.png";
import facebook from "../assets/facebook.png";
import social from "../assets/social.png";

export default function Contact() {
  const { pathname } = useLocation();

  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(data);
    setLoading(true);
    if(data.email === "" || data.name === "" || data.message === "") {
      alert("Please fill in all fields.");
      setLoading(false);
      return;
    }else{
      const serviceId = "service_02wpntk";
       const templateId = "template_r659lum";
      const pubicKey = "mfJVHmBNr3uuFQ9Pp";
      // const serviceId = "service_1286kal";
      // const templateId = "template_34dy3jh";
      // const pubicKey = "_ZI7TYPFjfJoKQPc2";
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        to_name: "RSTS Vintage Team",
        message: data.message,
      };
      try {
      emailjs
        .send(serviceId, templateId, templateParams, pubicKey)
        .then((response) => {
          if (response.status === 200) {
            alert("Email sent successfully.");
          }
          setData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("error email send", error);
          alert("Failed to send email.");
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    }
  };

  return (
    <div className="container contact">
      <div className="info">
        <h2>Get in Touch</h2>
        <p>Phone: 091234567</p>
        <p>Email: saleshop@gmail.com</p>
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

      <form className="form" onSubmit={sendMessage}>
        <input
          placeholder="Your Name"
          value={data.name}
          onChange={(e) =>
            setData({ ...data, name: e.target.value })
          }
        />

        <input
          placeholder="Email"
          value={data.email}
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
        />

        <textarea
          placeholder="Message"
          value={data.message}
          onChange={(e) =>
            setData({ ...data, message: e.target.value })
          }
        ></textarea>

        <button className="btnEnd" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}