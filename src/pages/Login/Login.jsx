import React from "react";
import "../Register/Register.css";
import Title from "../../components/Title/Title";
import regiterimg from "../../assets/register.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
function Login() {
  const validationSchema = Yup.object({
    email: Yup.string("email should be a string")
      .email("email must be valid")
      .required("email is required"),

    passWord: Yup.string("password must be a string")
      .required("password is required")
      .min(8, "password must be atleast 8 characters long"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
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
          <Title title="log in here" />
          <form
            action=""
            className="registerform"
            onSubmit={formik.handleSubmit}
          >
            <label htmlFor="email">email:</label>
            <input
              type="text"
              placeholder="johndoe@example.com"
              name="email"
              value={formik.values.email}
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
