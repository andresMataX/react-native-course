import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBResponse, Movie } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[]
    popular: Movie[]
    topRated: Movie[]
    upComing: Movie[]
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upComing: [],
    });

    const getMovies = async () => {

        const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
        const popularPromise = movieDB.get<MovieDBResponse>('/popular');
        const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');
        const upComingPromise = movieDB.get<MovieDBResponse>('/upcoming');

        const [nowPlaying, popular, topRated, upComing] = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upComingPromise
        ]);

        setMoviesState({
            nowPlaying: nowPlaying.data.results,
            popular: popular.data.results,
            topRated: topRated.data.results,
            upComing: upComing.data.results,
        })

        setIsLoading(false);
    }

    useEffect(() => {

        // now_playing
        getMovies();
    }, [])

    return {
        ...moviesState,
        isLoading
    }
}