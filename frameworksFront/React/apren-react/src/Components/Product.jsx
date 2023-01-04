import React from 'react'

import {Link} from 'react-router-dom'// ESTO TE LLEVA HACIA OTRO LADO EL QUE LE DIGAMOS

//ESTE COMPONENTE ES SOLAMENTE PRESENTACIONAL NO SE VA A CONECTAR CON REDUX
function Product(props) {
  let {id} = props
  return (
    <div>
      <Link to={`/product/${id}`}>
        <h2>Products name: {props.name}</h2>
      </Link>
      <h4>Price: {props.price}</h4>

    </div>
  )
}

export default Product