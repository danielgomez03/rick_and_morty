import React from "react";
import "./Nav.css"
import { Link } from "react-router-dom";


const Nav = ({logout}) => {
return(
    <div className="Nav">

          <Link to="/home">
          <button class="button" >Home</button>
          </Link>

          <Link to="/about">
          <button class="button">About</button>
          </Link>

          <Link to="/favorites">
          <button class="button">Favorites</button>
          </Link>

        <button onClick={logout}>LogOut</button>

  </div>
);
};

export default Nav; 