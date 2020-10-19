const useState = (valor) => {
    return [valor, () => { console.log('Hola mundo') }];
}

// destructuración de arreglo

const [nombre, setNombre] = useState('Daniel');

console.log(nombre);
setNombre();