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

  let component;
  if (totalLoanCost === 0) {
    component = <Mensaje />
  } else { component = <Result cantidad={cantidad} plazo={plazo} totalLoanCost={totalLoanCost} /> }
  return (
    <div>
      <Header title="Cotizador de Préstamos" />
      <div className="container">
        <CotForm
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          setTotalLoanCost={setTotalLoanCost} />
      </div>
      <div className="mensaje">
        {component}

      </div>
    </div>
  )
}

export default App
