console.log("SUMULADOR DE PRESTAMOS");

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

function validadorCapital(capital) { //Regla: true --> todo bien  // false --> todo mal

  if (isNaN(capital)) {
    console.warn("Solo se permiten numeros");
    return false;  // Retorna false --> todo mal
  } else if (capital < 0) {
    console.warn("El numero no puede ser negativo");
    return false;  // Retorna false --> todo mal
  } else if (capital == 0) {
    console.warn("El numero no puede ser 0");
    return false;  // Retorna false --> todo mal
  }else{
    return true; // Como las condiciones anteriores no se cumplen, retornamos true --> todo bien
  }
}


let capital = Number(prompt("Ingrese el capital")); // Ingresamos el capital

while(validadorCapital(capital) !== true){ // Llamamos a la funcion validadorCapital(capital), nos devuelve false o true y comparamos
  capital = Number(prompt("Ingrese el capital"));// Si ingresamos aca, es porque la funcion devolvio false, hay algo mal. Pedimos el capital otra vez
} // Esto es un bucle, pide capital, compara... Y asi hasta que todo este bien y salgamos del bucle.

let cuotas = Number(prompt("Ingrese las cuotas"));
let interes = Number(prompt("Ingrese el interes"));

simuladorPrestamos(capital,cuotas,interes);


