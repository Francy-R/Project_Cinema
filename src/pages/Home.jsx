import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ movies = [] }) => {
  const navigate = useNavigate();
  return (
    <div>
      {movies.length ? (
        <section>
          {movies.map((item) => (
            <figure key={item.id} onClick={() => navigate(`movie/${item.id}`)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
              />
            </figure>
          ))}
        </section>
      ) : (
        <div>...Cargando</div>
      )}
    </div>
  );
};

export default Home;
