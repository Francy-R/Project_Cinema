import React from "react";

function CardCarousel({ movieInfo = {} }) {
  return (
    // Contenedor Principal
    <div className="relative h-46">
      <img
        className="w-full h-auto"
        src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
        alt=""
      />
      {/* Contenedor de Texto Centrado */}
      <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center">
        <p className="text-white text-xl font-bold px-2 py-1 text-center">
          {movieInfo.title || "Título Desconocido"}
        </p>
        <p className="text-white font-medium text-center">
          Titulo en Ingles: {movieInfo.original_title}
        </p>
        <p className="text-white font-medium text-center">
          Estreno: {movieInfo.release_date}
        </p>
      </div>
    </div>
  );
}

export default CardCarousel;
