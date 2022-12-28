import React from 'react'

import {Route} from 'react-router-dom';//version  5.2.0  enrutando ...
import NavBarF from './ComponenteDeNavegacion/NavBarF';

//COMPONENTES ME TRAJE TODOS LOS QUE VOY A RUTEAR

import Formularios from './ComponentesDeFormularios/Formularios';

function AppF() {
    return (
      <div className="App1">
      
  
       <NavBarF/>
  
      
  
        <Route exact path='/formularios' component={Formularios}/>
  
        
  
  
  
      </div>
    );
  } 
  
  export default AppF;