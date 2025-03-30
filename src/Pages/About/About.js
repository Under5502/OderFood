import React from "react";
import "./About.scss";
import { useState } from "react";
import salad1 from "../../assets/salad7.jpg";
import salad2 from "../../assets/salad8.png";
import salad3 from "../../assets/salad9.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import appstore from "../../assets/appstore.png";
import googlePlay from "../../assets/ggplay.png";

function About() {
  const saladImages = [salad1, salad2, salad3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % saladImages.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? saladImages.length - 1 : prev - 1));
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>
            Our team of registered Master Chef and skilled professionals in the
            world Food organization.
          </h2>
          <p>
            Our Specialist in food Master you can book with them your Classes.
            Dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make.
          </p>
        </div>
        <div className="hero-image">
          <button className="prev-btn" onClick={handlePrev}>
            {"<"}
          </button>

          <img
            src={saladImages[currentIndex]}
            alt="Salad"
            className="slide-img"
          />
          <button className="next-btn" onClick={handleNext}>
            {">"}
          </button>
        </div>
      </section>

      {/* App Mockup */}
      <section className="app-mockup">
        <img src={image1} alt="App screen 1" className="mockup" />
        <img src={image2} alt="App screen 2" className="mockup" />

        <div className="app-info">
          <h3>App is Soon On App Store</h3>
          <p>
            Download our app available on app Store For both Android and iOS
            platforms. Our specialist UI/UX maintains a clean look & quality.
          </p>
          <div className="store-buttons">
            <img src={appstore} alt="App Store" />
            <img src={googlePlay} alt="Google Play" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h4>LET'S TALK</h4>
        <div className="about-hb">
          <h2>Want to Reserve a table?</h2>
          <button className="contact-btn">Contact us Now</button>
        </div>
        <hr />
        <p>
          We're a team of professionals excited about our customers to show them
          their amazing skills and expertness in food.
        </p>
      </section>
      <footer className="footer">
        <div className="footer-col">
          <h2>Taste</h2>
          <p>Restaurant & BBQ</p>
        </div>
        <div className="footer-col">
          <h2>Our services</h2>
          <ul>
            <li>Pricing</li>
            <li>Tracking</li>
            <li>Report a Bug</li>
            <li>Terms of services</li>
          </ul>
        </div>
        <div className="footer-col">
          <h2>Our Company</h2>
          <ul>
            <li>Reporting</li>
            <li>Get in Touch</li>
            <li>Management</li>
          </ul>
        </div>
        <div className="footer-col">
          <h2>Address</h2>
          <p>
            121 King St,
            <br /> VIC3000, US
          </p>
          <p>
            <strong>888-123-42278</strong>
          </p>
          <p>Info@example.com</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
