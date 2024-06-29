import React from "react";
import "./Register.css";
import Title from "../../components/Title/Title";
import regiterimg from "../../assets/register.jpg";
function Register() {
  return (
    <div>
      <div className="registerContainer">
        <div className="formContainer">
          <Title title="register here" />
          <form action="">
            <label htmlFor="firstName">first name:</label>
            <input type="text" placeholder="john" />

            <label htmlFor="lastName">last name:</label>
            <input type="text" placeholder="doe" />

            <label htmlFor="email">email:</label>
            <input type="text" placeholder="johndoe@example.com" />

            <label htmlFor="phoneNumber">phone number:</label>
            <input type="text" placeholder="011045678" />

            <label htmlFor="password">password:</label>
            <input type="password" />

            <div className="selectdropdown">
              <p>who are you</p>
              <select id="role" name="role">
                <option value="doctor">Doctor</option>
                <option value="outpatient">Outpatient</option>
                <option value="nurse">Nurse</option>
              </select>
            </div>

            <button type="submit">submit</button>
          </form>
        </div>
        <div className="registerIMg">
          <img
            src={regiterimg}
            alt="an animated image of a doctor and a patient"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
