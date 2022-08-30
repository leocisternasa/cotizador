export function totalCost(cantidad, plazo) {
  const cantidadInt = parseInt(cantidad);
  const plazoInt = parseInt(plazo);

  let interest;
  if (cantidadInt <= 1000) {
    interest = cantidadInt * 0.25;
  } else if (cantidadInt > 1000 && cantidadInt <= 5000) {
    interest = cantidadInt * 0.20;
  } else if (cantidadInt > 5000 && cantidadInt <= 10000) {
    interest = cantidadInt * 0.15;
  } else {
    interest = cantidadInt * 0.10;
  }

  let plazoInterest;
  switch (plazoInt) {
    case 3:
      plazoInterest = cantidadInt * 0.05;
      break;
    case 6:
      plazoInterest = cantidadInt * 0.10;
      break;
    case 12:
      plazoInterest = cantidadInt * 0.15;
      break;
    case 24:
      plazoInterest = cantidadInt * 0.20;
      break;
    default:
      break;
  }


  return interest + plazoInterest + cantidadInt;
  //console.log(totalPlazo);
}