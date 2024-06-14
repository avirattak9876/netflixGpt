import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

function Videobg({ movieId }) {
    useMovieTrailer(movieId);
    const trailerVideo = useSelector((store) => store.movies.trailers);

    return (
        <div>
            <iframe
                className="w-screen aspect-video absolute top-0"
                src={
                    "https://www.youtube.com/embed/" +
                    trailerVideo?.key +
                    "?autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key +
                    "&controls=0&showinfo=0&modestbranding=1&rel=0&quality=hd1080"
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                
            ></iframe>
        </div>
    );
}

export default Videobg;
