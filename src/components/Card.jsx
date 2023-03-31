import React from "react";
import "./Card.css"
import { Link } from "react-router-dom";

 const Card = (props) => {
   return (
      <div className="Card">
         <button onClick={()=>props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}>
         <h2>{props.name}</h2>
         </Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt={props.name} />
      </div>
   );
}

export default Card;