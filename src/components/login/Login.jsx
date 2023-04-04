import React from "react";
import "../register/register.css";
import { registerSchema } from '../schemas/index'
import { useFormik } from 'formik'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [setFirstName] = useState("")
  const [setLastName] = useState("")
  const [setEmail] = useState("")
  const [setPassword] = useState("")
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
     onSubmit: values => {
      console.log("form values", values);
     },
     validate: values => {
      
     },
    
    validationSchema : registerSchema
  });
console.log("form values", formik.values)

const navigate = useNavigate();



      
 
  return (
    <div className="container">
      <div className="left-container-login">
        {/* <img src="https://img.freepik.com/free-photo/colonial-style-house-night-scene_1150-17925.jpg?size=626&ext=jpg&ga=GA1.2.2134358197.1654262863&semt=sph" alt="background-image" /> */}
        <h1>Feel the comfort of your Home away from Home at Lakeside Hotels</h1>
      </div>
      <div className="right-container">
        <div className="register-container">

        <h2> Don't Have An Account Yet?<span><a style={{ fontSize: "1.3rem", color:"blue", cursor:"pointer"}}
        onClick={()=>navigate('/register')}> Sign up</a></span></h2>
      <form className="form" onSubmit={formik.handleSubmit}
          autoComplete="off">
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        />
      <button type="submit" disabled={true}>Sign in</button>
      
      
    </form>
        </div>
        </div>
    </div>
  );
};

export default Login;
