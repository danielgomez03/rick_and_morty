import React, { useState } from "react";
import style from "../styles/SearchBar.module.css"


const SearchBar = ({onSearch}) => {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className={style.searchBar}>

         <input onChange={handleChange} type='search' />
         <button onClick={()=>onSearch(id)}>put in</button>
      </div>
   );
}



export default SearchBar;