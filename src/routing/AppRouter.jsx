import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getMovie, getMovies } from "../services/getMovies";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Tickets from "../pages/Tickets";
//import TicketsSelection from "../components/TicketsSelection";



const AppRouter = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length === 0) {
      getMovies()
        .then((response) => {
          setMovies(response);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // getParamsFromStorage();
  }, [movies]);

  // useEffect(()=> {
  //   getMovie().then(response => console.log(response)).catch(error => console.log(error))
  // },[])
  // return
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout movies={movies} />}>
          <Route index element={<Home movies={movies} />} />
          <Route index element={<Details />} />
          <Route path="ticket" element={ <Tickets/>} />
        </Route>
          {/* Aquí debemos relacionar las demás rutas con sus páginas */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

