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
          <h1>
            Calculadora React - Curso Codo a Codo
          </h1>
          <h3>
            Alumno: Nicolás Mavit. Año: 2022, comisión 22802
          </h3>
        </div> */}

        {/* Calculadora */}
        <div className="contenedor-calculadora">
            <Pantalla input={input}/>
          <div className="fila">
            <Boton alClickear={agregarInput}>(</Boton>
            <Boton alClickear={agregarInput}>)</Boton>
            <Boton alClickear={()=> setInput(`${input}!`)}>x!</Boton>
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
            <Boton alClickear={agregarInput}>MR</Boton>  
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

// val = val.substring(0, val.length - 1)
// setVal(val.slice(0,-1) con un useState para definir los valores

export default App;
