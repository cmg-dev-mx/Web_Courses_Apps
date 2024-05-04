let a = 1;
let b = a;
b++;
console.log(a, b);

let c = {};
let d = c;
d.prop = 1;
console.log(c, d);

let e = 1;
function suma(n) {
    n++;
}
suma(e);
console.log(e);

let f = { prop: 1 };
function suma2(n) {
    n.prop++;
}
suma2(f);
console.log(f);

/**
 * Primitivos -> Se pasan por valor
 * Objetos -> Se pasan por referencia
 *      - objetos
 *      - arrays
 *      - funciones
 */
