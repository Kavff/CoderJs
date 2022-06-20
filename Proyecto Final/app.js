/* 
JUEGO DE TRUCO

 Cartas(id,valor,tipo,acciones)
 Jugadores(id,alias,cartasEnMano)
 Juego (id,cartasEnMesa,CartasEnMazo,jugadores)

 */
/* -----------------OBJETOS------------------- */

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
    constructor(id, alias, cartasEnMano) {
        this.id = id;
        this.alias = alias;
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

for (let i = 0; i < tipos.length; i++) {
    const carta = new Carta(i, 1, tipos[i]);
    const carta2 = new Carta(i, 2, tipos[i]);
    const carta3 = new Carta(i, 3, tipos[i]);
    const carta4 = new Carta(i, 4, tipos[i]);
    const carta5 = new Carta(i, 5, tipos[i]);
    const carta6 = new Carta(i, 6, tipos[i]);
    const carta7 = new Carta(i, 7, tipos[i]);
    const carta10 = new Carta(i, 10, tipos[i]);
    const carta11 = new Carta(i, 11, tipos[i]);
    const carta12 = new Carta(i, 12, tipos[i]);
    mazo.push(carta);
    mazo.push(carta2);
    mazo.push(carta3);
    mazo.push(carta4);
    mazo.push(carta5);
    mazo.push(carta6);
    mazo.push(carta7);
    mazo.push(carta10);
    mazo.push(carta11);
    mazo.push(carta12);
}

/* -----------------FUNCIONES------------------- */

window.onload = function(){
    barajarMazo();
}
function barajarMazo(){
    for (let i = 0;i < mazo.length;i++){
        let j = Math.floor(Math.random() * mazo.length);
        let temp = mazo[i];
        mazo[i] = mazo[j];
        mazo[j] = temp;
    }
    console.log(mazo);
}




