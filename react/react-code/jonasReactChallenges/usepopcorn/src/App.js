import { use, useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";
import { useKey } from "./useKey";
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const KEY = "3bfbb70b";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(()=>{
    return JSON.parse(localStorage.getItem('wached'))
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedID, setSelectedID] = useState(null);
  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal },
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          // console.log(data);
          if (data.Response === "False") throw new Error(data.Error);
          setMovies(data.Search);
        } catch (err) {
          // console.log(err);
          if (err.name !== "AbrotError") {
            setError(err.message);
            setError("");
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();
      setSelectedID(null)
    


      return function () {
        controller.abort();
      };
    },
    [query],
  );
  function handleDeleteWached(id) {
    setWatched((movies) => movies.filter((m) => m.imdbID !== id));
  }
  function handleAddWached(movie){
    setWatched((Wl) => [...Wl, movie]);

  }
  function handleCloseMovie(){
    setSelectedID(null)
  }
  useEffect(function(){
    localStorage.setItem('wached',JSON.stringify(watched))
  },[watched])
 

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {error && <ErrorMessage message={error} />}
          {isLoading && <Loader />}
          {!error && !isLoading && (
            <MovieList movies={movies} onSelectMovie={setSelectedID} />
          )}
        </Box>
        <Box>
          {selectedID ? (
            <MovieDetails
              selectedID={selectedID}
              onCloseMovie={handleCloseMovie}
              onAddWached={handleAddWached}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummery watched={watched} />
              <WachedMoviesList
                watched={watched}
                onDeleteWached={handleDeleteWached}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
function Loader() {
  return <p className="loader">Loading...</p>;
}
function ErrorMessage({ message }) {
  return <p className="error">⛔{message}</p>;
}
function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}
function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}
function Search({ query, setQuery }) {
  const inputEl=useRef(null)
  useKey('Enter',function(){
    if(document.activeElement===inputEl.current)return
      inputEl.current.focus()
      setQuery('')
  })
  // useEffect(function(){
  //   function callBack(e){
  //     if(e.code==='Enter')
  //     if(document.activeElement===inputEl.current)return
  //     inputEl.current.focus()
  //     setQuery('')

  //   }
  //   document.addEventListener('keydown',callBack)
  //   return()=>document.addEventListener('keydown',callBack)

  // },[])
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
function NumResult({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
function Movie({ movie, onSelectMovie }) {
  return (
    <li
      onClick={() =>
        onSelectMovie((id) => (id === movie.imdbID ? null : movie.imdbID))
      }
    >
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function WachedMoviesList({ watched, onDeleteWached }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WachedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWached={onDeleteWached}
        />
      ))}
    </ul>
  );
}
function WatchedSummery({ watched }) {
  const avgImdbRating = average(
    watched.map((movie) => movie.imdbRating),
  ).toFixed(1);
  const avgUserRating = average(
    watched.map((movie) => movie.userRating),
  ).toFixed(1);
  const avgRuntime = average(watched.map((movie) => movie.runtime)).toFixed(1);

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}
function WachedMovie({ movie, onDeleteWached }) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          className="btn-delete"
          onClick={() => onDeleteWached(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}
function MovieDetails({ selectedID, onCloseMovie, onAddWached, watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(null);

  const isWached = watched.map((m) => m.imdbID).includes(selectedID);
  const watchedUserRating = watched.find(
    (m) => m.imdbID === selectedID,
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const newWachedMovie = {
      imdbID: selectedID,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number.parseInt(runtime),
      userRating,
    };
    onAddWached(newWachedMovie)
    
    onCloseMovie();
  }
  useEffect(
    function () {
      async function getMoveieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`,
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMoveieDetails();
    },
    [selectedID],
  );
  useEffect(
    function () {
      if (!title) return;
      document.title = `movie | ${title}`;
      return function () {
        document.title = "usePopcorn";
      };
    },
    [title],
  );
  useKey('escape',onCloseMovie)
  //  useEffect(function () {
  //   function callBack (e) {
  //     if (e.code === "Escape") {
  //       onSelectMovie(null);
  //     }
  //   }
  
  //   document.addEventListener("keydown",callBack );
  //   return function(){
  //     document.removeEventListener("keydown",callBack )
  //   }
  // }, [onSelectMovie]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={() => onCloseMovie()}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span> *</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWached ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={() => handleAdd()}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>You rated this movie {watchedUserRating}</p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

//cd E:\project\react\react-code\jonasReactChallenges\usepopcorn
