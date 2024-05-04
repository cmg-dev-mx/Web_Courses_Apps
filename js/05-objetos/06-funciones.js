/**
 * Las funciones son objetos de primera clase
 */

function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length); // Cantidad de argumentos que recibe la función

const U = Usuario;
let user = new U('Juan');

console.log(user);

function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'Cesar');
console.log(user1);

function returned() {
    return function() {
        console.log('Hola Mundo');
    }
}

let saludo = returned();
saludo();