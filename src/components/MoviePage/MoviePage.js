import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET_MOVIE_API,  } from '../../API/api';
import { POSTER_API, POSTER_PLACEHOLDER } from "../../API/api";

import './MoviePage.css';

const MoviePage = () => {
    const { id } = useParams();
    const [movideDetails, setMovieDetails] = useState();
    useEffect(async () => {
        const api = GET_MOVIE_API.replace('ID_TERM', id);
        const data = await fetch(api);
        const movie = await data.json();
        movie.poster_path = movie.poster_path ? POSTER_API + movie.poster_path : POSTER_PLACEHOLDER;
        setMovieDetails(movie);
    }, [id]);
    return (
        <section className="movie-page">
            {movideDetails && (
                <div className="movie-details">
                    <h1>{movideDetails.title}</h1>
                    <div className="details-container">
                        <img src={movideDetails.poster_path} alt={movideDetails.title} />
                        <div className="overview">
                            <h2>Overview</h2>
                            <p>{movideDetails.overview}</p>
                            <h4>Genres</h4>
                            {movideDetails.genres.map(ele => {
                                return (
                                    <span className="tag" key={ele.id}>
                                        {ele.name}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default MoviePage;