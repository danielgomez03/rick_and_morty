import React from "react";
import style from "../styles/Cards.module.css"
import Card from "./Card";
import SearchBar from "./SearchBar";

export default function Cards({onClose,characters, onSearch}) {
   return(
      <div>
            <SearchBar  onSearch={onSearch} />
         <div className={style.cards}>
            {characters.map((character,index) => {
            return( 
               <Card key={character.id} 
               id={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={(onClose)}/>
         )})}
      </div>
      </div>
   );
   }
