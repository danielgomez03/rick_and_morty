import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import style from "../styles/Nav.module.css"
import title from "../assets/rick-and-morty-31013.png"
import menuIcon from "../assets/icoBtnDropMenu.png"




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

          

          <div className={style.dropdown}>
            <button className={style.dropbtn}>
            <img src={menuIcon} className={style.BurgerIcon} alt={"paila"}/>
            </button>
            <div className={style.dropdownContent}>
              <Link to="/home">
              <button className={style.dropDButton}>Home</button>
              </Link>

              <Link to="/about">
              <button className={style.dropDButton}>About</button>
              </Link>

              <Link to="/favorites">
              <button className={style.dropDButton}>Favorites</button>
              </Link>
              <button className={style.dropDButton} onClick={logout}>LogOut</button>
            </div>
            
          </div>
        

  </div>
);
};

export default Nav; 