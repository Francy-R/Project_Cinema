import axios from "axios";
import {endpoints} from "./endpoint"

export const getMovies = async () => {
    try {
      const { data } = await axios.get(
        endpoints.getAllMovies
      );
      console.log(data)
      return data;
      
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  
  export const getMovie = async (idMovie) => {
    try {
        const { data } = await axios.get(endpoints.getMovie(id));
        console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return {};
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