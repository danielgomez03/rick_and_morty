import React from "react";
import "./Card.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { addFav, removeFav } from "../redux/actions/actions";

 const Card = (props) => {

   const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         props.removeFav(props.id);        
      } else {
         setIsFav(true);
         props.addFav(props);
      }
   };

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);


   return (
      <div className="Card">
         <button onClick={()=>props.onClose(props.id)}>X</button>
         {
         isFav ? (
         <button onClick={handleFavorite}>❤️</button>
            ) : (
         <button onClick={handleFavorite}>🤍</button>
            )
         }
         <Link to={`/detail/${props.id}`}>
         <h2>{props.name}</h2>
         </Link>
         {/* <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2> */}
         <h2>{props.origin}</h2>
         <img class="img" src={props.image} alt={props.name} />
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
     return{
      addFav: (ch) => dispatch(addFav(ch)),
      removeFav: (id) => dispatch(removeFav(id)),
     } 
};

const  mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   };
};

export default connect( mapStateToProps, mapDispatchToProps)(Card);