import React from 'react';
import { totalCost } from '../helpers'

const CotForm = ({ cantidad, setCantidad, plazo, setPlazo, setTotalLoanCost, setCotFormError, cotFormError }) => {


  const calculateLoan = (e) => {
    e.preventDefault();
    if (cantidad === 0 || plazo === "") {
      setCotFormError(true);

    } else if (cotFormError) {
      setCotFormError(false)
    }

    const totalLoanCost = totalCost(cantidad, plazo);
    setTotalLoanCost(totalLoanCost);
    console.log(totalLoanCost);
  }


  return (
    <>
      <form onSubmit={calculateLoan}>

        <div className="column">
          <div>
            <div>Cantidad Préstamo</div>
            <div>Préstamo mínimo: $100</div>
            <input type="number" placeholder="Ej: 100" min="100"
              onChange={(e) => setCantidad(e.target.value)}></input>
          </div>
          <div>
            <label>Cuotas mensuales</label>
            <select onChange={(e) => setPlazo(e.target.value)}>
              <option value="">Número de cuotas</option>
              <option value="3">3 Coutas</option>
              <option value="6">6 Coutas</option>
              <option value="12">12 Coutas</option>
              <option value="24">24 Coutas</option>
            </select>
          </div>
        </div>
        <div className="btnSubmit">
          <input type="submit" value="Calcular valor cuota"></input>

        </div>
      </form>
      {(cotFormError) ? <p className="error">Todos los campos son obligatorios</p> : ""}
    </>
  );
}

export default CotForm;
