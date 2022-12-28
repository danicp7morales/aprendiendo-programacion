import React from 'react'
//ESTE COMPONENTE SE VA A TRAER LA FUNCION DE AGREGAR PRODUCTO
import { addProduct } from '../Redux/actions'//NOS TRAEMOS LA FUNCION addProduct PARA USARLA EN ESTE 
//COMPONENTE

import {connect} from 'react-redux'//SI UTILIZARAMOS USESELECTOR NO SE UTILIZA CONNECT

import {useHistory} from 'react-router-dom'

//si vamos a crear que funcion nos tenemos que traer
//COMPONENTE CREATE
function Create({add}) {//ADD ESTA ES LA FUNCION QUE YO ME ESTOY MAPEANDO POR PROPS AL COMPONENTE
//ACA HACEMOS NUESTRA LOGICA Y EN EL RETURN NUESTRO FORMULARIO

//ESTA ES LA LOGICA DE UN FORMULARIO

//ESTE ES UN ESTADO LOCAL, ES UN ESTADO DE MI COMPONENTE
const initialState = {//CREAMOS UN {} ESTADO PARA MI FORMULARIO

  name:'',
  price:'',
  location:'',
  seller:''
  //ACA PUEDO SEGUIR CREANDO MAS...PODRIA CREARLES MAS COSAS A EL ESTADO DE MI FORMULARIO TODO LO QUE YO QUISIERA
}

//CREAMOS UN ESTADO QUE ENGLOBE MI INITIAL STATE
let [input, setInput] = React.useState(initialState)

let history = useHistory()

//CREAMOS UNA FUNCION PARA MANEJAR MI FORMULARIO 
//ESTA FUNCION ES PARA QUE ME VAYA CARGANDO CADA VEZ QUE EL CLIENTE ESCRIBE ALGO DEPENDE DEL NOMBRE DEL INPUT 
// Y DEL VALOR QUE LE DAN AL INPUT
let handleOnChange = (e) => {//MANEJA LOS CAMBIOS QUE HAYA EN MI FORMULARIO
  
  //ACA LO QUE ESTAMOS HACIENDO ES HACIENDO UNA COPIA DE MI ESTADO Y LO QUE  ME TRAIGA EL EVENTO EN SU NAME Y EN 
  // SU VALOR ME LO GUARDO EN EL ESTADO
  setInput(prev => ({...prev, [e.target.name] : e.target.value}))//ACA VA SETEANDO MI ESTADO
}//PREV ES MI ESTADO ACTUAL

let handleOnSubmit = (e) => {//ESTA ES LA FUNCION QUE MENEJA EL ENVIO
  e.preventDefault()//EVITA QUE SE CARGE LA PAGINA
  add(input)//USAMOS LA FUNCION ADD QUE ME LO PASA POR PARAMETROS EN MI COMPONENTE
  setInput(initialState)//SETEA MI ESTADO NUEVAMENTE SIN NADA 
  history.push('/local') 
}

  return (
    <div>
      <h2>ADD NEW PRODUCT</h2>
      <hr /> 
      {/*<form  onSubmit={handleOnSubmit}>*/}
      <form  onSubmit={e => handleOnSubmit(e)}>
        <div>
          <label>PRODUCTS NAME:</label>
          <input 
          type="text"
          name='name'
          value={input.name}
          onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <label>PRODUCTS PRICE:</label>
          <input 
          type="text"
          name='price'
          value={input.price}
          onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <label>PRODUCTS LOCATION:</label>
          <input 
          type="text"
          name='location'
          value={input.location}
          onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <label>PRODUCTS SELLER:</label>
          <input 
          type="text"
          name='seller'
          value={input.seller}
          onChange={(e) => handleOnChange(e)}
          />
        </div>


        <input type='submit' value='AGREGAR' disabled={!input.name ? true : false}/>

      </form>

    </div>
  )
}

function mapDispatchToProps(dispatch){
  return{
    //ADD ESTA ES LA FUNCION QUE YO ME ESTOY MAPEANDO POR PROPS AL COMPONENTE
    //RETORNA UNA FUNCION ADD
    add: input => dispatch(addProduct(input))
  }
  
}


export default connect (null, mapDispatchToProps)(Create)