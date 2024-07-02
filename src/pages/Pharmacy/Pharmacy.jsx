import React from "react";
import med from "../../data/med";
import Pharmacyoutline from "./Pharmacyoutline";
import "./Pharmacy.css";
import Title from "../../components/Title/Title";
function Pharmacy() {
  return (
    <div>
      <Title title="get your meds here" />

      <div className="pharmacyContainer">
        {med.map((currentmed, i) => (
          <Pharmacyoutline
            key={i}
            image={currentmed.image}
            name={currentmed.name}
            price={currentmed.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Pharmacy;
