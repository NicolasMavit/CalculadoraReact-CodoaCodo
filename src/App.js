import './App.css';
import Boton from "./componentes/Boton";
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import BotonEqual from './componentes/BotonEqual';
import BotonOperadorBasico from './componentes/BotonOperadorBasico';

function App() {
  return (
    <div className="App">

      {/* Encabezado
        <div className='contenedor-encabezado'>
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
            <Pantalla/>
          <div className="fila">
            <Boton>(</Boton>
            <Boton>)</Boton>
            <Boton>x!</Boton>
            <Boton>x²</Boton>
            <Boton>√</Boton>
            <Boton>n√</Boton>
          </div>
          <div className="fila">
            <Boton>sin</Boton>
            <Boton>cos</Boton>
            <Boton>tg</Boton>
            <Boton>x³</Boton>
            <Boton>³√</Boton>
            <Boton>xⁿ</Boton>
          </div>
          <div className="fila">
            <Boton>1</Boton>
            <Boton>2</Boton>
            <Boton>3</Boton>
            <BotonOperadorBasico>/</BotonOperadorBasico>
            <Boton>%</Boton>
            <Boton>ln</Boton>
          </div>
          <div className="fila">
            <Boton>4</Boton>
            <Boton>5</Boton>
            <Boton>6</Boton>
            <BotonOperadorBasico>*</BotonOperadorBasico>
            <Boton>log</Boton>
            <Boton>e</Boton>
          </div>
          <div className="fila">
            <Boton>7</Boton>
            <Boton>8</Boton>
            <Boton>9</Boton>
            <BotonOperadorBasico>-</BotonOperadorBasico>
            <BotonClear>AC</BotonClear>
            <Boton>MR</Boton>
          </div>
          <div className="fila">
            <Boton>.</Boton>
            <Boton>0</Boton>
            <Boton>π</Boton>
            <BotonOperadorBasico>+</BotonOperadorBasico>
            
            <BotonEqual>=</BotonEqual>
          </div>
        </div>


    </div>
  );
}

export default App;
