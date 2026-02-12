import './App.css';
import movieList from './data/movielist';

export default function App() {
  const movieGenres = movieList.map((singleMovie) => singleMovie.genre);
  return console.log(movieGenres);
}


