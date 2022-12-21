import React from "react";
import "../estilos/BotonClear.css";

const BotonClear = (props)=>(
    <div 
    className="Boton-clear" 
    onClick={props.alClickearClear}>
    {props.children}
    </div>
);


// Le agregué el input directamente en su botón de App.js

export default BotonClear;