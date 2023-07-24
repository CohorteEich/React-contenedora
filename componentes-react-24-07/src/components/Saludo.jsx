import React from 'react';
import './saludo.css';
function MiComponente(props) {
  return <h3>Hola te saludo a ti : {props.nombre}</h3>;
}

export default MiComponente;