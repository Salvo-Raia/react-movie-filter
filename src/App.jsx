// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import movieList from './data/movielist';
import { useEffect, useState } from 'react';

export default function App() {
    // Array generi evitando doppioni // 
    const movieGenres = []; 

    for (let i = 0; i < movieList.length; i++) {
      const currentGenre = movieList[i].genre; 
      if (!movieGenres.includes(currentGenre)) {
        movieGenres.push(currentGenre)
      }
    }
    // Array di opzioni per select //
    const movieSelectItems = movieGenres.map((genre, index) => <option key={index} value={genre}>{genre}</option>)
    // Lettura valore select 
    const handleGenreSelection = (e) => {setSelectedGenre(e.target.value)}
    const handleMovieSearch = (e) => {setMovieSearch(e.target.value)}
    // Aggiornamento stato genere 
    const [selectedGenre, setSelectedGenre] = useState("");
    const [filteredGenre, setFilteredGenre] = useState(movieList); 
    const [movieSearch, setMovieSearch] = useState("");
    // useEffect e render lista 
    useEffect(
      () => {
        let updatedFilteredList; 
        // Cerca per genere
        (selectedGenre === "" || selectedGenre === "Tutti") ? updatedFilteredList = movieList :  updatedFilteredList = movieList.filter(movie => movie.genre === selectedGenre); 
        
        if (movieSearch === "" && (selectedGenre === "" || selectedGenre === "Tutti")) {
          updatedFilteredList = movieList;
        } else {
          updatedFilteredList = updatedFilteredList.filter(movie => movie.title.toLowerCase().includes(movieSearch.toLocaleLowerCase()));
        }

        setFilteredGenre(updatedFilteredList);
      },
      [selectedGenre, movieSearch]
    )


  return <div className='container'>
            <header>
             <h1>Movie list</h1>
             <p>Seleziona un genere per visionare i film disponibili</p>
            </header>
            <main>
              <div className="input-group mb-3">
                <select className="form-select" id="movie-genre-select" value={selectedGenre} onChange={handleGenreSelection}>
                <option value="Tutti">Tutti</option>
                  {movieSelectItems}
                </select>
                <label className="input-group-text" htmlFor="movie-genre-select">Genere</label>
              </div>
              <div className="input-group">
                <input id='cerca-titolo' type="text" className="form-control" placeholder="Es. Interstellar" aria-label="Cerca titolo" aria-describedby="addon-wrapping" onChange={handleMovieSearch} />
              </div>
              <div>
                <ul className='list-group'>
                {filteredGenre.map((movie, index) => <li key={index} className='list-group-item d-flex justify-content-between'><strong className='movie-title'>{movie.title}</strong><span className='movie-genre small'>{movie.genre}</span></li>)}
                </ul>
              </div>
            </main>
         </div>
}
