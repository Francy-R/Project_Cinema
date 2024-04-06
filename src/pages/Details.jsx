import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsMovie from "../components/DetailsMovie";
import { getMovie, getTraillerMovie } from "../services/getMovies";
//import Video from "../components/Video";

function Details() {
  const [movie, setMovie] = useState({});
  const { idMovie } = useParams();

  // const idMovie = 1011985; //localstorage.getItem(como lo guarde vannesa)
  useEffect(() => {
    if (Object.entries(movie).length === 0) {
      getMovie(idMovie) //id movie
        .then((response) => {
          setMovie(response);
          console.log(response);
        })
        .catch((error) => console.log(error));
    }
  }, []);
  return (
    <div className="m-20">
      <DetailsMovie dataMovie={movie} />
    </div>
  );
}
export default Details;
//
// function Video() {
//   const [video, setVideo] = useState();
//   useEffect(() => {
//     getTraillerMovie(1011985)
//       .then((response) => {
//         console.log(response);
//         setVideo(response.key);
//       })
//       .catch((error) => console.error(error));
//   }, []);
// }
