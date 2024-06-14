import React from 'react';
import Videotitle from './Videotitle';
import Videobg from './Videobg';
import { useSelector } from 'react-redux';

function Maincontainer() {
    const movies = useSelector((store) => store.movies?.nowPlaying);

    // Check if movies array exists and has elements
    if (!movies || movies.length === 0) return null;

    // Randomly select a movie from the array
    const randomIndex = Math.floor(Math.random() * movies.length);
    const mainMovie = movies[randomIndex];

    const { original_title, overview, id } = mainMovie;

    return (
        <div className="">
            <Videotitle title={original_title} overview={overview} />
            <Videobg movieId={id} />
        </div>
    );
}

export default Maincontainer;
