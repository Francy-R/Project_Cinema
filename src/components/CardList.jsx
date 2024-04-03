import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardList({ movies = [] }) {
  const navigate = useNavigate();
  return (
    <div>
      {movies.length ? (
        <section>
          <div className="">
            {movies.map((item) => (
              <figure
                key={item.id}
                onClick={() => navigate(`movie/${item.id}`)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                />
              </figure>
            ))}
          </div>
        </section>
      ) : (
        <div>...Cargando</div>
      )}
    </div>
  );
}
