import React from "react";
import Booking from "../../components/Booking/Booking";
import Bmi from "../../components/BMI/Bmi";
import dueImg from "../../assets/expectant.png";
import "./Expectancy.css";

function Expectancy() {
  return (
    <div>
      <div className="expectancyContainer">
        <Bmi />
        <div className="dueDate">
          <div className="dueImg">
            <img src={dueImg} alt="an image of an expectant mother" />
          </div>
          <div className="dueForm">
            <form action="">
              <div className="dueGroup">
                <label htmlFor="pregnancysatrt">start date:</label>
                <input type="date" />
              </div>

              <button>see due date</button>

              <div className="dueGroup">
                <label htmlFor="pregnancysatrt">due date:</label>
                <input type="date" />
              </div>
            </form>
          </div>
        </div>
        <Booking />
      </div>
    </div>
  );
}

export default Expectancy;
