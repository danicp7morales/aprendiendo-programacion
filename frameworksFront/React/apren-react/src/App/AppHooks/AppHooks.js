import React from 'react'

import {Route} from 'react-router-dom';//version  5.2.0  enrutando ...

//COMPONENTES ME TRAJE TODOS LOS QUE VOY A RUTEAR


import NavBarHooks from './ComponenteDeNavegacion/NavBarHooks';
import ContadorHooks from './ComponentesHooks/ContadorHooks';
import RelojConHooks from './ComponentesHooks/RelojConHooks';
import ScrollHooks from './ComponentesHooks/ScrollHooks';
import AjaxHooks from './ComponentesHooks/AjaxHooks';
import HookPersonalizados from './ComponentesHooks/HookPersonalizados';
import Referencias from './ComponentesHooks/Referencias';




//AL NAVBAR LO DEJO FUERA DE MI RUTEO PARA QUE SIEMPRE APARESCA
function AppHooks() {
  return (
    <div className="App1">
    

     <NavBarHooks/>

      <Route exact path='/contadorHooks' component={ContadorHooks}/>


      <Route exact path='/relojConHooks' component={RelojConHooks}/>


      <Route exact path='/scrollHooks' component={ScrollHooks}/>

      <Route exact path='/ajaxhooks' render={() => <AjaxHooks/>}/> 

      <Route exact path='/hookPersonalizados' render={() => <HookPersonalizados/>}/>

      <Route exact path='/referencias' component={Referencias}/> 

     


    </div>
  );
} 

export default AppHooks;