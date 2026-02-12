// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import movieList from './data/movielist';

export default function App() {
  const movieGenres = movieList.map((singleMovie) => singleMovie.genre);
  return console.log(movieGenres);
}


