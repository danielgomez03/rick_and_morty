import React, { useState } from "react";
import "./SearchBar.css"

 const SearchBar = ({onSearch}) => {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className="SearchBar">
         <input onChange={handleChange} type='search' />
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}

export default SearchBar;