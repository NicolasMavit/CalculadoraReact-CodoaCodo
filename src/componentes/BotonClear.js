import React from "react";
import "../estilos/BotonClear.css";

const BotonClear = (props)=>(
    <div className="Boton-clear">
        {props.children}
    </div>
);




export default BotonClear;