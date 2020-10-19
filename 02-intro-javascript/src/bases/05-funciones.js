const sumar = function (num1, num2) {
    return num1 + num2;
}

// const sumar = (num1, num2) => {
//     return num1 + num2;
// }

// const sumar = (num1, num2) => num1 + num2;

const getUsuarioActivo = (nombre) => ({uid:'ABC567', username:nombre});

const usuarioActivo = getUsuarioActivo('DanDrgns');

console.log(usuarioActivo);

console.log(sumar(1,1));
