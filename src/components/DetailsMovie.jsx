import React, { useEffect } from "react";

function DetailsMovie({ dataMovie = {} }) {
  useEffect(() => {
    console.log(dataMovie);
  }, [dataMovie]);
  return (
    <div className="">
      {Object.entries(dataMovie).length && (
        <section className="flex gap-14">
          <img
            className="w-28"
            src={`https://image.tmdb.org/t/p/w500${dataMovie.poster_path}`}
            alt={dataMovie.title}
          />
          <div className="flex flex-col gap-y-4">
            <h4 className="font-bold">{dataMovie.title}</h4>
            <p>{dataMovie.title}</p>
            <div className="flex gap-4">
              <p className="bg-gray-600 text-white p-2 rounded-sm font-medium">
                B
              </p>
              <p className="bg-gray-700 text-white p-2 rounded-sm">
                {dataMovie.runtime} min
              </p>
              <p className="bg-sky-950 text-white p-2 rounded-sm">
                Accion y Aventura
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default DetailsMovie;
