// FUNCIONES

// Es un conjunto de instrucciones que se agrupan para realizar una tarea concreta

// Ventajas

// Evita duplicar instrucciones (Principio DRY - Dont repear your self)

// Soluciona un problema copplejo usando tareas sencillas(Principio KISS - Keep simple )

//Focaliza tareas prioritarias para el programa (Principio YAGNI)

//Aporta ordenamiento y entendimiento al codigo

//Aporta facilidad y rapidez para hacer modificaciones

// COMO SE DECLARA UNA FUNCION

// Se declara con la palabra reservada function
// Debe tener un nombre en minuscula y sin espacios seguidos a los caracteristicos parentesis.
//El nombre de la funcion no se puede repetir en otra.

//Declaracion
/* function incentivo(){
    alert("Estaremos en el top 10!");
}


function saludar() {
    let nombre = prompt("Ingrese su nombre");
    alert("Bienvenido "+ nombre + " a la clase de JS!");

    incentivo()
} */

// Para llamar a la funcion es :

/* saludar(); */

//PARAMETROS

//Cuando enviamos a la funcion uno o mas valores para ser empleados en sus operaciones,
//estamos hablando de parametros.

//Son VARIABLES que se declaran dentro de la funcion

/* function saludarUsuario(usuario){
    console.log("Bienvenido " + usuario);
}

saludarUsuario("Luis");
saludarUsuario("Ramon");
saludarUsuario("Vicky"); */

/* 
function infoUsuario(nombre,edad,curso){
    saludarUsuario("Nombre: " + nombre);
    saludarUsuario("Edad: " + edad + " años");
    saludarUsuario("cursando: " + curso);
} */

/* function evaluarEdad(edad) {
  if (edad < 18) {
    alert("Usted no puede comprar cerveza!");
  } else {
    alert("Bienvenido que le sirvo?");
  }
}

let edad = Number(prompt("Ingrese su edad"));

evaluarEdad(edad); */

// Mismo ejemplo con validacion

/* function evaluarEdad(edad) {

    if(isNaN(edad)){
        console.warn("Solo se permiten numeros");
    }else if(edad < 0){
        console.warn("El numero no puede ser negativo")
    }
    else if(edad < 18){
        console.log("Usted no puede entrar");
    }else {
        console.log("Bienvenido");
    }
}

let edad = Number(prompt("ingrese su edad: "));

evaluarEdad(edad);
 */

//RETURN

//Las variables pueden GENERAR un valor de retorno usando la palabra return, obteniendo
// el valor cdo la funcion es llamada

/* let n1 = Number(prompt("ingrese numero: "));
let n2 = Number(prompt("ingrese otro numero: "));

function suma(n1,n2){

    return n1 + n2;
}

suma(n1,n2);

 */

/* function restar(a,b){
    return a - b;
}

function multiplicar(a,b){
    return a * b;
}

function sumar(num1,num2) {
    let suma =  num1 + num2;
    return suma;
}

let resultado = sumar(10,20);

console.log(resultado); */

// Ejemplo con concatenacion

/* let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let edad = prompt("Ingrese su edad: ")

function unirDatos(nombre, apellido, edad){

    let result = `${nombre} ${apellido} ${edad}`;
    return result
}

console.log(unirDatos(nombre,apellido,edad));
 */

//SCOPE

// El scope o ambio de una variable es la zona del progrma en el cual se define el contexto al cual
//pertenece la misma dentro de un algoritmo,restringiendo su uso y alcance.

//JS

//VAriables Globales y Locales

// Si una variable se aclara fuera de cuaquier funcion o bloque, automaticamente se transforma
//variable global.

/* let nombre = "Carlos"; // variable Global - Esta escrita en la raiz de mi JS - Es accesible 


function saludar() {

    let nombre = "Lucas";// Las variables Locales: estan dentro de un bloque y
    // no pueden ser accedidas por fuera de ese bloque
    console.log(nombre);
}

console.log(nombre); // Carlos
saludar(); // Lucas */

// FUNCIONES ANONIMAS

/* const sumar = function(num1,num2){
    return num1 + num2
}
 */

/* let resultado = sumar(100,200); */

// FUNCIONES FLECHA

//Identificamos a las funciones flechas como funciones anonimas

/* const sumar = (num1, num2) => {
  return num1 + num2;
};

let resultado = sumar(100,200);
 */
// arrow function            return implicito
/* const sumar = (num1,num2) => {return num1+ num2} */

/* const sumar = (num1,num2) => num1+ num2 */

