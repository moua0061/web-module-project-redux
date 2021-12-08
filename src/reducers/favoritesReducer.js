import { ADD_FAVORITES } from "../actions/movieActions";


const initialState = {
    favorites: [
        {
        title: 'movietitle',
        id: Date.now()
    },
    {
        title: 'movietitle',
        id: Date.now()
    }
    ],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default favoritesReducer;