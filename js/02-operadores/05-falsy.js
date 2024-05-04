// Short-circuit

// Falso (Falsy)
// false
// 0
// ''
// ""
// ``
// null
// undefined
// NaN

let nombre = '';
let username = nombre || 'Anónimo';
console.log(username);

function fn1() {
  console.log('Soy la función 1');
  return false;
}

function fn2() {
    console.log('Soy la función 2');
    return true;
}

let a = fn1() && fn2();