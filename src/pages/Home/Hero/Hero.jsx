import React from "react";
import "./Hero.css";
import heroImg from "../../../assets/her.webp";
function Hero() {
  return (
    <div>
      <div className="heroContainer">
        <div className="heroImage">
          <img src={heroImg} alt="an image of doctors" />
        </div>
        <div className="HeroInfo">
          <div className="heroText">
            {" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae aut necessitatibus temporibus nulla alias asperiores?
            </p>
          </div>
          <div className="cta">
            <div className="cta1">
              {" "}
              <p>sign up &rarr;</p>
            </div>
            <div className="cta1">
              {" "}
              <p>sign in &rarr;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
