import React from "react";
import "./Bmi.css";
import Title from "../Title/Title";
import bmiimg from "../../assets/bmi.jpeg";

function Bmi() {
  return (
    <div>
      <div className="bmiContainer">
        <form className="bmiform">
          <Title title="calculate your BMI here" />
          <div className="inputs">
            <div className="bmigrp">
              <label htmlFor="weight">weight(KG)</label>
              <input type="number" placeholder="49" />
            </div>
            <div className="bmigrp">
              <label htmlFor="height">height(M)</label>
              <input type="number" placeholder="1.3" />
            </div>
          </div>

          <div className="flex">
            <button>calculate bmi</button>
            <p>your bmi will show here</p>
          </div>
        </form>
        <div className="bmiimg">
          <img src={bmiimg} alt="image a person measuring weight" />
        </div>
      </div>
    </div>
  );
}

export default Bmi;
