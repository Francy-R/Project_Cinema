import React from "react";
import { Outlet } from "react-router-dom";

const SuccesSummary = () => {

//Dentro de un useEffect deben implementar una lógica para que el componente SuccesSummary no sea visible en la página de detalles

  return (
    <>
          <div>SuccesSummary</div>
          <Outlet/>
    </>
  );
};

export default SuccesSummary;
