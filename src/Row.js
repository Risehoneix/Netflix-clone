import React ,{useEffect, useState} from 'react'
import YouTube from 'react-youtube';


import axios from './axios';
import "./Row.css";
import movieTrailer from "movie-trailer";
//first it was not working due to  it wasn't links 
// it just somthing  with string it there was't any base lien for it 

const baseurl = "https://image.tmdb.org/t/p/original";

function Row( {title, fetchUrl, isLargeRow}) {
   
   
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    
    
    useEffect(() => {
     async function fetchData() {
         const request = await  axios.get(fetchUrl);
         console.log(request);
         setMovies(request.data.results)
        
          return request;
     }
     fetchData();
    }, [fetchUrl]);
    console.log(movies);

    const opts  ={
        height:"390",
        width:"100%",
        playerVars:{

            autoplay:1,
        }
    }
    const handleClick = (movie) => {
            if(trailerUrl)  {
                setTrailerUrl('');

            }
            else {
                movieTrailer( movie.title|| "")
                .then((url)=>{
                        const urlParams =  new URLSearchParams (new URL(url).search)
                       setTrailerUrl(urlParams.get('v'));
                })
                .catch((error) => console.log(error));
            }
    }
  

 
    return (
        <div className="row">
            <h2>{title}</h2>
         
                <div className="row_poster"> 
                
                     {movies.map(movie => (
                      
                    <img   key ={movie.id}
                        onClick = {() => handleClick(movie)}
                    className= {`row_posters ${isLargeRow && "row_posterLarge"}`}
                    src = {`${baseurl}${isLargeRow ? movie.poster_path:movie.backdrop_path }`} alt={movie.original_title} />
                           ))}

                </div>{trailerUrl &&<YouTube videoId={trailerUrl} opts={opts} /> }
       
           
        </div>
    )
}

export default Row
