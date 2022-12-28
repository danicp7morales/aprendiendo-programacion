import React from 'react';
import Products from './Products';
import LocalProducts from './LocalProducts';

import Style from "./Home.css";

function Home({name, location}) {//CON DESTRUCTURACION
  //function Home(props) { //CON PROPS
  return (
    <div className={Style.separacion}>
      
      <h1>Este es el nuevo {name} </h1>
      {/*<h1>Este es el nuevo {props.name} </h1>*/}
      <h4>Hecho con amor {location}</h4>
      {/*<h4>Hecho con amor {props.location}</h4>*/}
      <hr />
      <LocalProducts/>
      <hr />
      <Products/>
    
    </div>
  )
}

export default Home