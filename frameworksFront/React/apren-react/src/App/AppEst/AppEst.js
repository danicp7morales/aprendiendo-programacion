import React from 'react'

import {Route} from 'react-router-dom';//version  5.2.0  enrutando ...


import NavBarEst from '../../ComponenteDeNavegacion/NavBarEst.jsx'
import ComponentesEstilizados from '../../ComponentesEstilos/ComponentesEstilizados';
import Estilos from '../../ComponentesEstilos/Estilos';

//COMPONENTES ME TRAJE TODOS LOS QUE VOY A RUTEAR






//AL NAVBAR LO DEJO FUERA DE MI RUTEO PARA QUE SIEMPRE APARESCA
function AppEst() {
  return (
    <div className="App1">
     <NavBarEst/>
    
      <Route exact path='/estilos' component={Estilos}/>

      <Route exact path='/componentesEstelizados' component={ComponentesEstilizados }/>
      



    </div>
  );
} 
export default AppEst;