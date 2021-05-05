import React from 'react';
import ReactDOM from 'react-dom'
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp'
import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(<><PrimeraApp nombre={'Daniel'} subtitulo={'Mi primera aplicación'} />
    <CounterApp value={1998} /></>, divRoot);