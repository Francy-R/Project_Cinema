import axios from "axios";
import { endpoints } from "./endpoint";
import { data } from "autoprefixer";

export const getMovies = async () => {
  try {
    const { data } = await axios.get(endpoints.getAllMovies);
    return data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getMovie = async (idMovie) => {
  try {
    const { data } = await axios.get(endpoints.getMovie(idMovie));
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getTraillerMovie = async (idMovie) => {
  try {
    const { data } = await axios.get(endpoints.getAllMovie(idMovie));
    return data.results.find((item) => item.type.tolowerCase() == "trailer");
  } catch (error) {
    console.error(error);
  }
};
//   export const getVideoMovie = async (idMovie) => {
//       try {
//           const url = `
//   https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=${API_KEY}&language=es-ES`;

//           const { data } = await axios.get(url);
//           const video = data.results.find((item) =>
//             item.type.toLowerCase().includes("trailer")
//           );
//           return video;

//       } catch (error) {
//           console.log(error);
//           return null;
//       }

//   }
