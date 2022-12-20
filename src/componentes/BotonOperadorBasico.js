import React from "react";
import "../estilos/BotonOperadorBasico.css";

function BotonOperadorBasico(props){
    const esOperadorBasico = valor0 => {
        return isNaN(valor0) && (valor0 !== "*") && (valor0 !== "/") && (valor0 !== "+") && (valor0 !== "-");
    };
    
    return(
        <div className={`contenedor-operador-basico ${esOperadorBasico(props.children) ? "operador1":null}`.trimEnd()}
        onClick={()=> props.alClickear(props.children)}>
            {props.children}
        </div>
    );
    }

    export default BotonOperadorBasico;


