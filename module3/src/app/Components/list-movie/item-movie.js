import React from "react";

export const ItemMovieComponent = ({movie}) => {
    return (
        <div className="movie">
            <img src='../../../../../../assets/poster/8.png' className="image"></img>
            <h3><span>{movie.name} </span> <span className="year">{movie.year}</span></h3>
            <p>{movie.tag}</p>
        </div>
    );
}