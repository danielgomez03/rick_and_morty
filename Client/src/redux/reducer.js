import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types"


const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = ( state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            let copyAllCharacters = [...state.allCharacters, action.payload];
            return {
                ...state,
                myFavorites: copyAllCharacters,
                allCharacters: [...copyAllCharacters]
            }

        case REMOVE_FAV:
            let deleteCharacter = state.myFavorites.filter(character => character.id !== Number(action.payload))
            return{
                ...state,
                myFavorites: deleteCharacter
            }

        case FILTER:
            let copyFilter = state.allCharacters.filter((character) => character.gender === action.payload)
            return {
                ...state,
                myFavorites: copyFilter
            }

        // case FILTER: 
        // let copyFilter = state.allCharacters.filter((character) => character.gender === action.payload)
        // return {
        //     ...state,
        //     myFavorites: 
        //     action.payload === "allcharacters"
        //     ? [...state.allCharacters]
        //     : copyFilter
        // }

        case ORDER:
            const orderCharacters = state.allCharacters.sort((a, b)=>{
                if(action.payload === "A"){
                    if(a.id < b.id) return -1;
                    if(b.id < a.id) return 1;
                    return 0
                } else {
                    if(a.id < b.id) return 1;
                    if(b.id < a.id) return -1
                    return 0
                }
            })
            return {
                ...state,
                myFavorites: [...orderCharacters]
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer