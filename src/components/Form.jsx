import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../styles/Form.module.css";

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;


const Form = ({Login}) => {

    const [userData, setUserData] = useState({
          email: "",
          password: "",
        });

    const [errors, setErrors] = useState({
          email: "",
          password: "",
        });

    const handleChange = (event) => {
        const data = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [data]: value});
        setErrors(validate({...userData, [data]: value}));
    };

    const handleSubmit = (e) => {
        e.prevent.default()
        const aux = Object.keys(errors)
        if(aux.length===0){
            setUserData({
            email: "",
            password: "",
            });

            setErrors({
            email: "",
            password: "",
            });

            Login(userData)
            return alert("OK")
            }
        return alert("Error")
        };

    const validate = (userData) => {
        const errors = {};
        if (!userData.email) {
          errors.email = "Needs to be an email";
        } else if (!userData.password) {
          errors.password = "Needs to be a password";
        } else if (!regexEmail.test(userData.email)) {
          errors.email = "email not-valid";
        } else if (!regexPassword.test(userData.password)) {
          errors.password = "password valid";
        }
        return errors;
      }

    return(
        <div className={style.container}>
            <form className={style.form} onSubmit={handleSubmit}>
                <label>Email: </label>
                <input name="email" value={userData.email} onChange={handleChange} placeholder=""></input>
                <p className="danger">{errors.email}</p>
                <label>Password: </label>
                <input name="password" value={userData.password} onChange={handleChange} placeholder=""></input>
                <p className="danger">{errors.password}</p>
                {Object.keys(errors).length === 0 ? (
                    <Link to="/home">
                        <button type="submit">Submit</button>
                    </Link>
                ) : null}        
            </form>
        </div>
    );
};


export default Form;