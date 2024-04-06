import React from 'react'
import TicketsSelection from '../components/TicketsSelection'
import PurchaseSummary from '../components/PurchaseSummary'

const Tickets = () => {
  return (
    <div>
      <TicketsSelection/>
      <PurchaseSummary dataMovie={{titulo: "Spider-manSin Camino a casa ESP", complejo: "Macro Plaza del Mar", fecha: "07 de julio de 2023", funcion: "7:30 PM"}}/>
    </div>
  )
}

export default Tickets

