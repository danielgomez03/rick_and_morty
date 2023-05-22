import React from "react";
import style from "../styles/Card.module.css"
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions"


const Card = (props) => {

   const {id, name, gender, species, origin, image, status, onClose, addFav, removeFav, myFavorites} = props

   const { pathname } = useLocation()

   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite =() => {
      // isFav ? removeFav(id) : addFav(props);
      // setIsFav(!isFav)
      if(isFav) {
         setIsFav(false)
         removeFav(id)
      }
      else {
         setIsFav(true)
         addFav(props)
      }
   }

   return (
      <div className={style.container}>
         <div className={style.cardContainer}>
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
            <div className={style.front}>
               <img className={style.img} src={props.image} alt={props.name} />
               <h2>{props.name}</h2>
            </div>
            <div className={style.back}>
               <Link className={style.link} to={`/detail/${props.id}`}>
                  <h2>{props.name}</h2>
               </Link>
               <h2>{props.species}</h2>
               <h2>{props.gender}</h2>
               <h2>{props.status}</h2>
               {
                  !pathname.includes('/favorites') &&
                  <button 
                     className={style.btn}
                     onClick={()=> onClose(id)}
                  >
                        X
                  </button>
               }
            </div>
         </div>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const MapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect(mapStateToProps, MapDispatchToProps)(Card);