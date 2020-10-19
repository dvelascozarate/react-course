const dolar = {
    raza: 'salchicha',
    edad: 9,
    altura: 40,
    anchura: 60
};

console.log({dolar});
// es lo mismo que:
console.log({dolar: dolar});
// esto solamente si el nombre del objeto coincide con el 
// nombre de la propiedad que le quieres asignar al objeto

// el comando spread permite clonar un objeto
const yiko = {...dolar};
yiko.edad = 5;

console.log(dolar);
console.log(yiko);

// Otra forma de imprimir
console.table(dolar);