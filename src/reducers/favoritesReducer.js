import { ADD_FAVORITES } from "../actions/movieActions";


const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default reducer;