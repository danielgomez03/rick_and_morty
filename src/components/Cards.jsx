import React from "react";
import Card from './Card';
import "./Cards.css"

export default function Cards({onClose,characters}) {
   return(
      <div className="Cards">
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
   );
   }
