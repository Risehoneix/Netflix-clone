import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import "./App.css";
import Nav from "./Nav";
import {BrowserRouter as Router, Switch, route} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Router path="/show">
      
        <h2>hello this is the test</h2>
      </Router>
      </Switch>
      <Banner />
  

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documtaries" fetchUrl={requests.fetchDocumnetaries} />
    </div>
    </Router>
  );
}

export default App;
