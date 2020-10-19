const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
    latlng: {
        lat: 15,
        lng: 40
    }
};

// Cambio de nombre en destructuración
const {nombre, edad: años, clave} = persona;
console.log(nombre, años, clave);

// Valor por defecto en destructuración
// Destructuración dentro de los argumentos de la función
// Obtención de objetos anidados como constantes
const useContext = ({ nombre, edad, clave = 'Avenger', latlng:{lat, lng} }) => {
    return { nombre, edad, nombreClave: clave, lat, lng };
}

const {nombreClave, edad} = useContext(persona);

console.log(nombreClave, edad);