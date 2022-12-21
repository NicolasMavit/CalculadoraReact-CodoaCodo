import React from "react";
import "../estilos/BotonEqual.css";




const BotonEqual = (props)=>(
    <div 
    className="Boton-equal"
    onClick={props.alClickear}>
    {props.children}
    </div>
);



export default BotonEqual;

