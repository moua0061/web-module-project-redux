export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = 'ADD_MOVIE';
export const ADD_FAVORITES = 'ADD_FAVORITES';

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (movie) => {
    return(
        {type: ADD_MOVIE, payload: movie}
    );
}

export const addFavorites = (movie) => {
    return(
        {type: ADD_FAVORITES, payload:movie}
    )
}