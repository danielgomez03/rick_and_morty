import React from "react";
import { useState } from "react";
import style from "../styles/Form.module.css";
import title from "../assets/rick-and-morty-31013.png"

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;


const Form = ({login}) => {


    const [userData, setUserData] = useState({
          email: "",
          password: "",
        });

    const [errors, setErrors] = useState({
          email: "",
          password: "",
        });

    const handleChange = (event) => {

        setUserData({...userData, [event.target.name]: event.target.value});
        setErrors(validate({...userData, [event.target.name]: event.target.value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const aux = Object.keys(errors)
        if(aux.length===0){
          setUserData({
            email: "",
            password: "",
          })
          setErrors({
            email: "",
            password: "",
          })
          return login(userData);
        }
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
          errors.password = "password not valid";
        }
        return errors;
      }

    return(
      <div className={style.bckgrn}>
        <div className={style.container}>
            <form className={style.form} onSubmit={handleSubmit}>
              <div className={style.img_container}>
              <img src={title} className={style.title} alt={"Rick&Morty"}/>
              </div>
                <div className={style.inputs_container}>
                <label>Email: </label>
                <input name="email" value={userData.email} onChange={handleChange} placeholder=""></input>
                <p className={style.danger}>{errors.email}</p>
                <label>Password: </label>
                <input name="password" value={userData.password} onChange={handleChange} placeholder=""></input>
                <p className={style.danger}>{errors.password}</p>
                {Object.keys(errors).length === 0 ? (
                        <button type="submit" >Submit</button>
                ) : null}  
                </div>
      
            </form>
        </div>
        </div>
    );
};


export default Form;