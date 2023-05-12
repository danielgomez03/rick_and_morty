import { ADD_FAV, REMOVE_FAV } from "./types"


const initialState = {
    myFavorites: []
}

const reducer = ( state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }

        case REMOVE_FAV:
            let deleteCharacter = state.myFavorites.filter(character => character.id !== Number(action.payload))
            return{
                ...state,
                myFavorites: deleteCharacter
            }
            
        default:
            return {
                ...state
            }
    }
}

export default reducer