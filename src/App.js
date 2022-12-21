import './App.css';
import Boton from "./componentes/Boton";
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import BotonEqual from './componentes/BotonEqual';
import BotonOperadorBasico from './componentes/BotonOperadorBasico';
import {useState} from 'react';
import {evaluate} from "mathjs";

function App() {

  const [input, setInput] = useState("");

  const agregarInput = val =>{
    setInput(input + val);
  };

  const calcularResultado =()=>{
    if (input){
      setInput(evaluate(input));
    }
  };


  return (
    <div className="App">

      {/* Encabezado */}
        {/* <div className='contenedor-encabezado'>
          <h2>
            Codo a Codo, comisión 22802
          </h2>
          <h3>
            Proyecto: calculadora científica en React
          </h3>
          <h5>
            Alumno: Nicolás Mavit. Año: 2022
          </h5>
        </div> */}

        {/* Calculadora */}
        <div className="contenedor-calculadora">
            <Pantalla input={input}/>
          <div className="fila">
            <Boton alClickear={agregarInput}>(</Boton>
            <Boton alClickear={agregarInput}>)</Boton>
            <Boton alClickear={agregarInput}>x!</Boton>
            <Boton alClickear={()=> setInput(`${input}^2`)}>x²</Boton>
            <Boton alClickear={()=> setInput(`${input}sqrt(`)}>√</Boton>
            <Boton alClickear={agregarInput}>n√</Boton>
          </div>
          <div className="fila">
            <Boton alClickear={()=> setInput(`${input}sin(`)}>sin</Boton>
            <Boton alClickear={()=> setInput(`${input}cos(`)}>cos</Boton>
            <Boton alClickear={()=> setInput(`${input}tan(`)}>tan</Boton>
            <Boton alClickear={()=> setInput(`${input}^3`)}>x³</Boton> 
            <Boton alClickear={()=> setInput(`${input}cbrt(`)}>³√</Boton>
            <Boton alClickear={()=> setInput(`${input}^`)}>xⁿ</Boton>
          </div>
          <div className="fila">
            <Boton alClickear={agregarInput}>1</Boton>
            <Boton alClickear={agregarInput}>2</Boton>
            <Boton alClickear={agregarInput}>3</Boton>
            <BotonOperadorBasico alClickear={agregarInput}>/</BotonOperadorBasico>
            <Boton alClickear={agregarInput}>%</Boton>
            <Boton alClickear={agregarInput}>ln</Boton>
          </div>
          <div className="fila">
            <Boton alClickear={agregarInput}>4</Boton>
            <Boton alClickear={agregarInput}>5</Boton>
            <Boton alClickear={agregarInput}>6</Boton>
            <BotonOperadorBasico alClickear={agregarInput}>*</BotonOperadorBasico>
            <Boton alClickear={()=> setInput(`${input}log(`)}>log</Boton>
            <Boton alClickear={agregarInput}>e</Boton>
          </div>
          <div className="fila">
            <Boton alClickear={agregarInput}>7</Boton>
            <Boton alClickear={agregarInput}>8</Boton>
            <Boton alClickear={agregarInput}>9</Boton>
            <BotonOperadorBasico alClickear={agregarInput}>-</BotonOperadorBasico>
            <BotonClear alClickearClear={()=> setInput("")}>AC</BotonClear>
            <Boton alClickear={()=> setInput(`${input.lastIndexOf()}`)}>MR</Boton>
          </div>
          <div className="fila">
            <Boton alClickear={agregarInput}>.</Boton>
            <Boton alClickear={agregarInput}>0</Boton>
            <Boton alClickear={()=> setInput(`${input}pi`)}>π</Boton>
            <BotonOperadorBasico alClickear={agregarInput}>+</BotonOperadorBasico>
            <BotonEqual alClickear={calcularResultado}>=</BotonEqual>
          </div>
        </div>


    </div>
  );
}

export default App;
