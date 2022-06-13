
//FUNCIONES DE ORDEN SUPERIOR

//Es una funcion que puede retornar una funcion o recibe funciones por parametro
/* 
function mayorQue(n){

    return (m) => {
        return m > n;
    }
}

const mayorQueDiez = mayorQue(10);
const mayorQueVeinte = mayorQue(20);

console.log(mayorQueDiez(12))
console.log(mayorQueVeinte(15)) */


//Recibir funciones por parametro

const numeros = [1,23,44,65,92,32,87,123];
const nombres = ["Jorge","Carlos","Luis"]

/* for(const num of numeros){
    console.log(num)
} */

const porCadaUno = (array,fn) => {
    for(let element of array){
        fn(element)
    }
}

/* cuando colocas una funcion sin los parentesis estas pasando la referencia de la funcion */
/* element es cada elemento del array */
const duplicar = (num) => {
    console.log(num*2);
}

/* porCadaUno(numeros,duplicar); */
let total = 0;

const acumular = (num) => {
    total +=num
}

/* porCadaUno(numeros,acumular);

console.log(total);
 */
// ARROW FUNCTION

porCadaUno(numeros, (num) => {
    console.log(num*3)
})

/* const duplicados = [];

porCadaUno(numeros,(num)) => {
    duplicados.push(num*2)
} */



/* const array = [
    {
        id: 1,
        zapatilla: "Nike",
    },
    {
        id: 2,
        zapatilla: "Adidas",
    }
]

 function imprimirZapatillas(array, fn){

    for(let i = 0; i < array.length; i++){

        console.log(fn(array[i]));
    }
}


function imprimirZapatilla(zapatilla){

    return `
    id: ${zapatilla.id}
    zapatilla: ${zapatilla.zapatilla}
    `;
}


imprimirZapatillas(array, imprimirZapatilla);
 */


// *******************METODOS **************************

// FOR EACH


