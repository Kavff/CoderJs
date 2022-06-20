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

let indice =0;

for (let i = 0; i < tipos.length; i++) {

    crearCarta(indice,1,tipos[i]);
    indice++;
    crearCarta(indice,2,tipos[i]);
    indice++;
    crearCarta(indice,3,tipos[i]);
    indice++;
    crearCarta(indice,4,tipos[i]);
    indice++;
    crearCarta(indice,5,tipos[i]);
    indice++;
    crearCarta(indice,6,tipos[i]);
    indice++;
    crearCarta(indice,7,tipos[i]);
    indice++;
    crearCarta(indice,10,tipos[i]);
    indice++;
    crearCarta(indice,11,tipos[i]);
    indice++;
    crearCarta(indice,12,tipos[i]);
    indice++;
}



/* -----------------FUNCIONES------------------- */

window.onload = function(){
    crearCarta();
    barajarMazo();
/*     recorrerMazo();
 */
} 


function crearCarta(indice,valor,tipo)
{
    const carta = new Carta(indice, valor, tipo);
    mazo.push(carta);
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


function recorrerMazo(){

    for(let cartas of mazo)
    {
        console.log(cartas);
    }
}



/* console.log(mazo);
 */