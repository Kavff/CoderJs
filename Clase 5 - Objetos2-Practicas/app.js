//Objects

/* let name = "Lucas";
let lastName = "Lobos";
let age = 32; */

// An object is just key + value. Ej key name, value "Lucas"
/* const user = {
    name: "Lucas",
    lastName: "Lobos",
    age: 32,
    hobbies: ['read,programming,run'],
    address: {
        street: "Parlament",
        city: "Toronto"
    }
}

console.log(user); */

/* const user = {
    name: "Lucas",   //properties
    lastName: "Lobos",
    age: 32,
} */

//Method


//Object Methods // A las acciones bajo el paradigma de ortientacion a objetos se las conoce como metodo.
//En JS como functions porque las functions nos permiten operar con los datos y alterar los datos, o ejecutar determinada funcionabilidad

//Cuando tenemos solo datos son propiedades, pero cuando una propiedad puede hacer algo entonces pasa hacer acciones, eso es un metodo. Funtions

/* function showFullName(){
    return "Lucas Lobos";
}
 */
/* const user = {
    name: "Lucas",
    lastName: "Lobos",
    age: 32,
    showFullName(){
       // return this.name + " " + this.lastName;
        return `${this.name} ${this.lastName}`
    }

}

console.log(user.showFullName());

const account = {
    number: "1651316515",
    amount: 100,
    deposit(quantity) {
        this.amount = this.amount + quantity
    },
    withdraw(quantity){
        this.amount = this.amount - quantity
    }
}

account.deposit(100);
account.deposit(200);
account.deposit(50);
console.log(account);
account.withdraw(100);
account.withdraw(300);
console.log(account);
 */


//---------------------------------------------Constructor

// Los constructores son funciones que nos permiten crear objetos con propiedades y metodos

 function Person(name, lastName, age) {
    this.name = "";
    this.lastName = "";
    this.age = 0;
    this.showFullName = function () {
        return `${this.name} ${this.lastName}`    
    }
}

//Necesitan la palabra clave new 

const user2 = new Person("Ricardo", "Fantino", 52);
/* user2.name = "Ricardo";
user2.lastName = "Fantino";
user2.age = 52; */
console.log(user2.showFullName());

const user3 = new Person("Pepe","Argento",56);
console.log(user3.showFullName());

const user4 = new Person();
user4.name = "Graciela";
user4.lastName = "Alfano";
user4.age = 70;
console.log(user4.showFullName());



//---------------------------------------------Constructor


