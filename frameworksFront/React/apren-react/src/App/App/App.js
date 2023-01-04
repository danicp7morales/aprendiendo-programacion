import React from 'react'
import './App.css';//ACA PUEDO JUGAR CON MI CSS...
import {Route} from 'react-router-dom';//version  5.2.0  enrutando ...

//COMPONENTES ME TRAJE TODOS LOS QUE VOY A RUTEAR
import About  from '../../Components/About';
import Products from '../../Components/Products';
import LocalProducts from '../../Components/LocalProducts';
import NavBar from '../../ComponenteDeNavegacion/NavBar';
import Detail  from '../../Components/Detail';
import Home from '../../Components/Home';
import Create from '../../Components/Create';


//AL NAVBAR LO DEJO FUERA DE MI RUTEO PARA QUE SIEMPRE APARESCA
function App() {
  return (
    <div className="App">
     <NavBar/>{/* SIEMPRE VA A ESTAR COMO ESTA FUERA DEL RUTEO SE VA A RENDERIZAR SIEMPRE*/}

      <Route exact path='/'>{/* CUANDO SOLO ESTE LA BARRA / SE VA A MOSTRAR EL COMPONENTE HOME 
      Y EL NAVBAR, EN ESTA FORMA DE ENRUTAMIENTO PODEMOS PASAR PROPIEDADES POR AQUI */}
        <Home name={`Mercado (no tan) libre`} location={`Bertamirans`} />
      </Route>

       {/* CUANDO SEA BARRA /PRODUCTS SE VA A MOSTRAR EL COMPONENTE PRODUCTS Y EL NAVBAR */}
      <Route exact path='/products' component={Products}/>

      {/* CUANDO SEA BARRA /lOCALPRODUCTS SOLO SE VA A MOSTRAR ESE COMPONENTE Y EL NAVBAR */}
      <Route exact path='/local' render={() => <LocalProducts name={`SABRY`}/>}/>  
      
      {/* CUANDO SEA BARRA /ABOUT SOLO SE VA A MOSTRAR ESE COMPONENTE Y EL NAVBAR */}
      <Route exact path='/about' render={() => <About/>}/>



      {/* CUANDO SEA BARRA /PRODUCT/:ID  SE VA A MOSTRAR EL COMPONENTE DETAIL Y EL NAVBAR */}
      <Route exact path='/product/:id' component={Detail}/>

     


      <Route exact path='/create' component={Create}/>


     
      



    </div>
  );
} 

export default App;
