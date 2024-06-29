import React from "react";
import "../Register/Register.css";
import Title from "../../components/Title/Title";
import regiterimg from "../../assets/register.jpg";
function Login() {
  return (
    <div>
      <div className="registerContainer">
        <div className="formContainer">
          <Title title="log in here" />
          <form action="">
            <label htmlFor="email">email:</label>
            <input type="text" placeholder="johndoe@example.com" />

            <label htmlFor="password">password:</label>
            <input type="password" />

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

export default Login;
