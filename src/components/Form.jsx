import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
            return alert("OKKKKKKK")
            }
        return alert("Error")
        };

    const validate = (userData) => {
        const errors = {};
        if (!userData.email) {
          errors.email = "Debe haber un email";
        } else if (!userData.password) {
          errors.password = "Debe haber un password";
        } else if (!regexEmail.test(userData.email)) {
          errors.email = "Debe ser un email válido";
        } else if (!regexPassword.test(userData.password)) {
          errors.password = "Debe ser un password válido";
        }
        return errors;
      }

    return(
        <div>
            <form onSubmit={handleSubmit}>
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