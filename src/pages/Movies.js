import { useState } from "react";
import FormMovie from "../components/FormMovie";
import Movie from "../components/Movie";

function Movies() {
  const [movies, setMovies] = useState([]);

  const saveMovie = (newTitle) => {
    // console.log('Save Movie dari parent ' + newTitle)
    setMovies((currentState) => {
      return [
        ...currentState,
        { id: currentState.length + 1, title: newTitle },
      ];
    });
  };

  const deleteMovie = (id) => {
    console.log(`id yang ingin di hapus ${id}`);
    setMovies((currentState) => {
      return currentState.filter((movie) => {
        if (movie.id !== id) {
          return movie;
        }
      });
    });
  };

  return (
    <div>
      <FormMovie saveMovie={saveMovie} />

      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
