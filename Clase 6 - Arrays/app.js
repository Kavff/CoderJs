
//ARRAYS
/* 
Es un tipo de dato que sirve para almacenar valores en forma de lista.

Es una coleccion de elementos:
Puede ser coleccion de numeros,strings,booleanos, objetos o hasta una lista de listas

*/

//Para declarar arrays se usan [], separados con coma.
// Siempre empieza en la posicion 0. Ejemplo 10 elementos, ira desde 0 a 9.

/* const tutores = ["Patricia", "Francisco" ,"Juanma", "Marco","Enzo","Luis","Ezequiel"];

const numeros = [4,6,8,12,49,33]; */
/* 
console.log(tutores);
console.log(numeros); */
/* 
console.log(tutores[0]);
console.log(tutores[1]);
console.log(tutores[2]); */

/* console.log(numeros[0] + numeros[3] + numeros[2])

console.log(tutores.length); */
/* console.log(tutores[0].length); */
/* console.log(tutores[1][1]); */

// --------------------Recorrido del array

/* Es cuando le empleamos un bucle para acceder a cada elemento por separado

Los Arrays en JS son objetos iterarios */

/* let query = "Marco";

for (let i = 0;i < tutores.length;i++){
    /* console.log(tutores[i]) */
  /*   if(tutores[i] === query) {
        alert("Si, existe el tutor " + query + " en el curso")
        break
    }
}  */

// Agregar ELEMENTOS
/* 
Para sumar un elemento */

// Es normal que quitemos o agregemos elementos

/* const mascotas = ["Tomas","Jorgito"];
 */
//push, permite agregar elementos al array
//mascotas.push("Dory");
// Los agrega en la ultima posicion.
//Pero con unshift se agregan en la primera posicion
/* mascotas.unshift("Pepito");
 */// Lo recomendable es que se utilize siempre PUSH.

// Ejemplo de push
/* let nombres = ["Juan", "Pedro", "Maria", "Luis", "Jorge"];

console.log(nombres)

function agregarNombre(array, nombre){

    array.push(nombre);
    return array;
}

console.log(agregarNombre(nombres, "Juanito"));
 */



// Para eliminar elementos POP, elimina al ultimo del array
//mascotas.pop();
// Para eleminar el primero shift
// mascotas.shift()

//Orden alfabetico
/* function ordenarAlfabeticamente(array){

    array.sort();
    return array;
}

console.log(ordenarAlfabeticamente(nombres));
;
 */
//console.log(mascotas);


// ------------SPLICE

// El metodo splice() permite eliminar uno o varios elementos de un array en cualquier posicion.
//Funciona con 2 parametros.


const tutores = ["Patricia", "Francisco" ,"Juanma", "Marco","Enzo","Luis","Ezequiel"];

//splice(indice(donde me paro), cant(cuantos voy a eleminar), N+;
/* 
tutores.splice(1,2,"Lucrecia","Paula");

console.log(tutores); */
/* 
let nombres = ["Juan", "Pedro", "Maria", "Luis", "Jorge"];

console.log(nombres)

function agregarNombrePosicionEspecifica(array, nombre, posicion){

    array.splice(posicion, 0, nombre);
    return array;
}
console.log(agregarNombrePosicionEspecifica(nombres, "Juanito", 2));
 */

// METODO JOIN 

//Une todos los elementos de un array y los transforma en un string y los junta

/* console.log(tutores.join("*")); */

// METODO CONCAT

//Mediante el metodo podemos combinar dos arrays en un unico array.

const profesores = ["Conrado", "Pedro"];
const equipo = tutores.concat(profesores);

/* console.log(equipo);
 */
//METODO SLICE 

// RETORNA UN RECORTE DEL ARRAY. DEVUELVE UNA COPIA DE UNA PARTE DEL ARRAY DENTRO DE UN NUEVO ARRAY.

/* console.log(equipo.slice(1,4));
console.log(equipo.slice(3));
 */

/* console.log(equipo[1].slice(2));
 */
// METODO REVERSE 

//COMO SU NOMBRE LO INDICA - INVIERTE EL ORDEN DE LOS ELEMENTOS DENTRO DE UN ARRAY

//METODO INDEXOF
// Te busca lo que le pongas dentro del array
/* console.log(equipo.indexOf("Conrado")); */
// METODO INCLUDES
// Me permite saber si un elemento que recibo por parametro existe o no dentro del array

/* console.log(equipo.includes("Marco"));
 */


const eliminarPersonal = (nombre) => {

        const indice = equipo.indexOf(nombre);
        if(indice !== -1){
            equipo.splice(indice,1);
        }
}

const numeros = [4,6,8,12,49,33];

const eliminarElemento = (array,elemento) => {

    const indice = array.indexOf(elemento);
    if(indice !== -1){
        array.splice(indice,1);
    }
}
/* 
eliminarPersonal("Francisco");
eliminarPersonal("Luis");

console.log(equipo);
 */

/* eliminarElemento(numeros,12);
console.log(numeros); */

// *-----------------ARRAY DE OBJETOS

/* const producto1 = {

    nombre: "Remera Rosa",
    id:1,
    precio:1500
    
} */

