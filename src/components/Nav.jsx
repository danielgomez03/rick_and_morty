import React from "react";
import SearchBar from "./SearchBar";
import "./Nav.css"
import { Link } from "react-router-dom";


const Nav = ({onSearch}) => {
return(
    <div className="Nav">

    <Link to="/home">
      <button>Home</button>
    </Link>

    <Link to="/about">
      <button>About</button>
    </Link>

    <Link to="/favorites">
      <button>Favorites</button>
    </Link>

    <SearchBar onSearch={onSearch} />

    {/* <button onClick={logout}>LogOut</button> */}
  </div>
);
};

export default Nav; 