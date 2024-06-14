import { useDispatch } from 'react-redux';
import { addNowTrailer } from '../utils/movieSlice';
import { API_options } from '../utils/constants';
import { useEffect } from 'react'

const useMovieTrailer = (movieId) =>{

    const dispatch = useDispatch();
    const getMovieVideo = async () =>{
         
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_options);
  
        const json = await data.json();
        
        const filterData = json.results.filter(videos => videos.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
       
  
        dispatch(addNowTrailer(trailer));
    }
  
         useEffect(()=>{
        getMovieVideo();
             },[])
  
}

export default useMovieTrailer;