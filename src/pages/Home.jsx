import "../stylesheet/Home.css";
import { Link } from "react-router-dom";
import Encryptedsvg from "../assets/svgs/encrypted.svg";
import Supportsvg from "../assets/svgs/support.svg";
import Truck from "../assets/svgs/local shipping.svg";
import { useState } from "react";
import { useEffect, useRef } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="home-hero">
        <div className="hero-contents">
          <h3 className="hero-title">KODACLUXE</h3>
          <p className="hero-sub-title">Home For all Your Luxury Timepieces</p>

          <div className="hero-button">
            <a href="" className="hero-btn">
              EXPLORE WATCHES
            </a>
          </div>
        </div>
      </section>
      {/* <!-- men or women watches --> */}
      <section ref={sectionRef} className="gender-section scroll-reveal">
        <div className="menswatch">
          <div className="gender-text">
            <h2>MEN'S WATCHES</h2>
            <p>Designed for every moment.</p>
            <Link to="/shop?category=Men">SHOP MEN →</Link>
          </div>
        </div>

        <div className="womenswatch">
          <div className="gender-text">
            <h2>WOMEN'S WATCHES</h2>
            <p>Elegance in every detail.</p>
            <Link to="/shop?category=Women">SHOP WOMEN →</Link>
          </div>
        </div>
      </section>

      {/* <!--  why-choose-us--> */}

      <section className="why-choose-us">
        <div className="why-choose-heading">
          <h1>Why Choose Us...</h1>
        </div>
        <div className="cards-wrapper">
          <div className="cards">
            <div>
              <img src={Encryptedsvg} alt="" />
            </div>
            <div>
              <h3>Secure Payments</h3>
              <p>Pay over time,interest free and trusted options.</p>
            </div>
          </div>
          <div className="cards">
            <div>
              <img src={Supportsvg} alt="" />
            </div>
            <div>
              <h3>Real Support</h3>
              <p>
                We're here when you need us before, during and after purchase.
              </p>
            </div>
          </div>
          <div className="cards">
            <div>
              <img src={Truck} alt="" />
            </div>
            <div>
              <h3>Fast Delivery</h3>
              <p>We offer Nationwide Delivery</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-preview">
        <div className="preview-texts">
          <h4>ABOUT</h4>
          <p>
            More Than Watches. It's a Lifestyle. At KodacLuxe, we curate
            timepieces that represent more than just time - they represent you.
            Quality, authenticity. and elegance in every detail.
          </p>
          <div className="preview-btn">
            <Link to="/about" className="learn-more">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
