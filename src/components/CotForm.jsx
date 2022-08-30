import React from 'react';
import { useState } from 'react';
import { totalCost } from '../helpers'

const CotForm = ({ cantidad, setCantidad, plazo, setPlazo, setTotalLoanCost }) => {

  const [error, setError] = useState(false);
  const calculateLoan = (e) => {
    e.preventDefault();
    if (cantidad === 0 || plazo === "") {
      setError(true);
      console.log("aqui hay un error");
    } else if (error) {
      setError(false)
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
            <input type="number" placeholder="Ej: 3000"
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
      {(error) ? <p className="error">Todos los campos son obligatorios</p> : ""}
    </>
  );
}

export default CotForm;
