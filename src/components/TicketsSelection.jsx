import React, { useState } from "react";

 function TicketsSelection({ dataMovie }) {
   console.log(dataMovie);

   const ContadorRectangular = () => {
    const [contador, setContador] = useState(0);

     const incrementarContador = () => {
       setContador(contador + 1);
     };

     const restarContador = () => {
       setContador(contador - 1);
     };

     return (
       <div className="flex items-center space-x-4 border border-solid border-gray-900 rounded-lg">
         <button
           className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l-lg"
          onClick={restarContador}
        >
          -
         </button>
         <div className="text-center text-sm">{contador}</div>
         <button
           className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-1 px-2 rounded-r-lg"
          onClick={incrementarContador}
         >
           +
         </button>
       </div>
     );
   };

   return (
    
     <section className="flex gap-14 mt-16 ml-12">
       <div>
         <h2 className="text-xl font-bold">Selecciona tus boletos</h2>
         <span>Puedes comprar 10 boletos máximo por transacción.</span>

         <div className="flex items-center justify-between mt-4">
           <p className="text-sm font-bold">ADULTO $71 </p>
           <ContadorRectangular />
         </div>

         <div className="flex items-center justify-between mt-4">
           <p className="text-sm font-bold">NIÑOS $56</p>
           <ContadorRectangular />
        </div>

         <div className="flex items-center justify-between mt-4">
           <p className="text-sm font-bold">3ERA EDAD $56</p>
           <ContadorRectangular />
         </div>
       </div>
     </section>
   );
 }

 export default TicketsSelection;

// import React from 'react';

//  const MovieCard = ({ movie }) => {
//    // movie' es el obj. con la info. de la película

//    // Función quecalcula el precio con iva incluido
//    const calcularPrecioConIVA = () => {
//      const precioSinIVA = movie.precio;
//      const iva = 0.16; // IVA del 16%
//      const precioConIVA = precioSinIVA * (1 + iva);
//      return precioConIVA.toFixed(2); // redondeo decimales
//    };

//   return (
//       <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold">{movie.titulo}</h2>
//        <p className="text-gray-700 mt-2">{movie.descripcion}</p>
//        <div className="mt-4">
//          <p className="text-gray-800">Precio: ${movie.precio}</p>
//         <p className="text-gray-800">IVA incluido: ${calcularPrecioConIVA()}</p>
//        </div>
//        <button
//          className="bg-gray-300 text-gray-500 font-bold py-2 px-4 mt-4 cursor-not-allowed rounded opacity-50"
//          disabled
//        >
//          Botón Inactivo
//        </button>
//     </div>
//    );
//  };

// export default MovieCard;