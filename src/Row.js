import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import Swal from "sweetalert2";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  const [myTrailerUrl, setMyTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const movieClick = (movie) => {
    if (myTrailerUrl) {
      setMyTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search); //obtaining the parameters in the url after the question mark.
          setMyTrailerUrl(urlParams.get("v"));
        })
        .catch(
          () => {
            Swal.fire({
              title: "Sorry",
              text: "The trailer for this movie is not available 🥺",
              icon: "warning",
              confirmButtonText: "Ok",
            });
          }
          // alert("Trailer URl was not found"),
        );
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                onClick={() => movieClick(movie)}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
      {myTrailerUrl && <Youtube videoId={myTrailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
