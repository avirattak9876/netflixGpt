import { API_options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';


const useNowPlaying = () =>{
       
  const dispatch = useDispatch();

  const getNowPlaying = async() =>{
          
     const data = await fetch("https://api.themoviedb.org/3/movie/now_playing",API_options);

     const json = await data.json();
     console.log(json);
    
     dispatch(addNowPlayingMovies(json.results)); 
  }

  useEffect( () =>{
        getNowPlaying();
  },[])

}

export default useNowPlaying;