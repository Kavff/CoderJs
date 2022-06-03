console.log("SUMULADOR DE PRESTAMOS");

function validadorCapital(capital) {

  if (isNaN(capital)) {
    console.warn("Solo se permiten numeros");
    return false;
  } else if (capital < 0) {
    console.warn("El numero no puede ser negativo");
    return false;
  } else if (capital == 0) {
    console.warn("El numero no puede ser 0");
    return false;
  }else{
    return true;
  }
}

function simuladorPrestamos(capital, cuotas, interes) {

  console.log("CAPITAL -> $" + capital);
  console.log("CUOTAS -> " + cuotas);
  console.log("INTERES -> " + interes + "% anual");
  console.log(" ");

  for (let i = 1; i <= cuotas; i++) {
    let capitalCuota = capital / cuotas;
    let smallCapital = Number(capitalCuota.toFixed(2));
    let importeAPagar = Number(smallCapital + smallCapital * (interes / 100));
    let smallImporteAPagar = Number(importeAPagar.toFixed(2));
    let interesCuota = interes / cuotas;
    let smallInteres = Number(interesCuota.toFixed(2));
    console.log(
      "CUOTA " +
      i +
      " || CAPITAL $" +
      smallCapital +
      " || INTERES MENSUAL " +
      smallInteres +
      "%" +
      " || IMPORTE A PAGAR $" +
      smallImporteAPagar
    );
  }

  let capitalCuota = capital / cuotas;
  let smallCapital = Number(capitalCuota.toFixed(2));
  let importeAPagar = Number(smallCapital + smallCapital * (interes / 100));
  let smallImporteAPagar = Number(importeAPagar.toFixed(2));
  console.log(" ")
  console.log(
    "TOTAL: CAPITAL $" +
    capital +
    " || INTERES ANUAL " +
    interes +
    "%" +
    " || IMPORTE A PAGAR $" +
    smallImporteAPagar * cuotas
  );
}



let capital = Number(prompt("Ingrese el capital"));

while(validadorCapital(capital) !== true){
  capital = Number(prompt("Ingrese el capital"));
} 

let cuotas = Number(prompt("Ingrese las cuotas"));
let interes = Number(prompt("Ingrese el interes"));

simuladorPrestamos(capital,cuotas,interes);


