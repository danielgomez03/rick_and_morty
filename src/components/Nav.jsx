import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import style from "../styles/Nav.module.css"
import title from "../assets/rick-and-morty-31013.png"




const Nav = ({logout}) => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

return(
    <div className={style.nav}>

          <div className={style.img_container}>
          <img src={title} className={style.logo} alt={"Rick&Morty"}/>
          </div>

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