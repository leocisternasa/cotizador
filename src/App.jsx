import React, { useState } from 'react';
import './App.css'
import Header from './components/Header';
import CotForm from './components/CotForm';
import Result from './components/Result'
import Mensaje from './components/Mensaje';

function App() {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [totalLoanCost, setTotalLoanCost] = useState(0);
  const [cotFormError, setCotFormError] = useState(false);

  let component;
  if (totalLoanCost === 0 || isNaN(totalLoanCost)) {
    console.log(totalLoanCost)
    component = <Mensaje />
  } else {
    component = <Result cantidad={cantidad} plazo={plazo} totalLoanCost={totalLoanCost} />;
    console.log(totalLoanCost)
  }
  return (
    <div>
      <Header title="Cotizador de Préstamos" />
      <div className="container">
        <CotForm
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          setTotalLoanCost={setTotalLoanCost}
          setCotFormError={setCotFormError}
          cotFormError={cotFormError} />
      </div>
      <div className="mensaje">
        {component}

      </div>
    </div>
  )
}

export default App
