let obj = {};
let obj2 = new Object();

/**
 * new Array(); []
 * new String(); '' "" ``
 * new Number(); 1
 * new Boolean(); true false
 * 
 * NOTA: Los objetos literales se comportan de 
 * manera diferente a los objetos creados con 
 * los constructores.
 */

function Usuario() {
    this.name = 'Juan';
}
let user = new Usuario();
console.log(user.constructor);

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(s1, s2);
console.log(eval(s1), eval(s2));
console.log(s2.valueOf());