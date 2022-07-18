import React from "react";
import { Link } from "react-router-dom";
import { POSTER_API, POSTER_PLACEHOLDER } from "../../API/api";

import './MovieItem.css';

const MovieItem = ({id, title, poster_path, overview, vote_average}) => {
    const imageSrc = poster_path ? POSTER_API + poster_path : POSTER_PLACEHOLDER;
    return (
        <Link to={"/movie/" + id}>
            <div className="movie">
                <img src={imageSrc} alt={title} width="100%" />
                <div className="movi-info">
                    <h3>{title}</h3>
                    <span>{vote_average}</span>
                </div>
                <div className="movie-overview">
                    <h4>Overview</h4>
                    <p>{overview}</p>
                </div>
            </div>
        </Link>
    );
}

export default MovieItem;