import React from "react";
import "./Pharmacy.css";
function Pharmacyoutline({ image, name, price }) {
  return (
    <div>
      <div className="medCard">
        <div className="medImg">
          <img src={image} alt={`an image of ${name}`} />
        </div>
        <div className="nameprice">
          <p>{name}</p>
          <p>${price}</p>
        </div>
        <div className="btncard">
          <button>buy now</button>
        </div>
        <div className="medCart">
          <div className="btncart">
            <button>+</button>
          </div>

          <div className="btncart">
            <p>0</p>
          </div>
          <div className="btncart">
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pharmacyoutline;
