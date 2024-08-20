import React, { useEffect, useState } from "react";
import styles from "./row.module.css"; // Importing CSS module
import axiosInstance from "../../../Utility/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const request = await axiosInstance.get(fetchUrl);
        setMovie(request.data.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
        // Optionally, you could set an error state to show a message in the UI
      }
    })();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      try {
        const url = await movieTrailer(
          movie?.title || movie?.name || movie?.original_name
        );
        if (url) {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        } else {
          console.warn("No trailer found for this movie.");
        }
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={styles.row}>
      <h1>{title}</h1>
      <div className={styles.row__posters}>
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`${styles.row__poster} ${
              isLargeRow && styles.row__posterLarge
            }`}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
