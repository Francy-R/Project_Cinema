import { useEffect, useState } from "react";
import { getMovie, getMovies } from "../services/getMovies";
import Header from "../components/Header";


const AppRouter = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
      .then((response) => {
        if (movies.length === 0) {
          setMovies(response.results);
          console.log(response)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  
    // getParamsFromStorage();
  }, [movies]);

  // useEffect(()=> {
  //   getMovie().then(response => console.log(response)).catch(error => console.log(error))
  // },[])
  // return
  return (
    <Header/>
  )
  
}



export default AppRouter