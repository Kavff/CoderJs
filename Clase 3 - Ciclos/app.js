
/* CICLOS E ITERACIONES */

/* i = i + 1 ===> i++ */

/* const numeroIngresado = Number(prompt ("Ingrese un numero"));

for(let i = 1; i <= 10; i++){

  console.log(i * numeroIngresado);

}
console.log("Fin del programa"); */

/* SERIE FIBONACCI*/

/* let numero1 = 0;
let numero2 = 1;
let numero3 = 0;

console.logo(numero2);

for(let i = 0; i < 9; i++) {
  numero3 = numero1 + numero2;
  console.log(numero3);
  numero1 = numero2;
  numero2 = numero3;
} */

/* OTRA MANERA DE RESOLVERLO */

/* let numero1 = 0;
let numero2 = 1;

console.log(numero2);

for(let numero3 = 1; numero3 <= 55;  numero3 = numero1 + numero2) {
  console.log(numero3);
  numero1 = numero2;
  numero2 = numero3;
} */

// BREAK -
/* 
for (let i = 0; i < 10; i++){

  if (i === 4 ){
    console.log(i +" "+ "Numero prohibido");
    break //corta la iteracion
    
  }
  console.log(i);

}
console.log("Fin del programa"); */

// CONTINUE

/* for (let i = 0; i < 50; i++){

  if (i % 2 === 0 )  Muestra numeros impares {
    continue //salto al ciclo siguiente y el iterador continua
  }
  console.log(i);

}
console.log("Fin del programa"); */

// WHILE

/* let contador = 0;

while (contador <= 100) {

  console.log(contador);

  contador += 10;
} */

//let usuario = prompt("Ingrese el usuario/admin");

/* while(usuario !== "Lucas") {
  alert("Usuario incorrecto");
  usuario = prompt("Ingrese el usuario/admin");
}
 */

/* while(true) {
  if(usuario === "Lucas") {
    break
  }

  alert("Usuario incorrecto!");
  usuario = prompt("Ingrese el usuario/admin");
} */

//SE PUEDE HACER CON UN FOR - CON UN FOR NO ES NECESARIO CUMPLIR CON LAS 3 CONDICIONES

/* for (; true ;){

  if(usuario === "Lucas") {
    break
  }

  alert("Usuario incorrecto!");
  usuario = prompt("Ingrese el usuario/admin");
  
}
alert("Bienvenido usuario Admin!");

 */

/* let entrada = prompt ("Ingrese un dato");

while(entrada != "ESC") {
  alert("El usuario ingreso"+" " + entrada);

  entrada = prompt("Ingresar otro dato")
}
 */

//DO... WHILE - LA DIFERENCIA CON "FOR AND WHILE" ES QUE AL MENOS EL "DO .. WHILE" SE EJECUTA 1 VEZ

/* let password;

do {

 password = Number(prompt("Ingrese la contraseña"));


} while (password !== 1234)

alert("Bienvenido usuario Admin!"); */

// EJEMPLO CON ESTRUCTURA IF-ELSE
// LISTADO DE OPCIONES POSIBLES
/* const mascota = prompt("Ingrese su mascota");
 */
/* if (mascota == "gato") {
  alert("Me encantan los gatos");
} else if (mascota == "perro") {
  alert("Me encantan los perros");
} else if (mascota == "pez") {
  alert("ME aburren los peces");
} else if (mascota == "chancho") {
  alert("Ught! Que asco");
}else if (mascota == "rata") {
  alert("Como podes tener una rata?");
}
 */

//ESTRUCTURA SWITCH

/* const mascota = prompt("Ingrese su mascota");

switch (mascota) {
  case "gato":
    alert("Me encantan los gatos");
    break;
  case "perro":
    alert("Me encantan los perros");
    break;
  case "pez":
    alert("ME aburren los peces");
    break;
  case "chancho":
    alert("Ught! Que asco");
    break;
  case "rata":
    alert("Como podes tener una rata?");
    break;
  default:
    alert("No ingresaste una mascota valida");
}
 */

// EJEMPLO PRACTICO - SWITCH

/* const banco = prompt("Ingrese su banco").toLowerCase();
const monto = Number(prompt("Ingrese el monto de su prestamo"));

let interes;

switch (banco.toLowerCase() ) { // Con toLowerCase normalizo el ingreso para que machee con mis cases.
  case "santander":
    interes = 1.12;
    break;
  case "macro":
    interes = 1.25;
    break;
  case "nacion":
    interes = 1.90;
    break;
  case "galicia":
    interes = 2.40;
    break;
    default:
      alert("No ingresaste un banco valido")
}

alert("Tu monto a devolver al banco "+banco + " es de " + monto*interes); */
