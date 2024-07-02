import React from "react";
import Bmi from "../../components/BMI/Bmi";
import "./Patient.css";
function Patient() {
  return (
    <div>
      <div className="patientContainer">
        <Bmi />
      </div>
    </div>
  );
}

export default Patient;
