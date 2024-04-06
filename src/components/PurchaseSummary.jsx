import React from 'react'
function PurchaseSummary({dataMovie}) {

  //Función quecalcula el precio con iva incluido
  const calcularPrecioConIVA = () => {
      const precioSinIVA = dataMovie.precio;
      const iva = 0.16; // IVA del 16%
      const precioConIVA = precioSinIVA * (1 + iva);
      return precioConIVA.toFixed(2);
  };

  return (
      <div className="flex justify-center mt-4">
          <section className="bg-gray-100 flex gap-18 shadow-md">
              <img className="w-28 h-auto" src="https://image.tmdb.org/t/p/w500/wmnVOIaTsGcRpZ9rL2msbtqi3C.jpg"></img>
              <div>
                  <h2 className="text-xl font-bold mt-4 mb-6">Resumen de compra</h2>
                  <p className='font-bold'>Pelicula: Spider-manSin Camino a casa ESP </p>
                  <p className='font-bold'>Complejo: Macro Plaza del Mar </p>
                  <p className='font-bold'>Fecha: 07 de julio de 2023 </p>
                  <p className= "font-bold">Funcion: 7:30 PM</p>
                  <p className="text-gray-700 mt-4 mb-6">Se realizará un cambio por servicio por cada boleto dentro de <br/> la orden.</p>
                  <h4 className='font-bold'>TOTAL (IVA incluido):
                  </h4>
                  <span className="font-size: 14 rem font-bold">$0</span>
                
              </div>
             
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">{dataMovie.titulo}</h2>
                <p className="text-gray-700 mt-2">{dataMovie.complejo}</p>
            {/* <div className="mt-4">
            <p className="text-gray-800">Precio: ${dataMovie.precio}</p>
                <p className="text-gray-800">IVA incluido: ${calcularPrecioConIVA()}</p>
            </div> */}
            
              <button
              className="bg-blue-800 text-gray-500 font-bold py-3 px-12 mt-16 cursor-not-allowed rounded-full opacity-50"
              disabled
               >
                Continuar
               </button>
               
              </div>
              </section>
              </div>
  );
};

export default PurchaseSummary
