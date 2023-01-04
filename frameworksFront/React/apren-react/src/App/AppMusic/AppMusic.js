import React from 'react'

import {Route} from 'react-router-dom';//version  5.2.0  enrutando ...
import SongSearch from './ComponenteCanciones/SongSearch';
import NavBarMusic from './ComponenteDeNavegacion/NavBarMusic';

//COMPONENTES ME TRAJE TODOS LOS QUE VOY A RUTEAR



function AppF() {
    return (
      <div className="App1">
      
  
       <NavBarMusic/>
  
      
  
        <Route exact path='/songSearch' component={SongSearch}/>
  
        
  
  
  
      </div>
    );
  } 
  
  export default AppF;