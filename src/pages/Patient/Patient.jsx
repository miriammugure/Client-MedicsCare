import React from "react";
import Bmi from "../../components/BMI/Bmi";
import Booking from "../../components/Booking/Booking";
import "./Patient.css";
function Patient() {
  return (
    <div>
      <div className="patientContainer">
        <Bmi />
        <Booking />
      </div>
    </div>
  );
}

export default Patient;
