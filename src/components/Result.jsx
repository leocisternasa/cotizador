import React from 'react';

const Result = ({ cantidad, plazo, totalLoanCost }) => {
  return (
    <div className="resultado">
      <h2>Cotización de su crédito:</h2>
      <p>La cantidad solicitada es: $ {cantidad}</p>
      <p>A pagar en: $ {plazo} Meses</p>
      <p>Su pago mensual es de: $ {Math.round(totalLoanCost / plazo)}</p>
      <p>El costo total de su crédito es de: $ {totalLoanCost}</p><p>El costo por intereses es de: $ {totalLoanCost - cantidad}</p>

    </div>
  )
}

export default Result;