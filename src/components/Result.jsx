import React from 'react';

const Result = ({ cantidad, plazo, totalLoanCost }) => {
  return (
    <div className="resultado">
      <h2>Cotización de su crédito:</h2>
      <p>La cantidad solicitada es: $ {cantidad}</p>
      <p>A pagar en: $ {plazo} Meses</p>
      <p>Su pago mensual es de: $ {Math.ceil(totalLoanCost / plazo)}</p>
      <p>El costo total de su crédito es de: $ {Math.ceil(totalLoanCost)}</p><p>El costo por intereses es de: $ {Math.ceil(totalLoanCost - cantidad)}</p>

    </div>
  )
}

export default Result;