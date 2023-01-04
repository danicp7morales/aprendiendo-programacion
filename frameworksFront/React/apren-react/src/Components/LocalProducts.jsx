
import React from 'react'
import Product from './Product'
import {useDispatch, useSelector} from 'react-redux'
import {deleteProduct} from '../Redux/actions'
import {Link} from 'react-router-dom'


//ACA SI TENGO QUE HACER TODA MI LOGICA PARA CONECTARME A REDUX
function LocalProducts(props) {

  //ACA INSTANCIO ESTE HOOK
  let dispatch = useDispatch();

// DE MI REDUCER ME TRAIGO ESTA PARTE DE MI ESTADO 
  let local = useSelector(state => state.localProducts)//localProducts : [],

  let handleOnClick = (e, id) => {
    
    
    dispatch(deleteProduct(id))
  }

  return (
    <div>
      <Link to= '/local'>PRODUCTOS PROPIOS</Link>
      <hr/>
      {/*PREVENCION POR SI YO NO TENGO NADA 'SIN INVENTARIO' */}
      {local.length === 0 ? `SIN INVENTARIO` :
      local.map(el => (
        <div>
          <Product
          key = {el.id}
          id ={el.id}
          name={el.name}
          price={el.price}

          />
          {/*ACA HAGO UN DISPATCH PARA PODER ELIMINAR ALGUN ELEMENTO DE MI TIENDA */}
          <button onClick={(e) => handleOnClick(e, el.id)}> DELETE </button>
        </div>
        
      ))}
      
    </div>
  )
}

export default LocalProducts