import dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.API_KEY;
const requests = {
  fetchNetflixOriginals: {
    title: "NETFLIX ORIGINALS",
    fetchUrl: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  fetchTrendingNow: {
    title: "Trending Now",
    fetchUrl: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    fetchUrl: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchDocumentariesMovies: {
    title: "Documentaries Movies",
    fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
};

export default requests;
