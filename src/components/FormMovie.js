import React, { useState } from "react";
import MyButton from "./MyButton";

function FormMovie(props) {
  const { saveMovie } = props;

  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [author, setAuthor] = useState("");
  const [tahun, setTahun] = useState("");
  const [url, setUrl] = useState("");

  const save = (e) => {
    e.preventDefault(); //function ini mencegah page ke-refresh
    saveMovie(title, synopsis, author, tahun, url); // memanggil function dari parent
    setTitle("");
    setAuthor("");
    setSynopsis("");
    setUrl("");
    setTahun("");
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1 className="bbok mt-5">
          <span style={{ color: "green" }}>Book </span>Store
        </h1>
        <div className="judul">
          <form className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Judul Buku"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                value={synopsis}
                onChange={(e) => setSynopsis(e.target.value)}
                placeholder="Synopsis"
              />
            </div>
            <div className="col-12">
              <input
                type="url"
                className="form-control"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Url"
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                value={tahun}
                onChange={(e) => setTahun(e.target.value)}
                placeholder="Tahun Rilis"
              />
            </div>

            <div className="col-12">
              <button onClick={save} className="btn btn-dark text-light">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FormMovie;
