import MyButton from "./MyButton";

function Movie(props) {
  const { movie, deleteMovie } = props;
  const removeMovie = () => {
    console.log("delete movie");
    removeMovie(movie.id);
  };

  return (
    <div className="card">
      <img src={movie.url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <h6 className="card-title text-muted">
          <b>Author: </b>
          {movie.author}
        </h6>{" "}
        <h6 className="card-title text-muted">
          <b>Synopsis: </b>
          {movie.synopsis}
        </h6>{" "}
        <h6 className="card-title text-muted">
          <b>Tahun: </b>
          {movie.tahun}
        </h6>{" "}
        <a href="#" className="btn btn-dark text-light">
          Buy
        </a>
        <MyButton
          title="Delete"
          className="btn btn-dark text-light"
          funcClick={removeMovie}
        />
      </div>
    </div>
  );
}

export default Movie;
