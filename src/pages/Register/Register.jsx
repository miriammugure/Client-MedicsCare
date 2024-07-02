import React from "react";
import "./Register.css";
import Title from "../../components/Title/Title";
import regiterimg from "../../assets/register.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
function Register() {
  const validationSchema = Yup.object({
    firstName: Yup.string("name must be a string").required(
      "first name is required",
    ),
    lastName: Yup.string("name must string").required("last name is required"),
    email: Yup.string("email should be a string")
      .email("email must be valid")
      .required("email is required"),

    passWord: Yup.string("password must be a string")
      .required("password is required")
      .min(8, "password must be atleast 8 characters long"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      passWord: "",
    },
    onSubmit: (formState) => {
      console.log(formState);
    },
    validationSchema: validationSchema,
  });
  return (
    <div>
      <div className="registerContainer">
        <div className="formContainer">
          <Title title="register here" />
          <form
            action=""
            className="registerform"
            onSubmit={formik.handleSubmit}
          >
            <label htmlFor="firstName">first name:</label>
            <input
              type="text"
              placeholder="john"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p>{formik.errors.firstName}</p>
            )}
            <label htmlFor="lastName">last name:</label>
            <input
              type="text"
              placeholder="doe"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p>{formik.errors.lastName}</p>
            )}

            <label htmlFor="email">email:</label>
            <input
              type="text"
              placeholder="johndoe@example.com"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p>{formik.errors.email}</p>
            )}

            <label htmlFor="phoneNumber">phone number:</label>
            <input
              type="text"
              placeholder="011045678"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <p>{formik.errors.phoneNumber}</p>
            )}

            <label htmlFor="password">password:</label>
            <input
              type="password"
              name="passWord"
              value={formik.values.passWord}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.passWord && formik.errors.passWord && (
              <p>{formik.errors.passWord}</p>
            )}

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
