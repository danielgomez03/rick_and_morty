import React from "react"; 
import { Link } from "react-router-dom";
import style from "../styles/Nav.module.css"


const Nav = ({logout}) => {
return(
    <div className={style.nav}>

          <Link to="/home">
          <button className={style.button}>Home</button>
          </Link>

          <Link to="/about">
          <button className={style.button}>About</button>
          </Link>

          <Link to="/favorites">
          <button className={style.button}>Favorites</button>
          </Link>

        <button onClick={logout}>LogOut</button>

  </div>
);
};

export default Nav; 