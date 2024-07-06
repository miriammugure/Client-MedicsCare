import React, { useEffect, useState } from "react";
import "./Pharmacy.css";
import Pharmacyoutline from "./Pharmacyoutline";
import Title from "../../components/Title/Title";

function Pharmacy() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/meds/medicine")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMedicines(data.data);
        } else {
          console.log("Error fetching medicines:", data.message);
        }
      })
      .catch((error) => console.log("Error fetching medicines:", error));
  }, []);

  return (
    <div>
      <Title title="get your meds here" />

      <div className="pharmacyContainer">
        {medicines.length > 0 ? (
          medicines.map((currentMed) => (
            <Pharmacyoutline
              key={currentMed.id}
              image={currentMed.imageUrl}
              name={currentMed.name}
              price={currentMed.price}
            />
          ))
        ) : (
          <p>No medicines available</p>
        )}
      </div>
    </div>
  );
}

export default Pharmacy;
