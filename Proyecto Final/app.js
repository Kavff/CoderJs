/* 
JUEGO DE TRUCO

 Cartas(id,valor,tipo,acciones)
 Jugadores(id,alias,cartasEnMano) - Movimientos(Envido-Truco(reTruco - quieroVale4))

 Juego (id,cartasEnMesa,CartasEnMazo,jugadores)

 */
/* -----------------OBJETOS------------------- */

//control + D
//f2 con variables
//ctrl + k + c

class Carta {
    constructor(id, valor, tipo) {
        this.id = id;
        this.valor = valor;
        this.tipo = tipo;
    }
    getValor() {
        return this.valor;
    }
}
//unoEspada.getValor();

class Tipo {
    constructor(id, nombre) {

        this.id = id;
        this.nombre = nombre;
    }
}

const espada = new Tipo(0, "espada");
const basto = new Tipo(1, "basto");
const oro = new Tipo(2, "oro");
const copa = new Tipo(3, "copa");


class Jugador {
    constructor(id, alias,pass,cartasEnMano) {
        this.id = id;
        this.alias = alias;
        this.pass = pass;
        this.cartasEnMano = cartasEnMano;
    }
}

class Juego {
    constructor(id, cartasEnMesa, CartasEnMazo, jugadores) {
        this.id = id;
        this.cartasEnMesa = cartasEnMesa;
        this.CartasEnMazo = CartasEnMazo;
        this.jugadores = jugadores;
    }
}

//Crear Mazo

const tipos = [espada, basto, oro, copa];
const mazo = [];
const participantes = [];

let indice = 0;

for (let i = 0; i < tipos.length; i++) {

    crearCarta(indice, 1, tipos[i]);
    indice++;
    crearCarta(indice, 2, tipos[i]);
    indice++;
    crearCarta(indice, 3, tipos[i]);
    indice++;
    crearCarta(indice, 4, tipos[i]);
    indice++;
    crearCarta(indice, 5, tipos[i]);
    indice++;
    crearCarta(indice, 6, tipos[i]);
    indice++;
    crearCarta(indice, 7, tipos[i]);
    indice++;
    crearCarta(indice, 10, tipos[i]);
    indice++;
    crearCarta(indice, 11, tipos[i]);
    indice++;
    crearCarta(indice, 12, tipos[i]);
    indice++;
}

/* -----------------FUNCIONES------------------- */

window.onload = function () {
    registrarUsuario()
    crearCarta();
    barajarMazo();
    /*     recorrerMazo();
     */
}


function crearCarta(indice, valor, tipo) {
    const carta = new Carta(indice, valor, tipo);
    mazo.push(carta);
}


function barajarMazo() {
    for (let i = 0; i < mazo.length; i++) {
        let j = Math.floor(Math.random() * mazo.length);
        let temp = mazo[i];
        mazo[i] = mazo[j];
        mazo[j] = temp;
    }
    console.log(mazo);
}


function recorrerMazo() {

    for (let cartas of mazo) {
        console.log(cartas);
    }
}


function registrarUsuario() {

    let nombre = prompt("Ingrese el nombre de su usuario");
    let contraseña = prompt("Ingrese su contraseña");

    let jugadores = new Jugador(getId(), nombre, contraseña);
    participantes.push(jugadores);

    console.table(participantes);
}

function getId() {

    if (participantes.length === 0) {
        return 1;
    } else {
        const ultimo = participantes[participantes.length - 1];
        return ultimo.id + 1;
    }

}


/* console.log(mazo);
 */