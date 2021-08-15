import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './request';
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);
      useEffect( () => {
         async function fetchData() {
                const request = await axios.get(requests.fetchNetflixOriginals)
                setMovie (
                    request.data.results[
                      Math.floor(Math.random() * request.data.results.length)  
                    ]
                );
                return request;
         }
         fetchData();

      } , []);
      console.log(movie);
     function trunction (str,n) {
    return str?.length > n ? str.substring(0, n-1) + "..." : str;
}
    return (
     <header className="banner" style={
         {
             backgroundSize:"cover",
             backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center" ,
            
            }
     }>

         <div className="banner_contents">
            <h1 className="banner_title">{movie?.title||movie?.name|| movie?.original_name}</h1>
         {/* title*/}
         <div className="banner_button_container">
             <button className="banner_button">Play</button> 
             <button className="banner_button">My List</button>
         </div>
         {/*div> 2 buttons  */}
         <h1 className="banner_desciption"> {trunction(movie?.overview, 150)}</h1>
         {/* description */}</div>
       <div className="banner--fadebootom"></div>
     </header>

       

    )
}

export default Banner
