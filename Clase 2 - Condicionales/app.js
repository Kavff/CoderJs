/* ESTRUCTURA IF - ARMAR CONDICIONAL  */

/* 
if (true - condicion (Si es verdadera la condicion se ejecuta))){
    bloque de codigo a ejecutar

    console.log("vas a ver este mensaje");
} */

/* EL OPERADOR DE COMPARACION ES == (DE EQUIVALENCIA) */

/*  console.log("Inicio de programa");

let nombre = "Lucas Lobos"
let resultado = nombre == "Facundo Lobos"

console.log(resultado);

console.log("Fin de programa");  */

/* ------------------IF AND ELSE--------------------- */
/* console.log("Inicio de programa");
let nombre = "Lucas Lobos"

if(nombre == "Face Lobos"){
    console.log("Este mensaje se ejecutara")
}else{
    console.log("El nombre no es igual")
}

console.log("Fin de programa"); 
 */

/* console.log("Inicio de programa");

let temperatura = Number(prompt("Ingrese la temperatura actual"));

if(temperatura>=30){
    alert("Esta caluroso");
}else if(temperatura<30 && temperatura>=20 ){
    alert("Esta templado");
}else {
    alert("Esta frio");
};

console.log("Fin de programa"); */

/* OPERACIONES EN JS */

/* == Es igual a == b

=== Estrictamente igual a===b

!= Es distinto a!=b

!== Estrictamente distinto a!=b

>< <= Mayor-Menor-Mayor o igual a<=b

&& Operador and a&&b

|| Operador o  a||b

! Operador not   !a */

/* console.log("Inicio de programa");

const usuario = prompt("Ingrese el usuario");
const password = prompt("Ingrese la password");

if (usuario == "Lucas") {
  if (password == 1234) {
    alert("Bienvenido");
  } else {
    alert("Password incorrecta");
  }
} else {
  alert("Usuario incorrecto");
}

console.log("Fin de programa"); */

/*

OPERADORES &&
const usuario = prompt("Ingrese el usuario");
const password = prompt("Ingrese la password");

console.log("Inicio de programa");

if(usuario == "Lucas" && password == "1234"){
  alert("Bienvenido");
}else{
  alert("Datos incorrectos");
}

console.log("Fin de programa"); */

/* 
OPERADORES AND / OR
const usuario = prompt("Ingrese el usuario");
const password = prompt("Ingrese la password");
const palabraMagica = prompt("Ingrese la palabra magica")

console.log("Inicio de programa");

if(usuario === "Lucas" && (password === "1234" || palabraMagica === "Coder") ){
  alert("Bienvenido");
}else{
  alert("Datos incorrectos");
}

console.log("Fin de programa");
 */
