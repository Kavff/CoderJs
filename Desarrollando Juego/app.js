// JUEGO DE Rapido y Furioso

// IDEA

/* Una carrera de autos, donde el usuario elegira 2 autos para que compitan entre si, sera una carrera estilo picada*/
/* Vamos a crear a los protagonistas de la pelicula con sus respectivos autos.
Esto lo haremos con Object

--> Con propiedades para poder identificarlos:

- Nombre del personaje
- Auto

--> Le pediremos al usuario que ingrese con el personaje que quiere competir

Para poder elegirlo usaremos con un array

Deberemos hacer funciones para que los autos corran

 */

class Personaje {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}

const Personaje1 = new Personaje(1,"Dominic Toretto");
const Personaje2 = new Personaje(2,"Brian O'Conner");
const Personaje3 = new Personaje(3,"Letty Ortiz");
const Personaje4 = new Personaje(4,"Mia Toretto");
const Personaje5 = new Personaje(5,"Johnny Tran");
const Personaje6 = new Personaje(6,"Jesse");
const Personaje7 = new Personaje(7,"Vince");
const Personaje8 = new Personaje(8,"Leon");
const Personaje9 = new Personaje(9,"Hector Tito");

class Auto {
    constructor(id, tipo, velocidad) {
        this.id = id;
        this.tipo = tipo;
        this.velocidad = velocidad;
    }
    usarNitro() {

        console.log(this.velocidad + 10);
    }
}


const Auto1 = new Auto(1,"Mazda RX-7 FD3S Veilside",100);
const Auto2 = new Auto(2,"Mitsubishi Eclipse RS 420A",95);
const Auto3 = new Auto(3,"Nissan 240SX",85);
const Auto4 = new Auto(4,"Acura Integra DC2 Type R",80);
const Auto5 = new Auto(5,"Honda S2000 F20C5",9);
const Auto6 = new Auto(6,"Volkswagen Jetta III",80);
const Auto7 = new Auto(7,"Nissan Maxima",85);
const Auto8 = new Auto(8,"Nissan Skyline GT-R R33",80);
const Auto9 = new Auto(9,"Honda Civic EG",80);



const arrayPersonajes = [Personaje1,Personaje2,Personaje3,Personaje4,Personaje5,Personaje6,Personaje7,Personaje8,Personaje9]


console.log("----------------------PERSONAJES-------------------------")
console.log(" ")
console.log("Opcion 1 - Dominic Toretto -  Mazda RX-7 FD3S Veilside ")
console.log("Opcion 2 - Brian O'Conner -  Mitsubishi Eclipse RS 420A ")
console.log("Opcion 3 - Letty Ortiz -  Nissan 240SX ")
console.log("Opcion 4 - Mia Toretto -  Acura Integra DC2 Type R ")
console.log("Opcion 5 - Johnny Tran -  Honda S2000 F20C  ")
console.log("Opcion 6 - Jesse -  Volkswagen Jetta III ")
console.log("Opcion 7 - Vince - Nissan Maxima ")
console.log("Opcion 8 - Leon -  Nissan Skyline GT-R R33 ")
console.log("Opcion 9 - Hector Tito -  Honda Civic EG ")
console.log("------------------------------------------------");

//Recorrer el array con FOR IN


const option1 = Number(prompt("Ingresa el numero del personaje que quieres elegir"));
 
const seleccionPersonaje = (option1) => {

    for(let characters of arrayPersonajes){
        console.log(characters.nombre);
        if (elegido !== -1) {
            console.log("Elegiste a " + Personaje.nombre)
        }
    }
   
}
