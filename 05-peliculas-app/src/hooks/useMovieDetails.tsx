import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { CreditsResponse, Cast } from '../interfaces/creditsInterfaces';

interface MovieDetails {
    cast: Cast[]
    isLoading: boolean
    movieFull?: MovieFull
}

export const useMoviesDetails = (movieID: number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async () => {
        const movieDatailsPromise = movieDB.get<MovieFull>(`/${movieID}`);
        const castPromise = movieDB.get<CreditsResponse>(`/${movieID}/credits`);

        const [movieDetailsResp, castPromiseResp] = await Promise.all([movieDatailsPromise, castPromise]);

        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        })
    }

    useEffect(() => {

        getMovieDetails();
    }, [])

    return {
        ...state
    }
}