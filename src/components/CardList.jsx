import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardList({ movies = [] }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" flex p-3  ">
        <h1 className="text-3xl font-bold ml-12">EN CARTELERA</h1>
      </div>
      <section className="flex justify-evenly flex-wrap  gap-y-10 p-7 ">
        {movies.length ? (
          movies.map((item) => (
            <figure key={item.id} onClick={() => navigate(`movie/${item.id}`)}>
              <img
                className="w-80 h-[28.2rem] object-cover"
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
              />
              <div className="  text-slate-500 ">
                <h1>{item.title}</h1>
                <h1>{item.original_title}</h1>
                <p> Estreno: {item.release_date}</p>
                <p>Genero:</p>
              </div>
            </figure>
          ))
        ) : (
          <div>...Cargando</div>
        )}
      </section>
    </div>
  );
}
