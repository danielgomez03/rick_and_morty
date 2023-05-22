import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types"


const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = ( state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            case 'ADD_FAV':
            return { 
                ...state,
                myFavorites: action.payload, 
                allCharacters: action.payload };

        case REMOVE_FAV:
                return { 
                    ...state, 
                    myFavorites: action.payload 
                    };

        case FILTER:
            let copyFilter = state.allCharacters.filter((character) => character.gender === action.payload)
            return {
                ...state,
                myFavorites: copyFilter
            }

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








        // case FILTER: 
        // let copyFilter = state.allCharacters.filter((character) => character.gender === action.payload)
        // return {
        //     ...state,
        //     myFavorites: 
        //     action.payload === "allcharacters"
        //     ? [...state.allCharacters]
        //     : copyFilter
        // }