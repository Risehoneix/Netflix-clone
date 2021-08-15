const API_KEY = "66a303fb4d98057c4314dc94fddca547";
//sniped of codes
const requests= {   
    
    fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchmovie: `/movie/550?api_key=${API_KEY}`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  featchtheatres:`/discover/movie?api_key=${API_KEY}`,

   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&lanuguage=en-Us`,
  fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumnetaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,


}
export default requests;

