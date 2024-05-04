function crearUsuario(
    name,
    email
) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave...');
        },
    };
};

let user = crearUsuario('Cesar', 'mail@mail.com');
let user2 = crearUsuario('Felipe', 'felipe@mail.com');

console.log(user, user2);