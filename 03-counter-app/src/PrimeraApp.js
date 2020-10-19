import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ nombre }) => {

    const saludo = `Hola ${nombre}`;

    return <><h1>{saludo}</h1><p>Mi primera aplicación</p></>;
};

PrimeraApp.propTypes = {
    nombre: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    nombre: 'Mundo'
}

export default PrimeraApp;