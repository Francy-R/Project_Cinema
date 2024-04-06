import React, { useEffect } from "react";
function DetailsMovie({ dataMovie = {} }) {
  /*   useEffect(() => {
    console.log(dataMovie);
  }, [dataMovie]);
   */
  return (
    <div className="flex justify-around">
      {Object.entries(dataMovie).length && (
        <section className="flex gap-14 ">
          <img
            className="w-28"
            src={`https://image.tmdb.org/t/p/w500${dataMovie.poster_path}`}
            alt={dataMovie.title}
          />
          <div className="flex flex-col gap-y-4">
            <h4 className="font-bold text-xl">{dataMovie.title}</h4>
            <p>{dataMovie.title} (EUA,2024) </p>
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

      <section className="flex flex-col">
        <h4 className="font-bold text-xl">Horarios disponibles 07-julio </h4>
        <span className="font-light">Elige el horario que prefieras</span>
        <div className="flex flex-col mt-3">
          <p className="font-medium">Macro plaza del Mar</p>
          <div className="flex gap-2 mt-4">
            <button class="bg-transparent hover:bg-sky-950 text-sky-950 font-light hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">
              18:00
            </button>
            <button class="bg-transparent hover:bg-sky-950 text-sky-950 font-light hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
              19:30
            </button>
            <button class="bg-transparent hover:bg-sky-950 text-sky-950 font-light hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
              21:05
            </button>
          </div>
          <button class="bg-[#C2C3D0] hover:bg-[#cbccdb] text-white  py-2 px-4 rounded-full mt-4">
            Seleccionar Boletos
          </button>
        </div>
      </section>
    </div>
  );
}
export default DetailsMovie;
// function Video({ video }) {
//   return (
//     <div>
//       <h1>Trailer</h1>
//       {video && (
//         <iframe src={`https://www.youtube.com/embed/${video}`}></iframe>
//       )}
//     </div>
//   );
// }

//export default Video;
