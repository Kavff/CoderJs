//SISTEMA CRUD USUARIOS

/* CREATE - READ -UPDATE - DELETE */


class Usuario {
    constructor(id, nombre, apellido) {

        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}


const usuario1 = new Usuario(1, "Susana", "Oria");
const usuario2 = new Usuario(2, "Estaban", "Quito");
const usuario3 = new Usuario(3, "Benito", "Camela");
const usuario4 = new Usuario(4, "Rosa ", "Mesta");
const usuario5 = new Usuario(5, "Rosa  ", "Melcacho");
const usuario6 = new Usuario(6, "Elsa ", "Pito");

const usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5, usuario6];

console.log("INICIAL: ", usuarios);

mostrarMenu();

function mostrarMenu() {

    let opcion = 0;

    while (opcion !== 7) {

        opcion = Number(prompt(`Seleccione una accion:
            
                    1.Agregar usuario
                    2.Eliminar usuario
                    3.Modificar usuario
                    4.Listar usuarios
                    5.Buscar usuario
                    6.Filtrar listado
                    7.Salir`));

        switch (opcion) {

            case 1: {
                agregarUsuario();
                break;
            }

            case 2: {
                eliminarUsuario();
                break;
            }

            case 3: {
                modificarUsuario();
                break;
            }

            case 4: {
                listarUsuario();
                break;
            }

            case 5: {
                const encontrado = buscarUsuario();
                if (encontrado) {
                    alert(`El usuario es:
                     ${encontrado.id}
                     ${encontrado.nombre}
                     ${encontrado.apellido}`);
                } else {
                    alert("El usuario no se encuentra en la lista");
                }
                break;
            }

            case 6: {
                const filtrados = filtrarListado();
                console.log("FILTRADOS")
                console.table(filtrados)
                break;
            }
            case 7: {
                alert("Gracias - HASTA PRONTO!");
                break
            }
            default: {
                alert("Opcion invalida");
                break;
            }

        }
    }

}

function agregarUsuario() {

    let nombre = prompt("Ingrese el nombre del usuario");
    let apellido = prompt("Ingrese el apellido del usuario");

    let usuario = new Usuario(getId(), nombre, apellido);
    usuarios.push(usuario);

    console.log("USUARIO AGREGADO:")
    console.table(usuarios);
}

function getId() {

    if (usuarios.length === 0) {
        return 1;
    } else {
        const ultimo = usuarios[usuarios.length - 1];
        return ultimo.id + 1;
    }

}


function eliminarUsuario() {

    const id = Number(prompt("Ingrese el id del usuario que quiere eliminar"));

    const esta = usuarios.some((usuario) => usuario.id === id);
    if (esta) {

        const soloIds = usuarios.map((usuario) => usuario.id)

        let indice = soloIds.indexOf(id);
        console.log(indice);

        usuarios.splice(indice, 1);
        alert("Usuario borrado");

        console.log("BORRADO");
        console.table(usuarios);

    } else {
        alert("Usuario no encontrado")
    }
}

function modificarUsuario() {

    const id = Number(prompt("Ingrese el id del usuario que quiere modificar"));
    const nombre = prompt("Ingrese el nuevo nombre del usuario");
    const apellido = prompt("Ingrese el nuevo apellido del usuario");

    const esta = usuarios.some((usuario) => usuario.id === id);
    if (esta) {

        const soloIds = usuarios.map((usuario) => usuario.id)

        let indice = soloIds.indexOf(id);
        console.log(indice);

        usuarios.splice(indice, 1, {
            id:id,
            nombre: nombre,
            apellido: apellido
        });
        alert("Usuario modificado");

        console.log("MODIFICADO");
        console.table(usuarios);

    }
}

function listarUsuario() {

    console.log("LISTAR USUARIOS");
    usuarios.forEach((usuario) => {
        console.log(`${usuario.nombre} ${usuario.apellido}`) /*Esta funcion NO retorna, porque tiene flecha y  SI tiene llaves {}*/
        // console.log(usuario.nombre+ " " +usuario.apellido)
    });
    /* forEach es solo para recorrer y poder pasarle un función pára que haga algo con cada elemento del array. */
}

function buscarUsuario() {

    let idABuscar = Number(prompt("Ingrese el id del usuario"));

    return usuarios.find((usuario) => idABuscar === usuario.id); /*Esta funcion SI retorna, porque tiene flecha y NO tiene llaves {}*/
    /* Es una funcion de comparacion el retorno de la funcion es un booleano y se puede formar de manera simple o compuesta usando && o || */
}

function filtrarListado() {
    /* Se parece a find, la diferencia es que filter va a retornar una copia del array original donde se cumplan las condiciones que le este indicando*/
    /* Es para hacer buscadores // filter deberíamos buscar por nombre y/o 
    apellido porque trae todos los usuarios, en cambio find conviene con id porque este no se repite  */

    let abuscar = prompt("Ingrese un texto para buscar");

    return usuarios.filter((usuario) =>
        usuario.nombre.indexOf(abuscar) !== -1 ||
        usuario.apellido.indexOf(abuscar) !== -1
    );
}