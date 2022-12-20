import React from "react";
import "../estilos/Boton.css";

function Boton(props){
    
    // Si el valor no es un número, no es un punto y no es un signo igual, entonces lo consideramos como un operador y retornamos True

    const esOperador = valor => {
        return isNaN(valor) && (valor !== ".") && (valor !== "π");
    };
    
    return(
        <div className={`contenedor-boton ${esOperador(props.children) ? "operador":null}`.trimEnd()}>
            {props.children}
        </div>
    );
}


export default Boton;
