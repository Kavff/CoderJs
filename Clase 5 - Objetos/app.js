
//CLASE 5 - OBJETOS

//Que es un objeto?

// Podemos agrupar valores bajo un mismo criterio
//Es una coleccion de datos relacionados como una entidad.(Conjunto de informacion)

//Contienen propiedades y valores agrupados.
// PUEDE CONTENER CUALQUIER TIPO DE DATO
// Para declarar un objeto utilizo {};

/* const user = {
    //propiedades
    nombre:"Lucas Lobos",
    edad: 32,
    rol: "Alummno",
    curso:"Javascript",
    empresa:"Coderhouse"
} */

/* const user2 = {
    nombre:"Conrado Lanusse",
    edad: 34,
    rol: "Profesor",
    curso:"Javascript",
    empresa:"Coderhouse"
}
console.log(user);
console.log(user2);
 */

//que cosa hace const ? Mantiene constante su estructura, no su VALOR.

/* const persona = {
    nombre: prompt("ingrese su nombre: "),
    apellido: prompt("ingrese su apellido: "),
    edad: prompt("ingrese su edad: "),
    lenguajsProgramacion: {
        front: prompt("ingrese su lenguaje de programacion: "),
        back: prompt("ingrese su lenguaje de programacion: "),
    }
}

console.log(persona); */
/*-------------------------------------*/

//Para ver solo una propiedad del objeto es:

/* console.log(user.nombre);
 */


// Puedo modificar las propiedades :

/* user.nombre = "Conrado Lanusse";
user.edad +=1;
console.log(user);
 */

//Para agregar una propiedad
/* user.email = "abc@abc.com";
console.log(user) */

//Para eliminar una propiedad palabra reservada delete ej:
// delete user.email



// Se puede acceder con el selector DINAMICO con

/* console.log(user["edad"]);

// Este al ser dinamico puede agregarse una propiedad

let propiedad = prompt("Que propiedad acceder?")
user[propiedad] = "abc@abc.com " */

// --------------CONSTRUCTORES

//El constructor de un objeto es una funcion que usamos para crear un nuevo objeto cada vez que sea necesario.

//Esta funcion va a servir para crear un objeto


/* function Mascota(nombre,edad,tipo){
    
    this.nombre = nombre;
    this.edad = edad;
    this.tipo = tipo; // El this apunta a un objeto. || this es el objeto || nombre es la propiedad

} */
/* 
const mascota1 = new Mascota("Ronni",6,"perro");
const mascota2 = new Mascota("Kitty",3,"gato"); *//* Aca iria el prompt */
// El operador new crea un objeto vacio y ejecuta el objeto
/* 
console.log(mascota1);
console.log(mascota2); */

// La palabra clave this es para autoreferenciar 
/* 
function crearMascota(){
    let nombre = prompt("Ingrese nombre de la mascota");
    let edad = Number(prompt("Ingrese nombre de la mascota"));
    let tipo = prompt("Ingrese nombre de la mascota");

    const mascota = new Mascota(nombre,edad,tipo);
    return mascota;
}

const mascota1 = crearMascota();
const mascota2 = crearMascota();

console.log(mascota1);
console.log(mascota2);
 */
//Ejemplo 2 con productos de una tienda e comerce
/* 
function Producto(id, nombre, precio){

    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
}

const Producto1 = new Producto(1, "Pantalon", 1000);
const Producto2 = new Producto(2, "Zapatos", 5000);
const Producto3 = new Producto(3, "Camisa", 2000);
const Producto4 = new Producto(4, "Remera", 2000); */


// ---------- METODO <> FUNCION

//Son funciones que estan ligados a un objeto
//Los metodos de los objetos 


//------------------- CLASES

//Introducidas en ES6
//Proveen una sintaxis mucho ms clara y simple para crear objetos personalizados.

//Son una equivalencia al empleo de funcion constructora y permite definir distintos tipos de metodos

class Mascota{
    constructor(nombre,edad,tipo){
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }

    saludar(){
        alert()
    }
}

const mascota1 = new Mascota("Ronin",6,"perro");

console.log(mascota1);

// Ejemplo con clases

/* class Producto {
    constructor(id, nombre, precio) {

        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInformacion() {
        console.log(`
        id: ${this.id}
        nombre: ${this.nombre}
        precio: ${this.precio}
        `);
    }
}

const Producto1 = new Producto(1, "Pantalon", 1000);
const Producto2 = new Producto(2, "Zapatos", 5000);
const Producto3 = new Producto(3, "Camisa", 2000);
const Producto4 = new Producto(4, "Remera", 2000);

let nombre = prompt("Por favor ingrese su nombre: ");

/* No se asusten esto es solo template string 
se usan comillas inclinadas */
/* let pregunta = prompt(`

    Digite el numero de producto que desea comprar:
    1. ${Producto1.nombre}
    2. ${Producto2.nombre}
    3. ${Producto3.nombre}
    4. ${Producto4.nombre}

`); */
 
/* function elegirProducto(pregunta){

    switch (pregunta) {
        case "1":
            console.log(`${nombre}, elegiste un ${Producto1.nombre} y su precio es de ${Producto1.precio} pesos`);
            break;
        case "2":
            console.log(`${nombre}, elegiste un par de ${Producto2.nombre} y su precio es de ${Producto2.precio} pesos`);
            break;
        case "3":
            console.log(`${nombre}, elegiste una ${Producto3.nombre} y su precio es de ${Producto3.precio} pesos`);
            break;
        case "4":
            console.log(`${nombre}, elegiste una ${Producto4.nombre} y su precio es de ${Producto4.precio} pesos`);
            break;
        default:
            console.log("El producto no existe");
    }
}

elegirProducto(pregunta)
 */