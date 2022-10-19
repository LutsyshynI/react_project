import React, {useEffect, useState} from 'react';

import {movieService} from "../../services/movie.service";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesList = () => {
    let [movies, setMovies] = useState([]);
    useEffect(()=> {
        const fetchMovies = async () => {
            const movies = movieService.getAll()
            setMovies(movies.result)
        }
       fetchMovies().catch(console.error)
    }, [])
    return (
        <div>
            {movies?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    )

}
export {MoviesList}