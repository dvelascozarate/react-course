import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ nombre, subtitulo }) => {

    const saludo = `Hola ${nombre}`;

    return <><h1>{saludo}</h1><p>{subtitulo}</p></>;
};

PrimeraApp.propTypes = {
    nombre: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    nombre: 'Mundo',
    subtitulo: 'Subtitulo'
}

export default PrimeraApp;