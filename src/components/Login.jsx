import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
// const regexPassword =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;
                              
//                            {login}
export default function Login(        ) {
  // const [inputs, setInputs] = useState({
  //   email: "",
  //   password: "",
  // });
  // const [errors, setErrors] = useState({
  //   email: "",
  //   password: "",
  // });
  // function validate(inputs) {
  //   const errors = {};
  //   if (!inputs.email) {
  //     errors.email = "Debe haber un email";
  //   } else if (!inputs.password) {
  //     errors.password = "Debe haber un password";
  //   } else if (!regexEmail.test(inputs.email)) {
  //     errors.email = "Debe ser un email válido";
  //   } else if (!regexPassword.test(inputs.password)) {
  //     errors.password = "Debe ser un password válido";
  //   }
  //   return errors;
  // }

  // function handleChange(e) {
  //   setInputs({
  //     ...inputs,
  //     [e.target.name]: e.target.value,
  //   });
  //   setErrors(
  //     validate({
  //       ...inputs,
  //       [e.target.name]: e.target.value,
  //     })
  //   );
  // }
  // function handleSubmit(e){
  //   e.prevent.default()
  //   const aux = Object.keys(errors)
  //   if(aux.length===0){
  //     // enviamos fafafafaf
  //     setInputs({
  //       email: "",
  //       password: "",
  //     })
  //     setErrors({
  //       email: "",
  //       password: "",
  //     })
  //     login(inputs)
  //     return alert("OKKKKKKK")
  //   }
  //   return alert("Error")
  // }
  return (
    <div>
      <label>Password:</label>
      <input></input>
      <Link to="/home">
      <button>Ingresar</button>
      </Link>





      {/* <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          name="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder=""
        ></input>
        <p className="danger">{errors.email}</p>
        <label>Password: </label>
        <input
          name="password"
          value={inputs.password}
          onChange={handleChange}
          placeholder=""
        ></input>
        <p className="danger">{errors.password}</p>
        {Object.keys(errors).length === 0 ? (
          <Link to="/home">
            <button type="submit">Ingresar</button>
          </Link>
        ) : null}
      </form> */}
    </div>
  );
}
/*
Una etiqueta form que envolverá a todo el componente.
Una etiqueta label junto con un input para el email.
Una etiqueta label junto con un input para la password.
Un button con el texto "Submit".
*/
