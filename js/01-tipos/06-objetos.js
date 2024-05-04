// Personaje de TV
let nombre = "Homero Simpson";
let anime = "Los Simpson";
let edad = 39;

let personaje = { // Objeto literal
    nombre: "Tanjiro Kamado", // Par llave-valor (propiedad: valor)
    anime: "Demon Slayer",
    edad: 15,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime'])

personaje.edad = 13;
personaje['edad'] = 16;

delete personaje.anime;
console.log(personaje);