const user = { id: 1 };

user.name = 'Cesar';
user.guardar = function() {
    console.log('Guardando', user.name);
}

console.log(user);
user.guardar();

delete user.name;
delete user.guardar;

console.log(user);

/**
 * Object.freeze() sirve para indicar 
 * que no se quiere que los atributos 
 * y valores del objeto cambien.
 */
const user2 = Object.freeze({ id: 2 });
user2.id = 0;
user2.name = 'Cesar';
console.log(user2);

/**
 * Object.seal() sirve para indicar 
 * que no se quiere que los atributos 
 * del objeto cambien.
 */
const user3 = Object.seal({ id: 3 });
user3.id = 0;
user3.name = 'Cesar';
console.log(user3);
