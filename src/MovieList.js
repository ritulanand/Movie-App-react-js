import React from "react";
import Moviecard from "./Moviecard";

function MovieList(props){
   
    
        const {movies,onIncStars, onDecStars, onClickFav, onClickAddtocart} =  props;
        console.log("obov", props);
          
        return(
            <div className="main">
                {movies.map((movie) => (
                <Moviecard movies = {movie}
                           key = {movie.id}
                           onIncStars = {onIncStars}
                            onDecStars = {onDecStars}
                            onClickFav = {onClickFav}
                            onClickAddtocart = {onClickAddtocart}/>

            ))}  
          
            </div>
        )
    
}

export default MovieList;

// App
// MovieList  state defined redneredd
// Moviecard  