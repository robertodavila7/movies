import React, { useState, useEffect } from 'react';

import MovieItem from '../MovieItem/MovieItem';
import { MOVIE_API, SEARCH_MOVIE_API } from '../../API/api';
import './MovieList.css';

const MovieList = (props) => {
    const [movieList, setMovieList] = useState([]);
    const getMovies = async (api) => {
        const results = await fetch(api);
        const data = await results.json();
        setMovieList(data.results);
    };
    useEffect(() => {
        if (!props.search) {
          const api = MOVIE_API.replace('PAGE_TERM', props.page);
          getMovies(api);
        } else {
          let api = SEARCH_MOVIE_API.replace('PAGE_TERM', props.page);
          api = api.replace('QUERY_TERM', props.search);
          getMovies(api);
        }
      }, [props.search, props.page]);
    return (
        <div className="movie-container">
            {movieList && movieList.map(data => <MovieItem key={data.id} {...data} />)}
        </div>
    );
};

export default MovieList;