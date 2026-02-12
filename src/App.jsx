// Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import movieList from './data/movielist';

export default function App() {
    const movieGenres = movieList.map((singleMovie, index) => {
      return <option key={index} value={singleMovie.genre}>
      {singleMovie.genre}
      </option>
    })


 
  return <div className='container'>
            <header>
             <h1>Movie list</h1>
             <p>Seleziona un genere per visionare i film disponibili</p>
            </header>
            <main>
              <div className="input-group mb-3">
                <select className="form-select" id="inputGroupSelect02">
                  {movieGenres}
                </select>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Genere</label>
              </div>
            </main>
         </div>
}


