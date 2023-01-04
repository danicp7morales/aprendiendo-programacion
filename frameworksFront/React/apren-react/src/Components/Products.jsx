import React from 'react';
import Product from './Product.jsx';
import {connect} from 'react-redux';
import {getProducts, getById, deleteProduct} from '../Redux/actions'
import {Link} from 'react-router-dom'

function Products(props) {


  let [productId, setProductId] = React.useState('');


  let handleOnClick = (e, id) => {
    props.delete(id)
  }
  
  let handleChange = (e) => {
    setProductId(e.target.value)
  }

  let handleById = (e) => {
    props.getById(productId)
    setProductId('')
  }

  return (
    <div>
    

  <Link to='/products'>PRODUCTOS DE LA API</Link>
  <br/>
  {props.loading? <img src='https://png.pngtree.com/png-vector/20191118/ourmid/pngtree-loading-logo-design-circle-loading-illustration-on-white-background-png-image_1996461.jpg' 
   alt='cargando...'/> : props.products.map(el => (
          <div>
          <Product
          key = {el.id}
          id ={el.id}
          name={el.title}
          price={el.id}

          />
        
          <button onClick={(e) => handleOnClick(e, el.id)}> DELETE </button>
        </div>
        
   ))}

   <button onClick={() => {props.getProducts()}}>GET API</button>

   <hr/>

   <input 
   type='text'
   id='productId'
   value={productId}
   onChange={handleChange}
   />

   <button onClick={(e) => {handleById(e)}}>BY ID</button>

    </div>
  )
}



function mapStateToProps (state) {
  return {
    products: state.products,// ACA LO QUE ME VA A TRAER DE MI TIENDA ES LO QUE TIENE EN PRODUCTS
    loading: state.loading,//ACA LE ESTOY PIDIENDO SU VALOR, TRAYENDOME SU VALOR
  }
}

function mapDispatchToProps (dispatch) {//ESTO PONE EN EJECUCION LAS DIFERENTES FUNCIONES QUE 
  //SE ENCUENTRAN EN MIS ACTIONS
  return {
    delete: id => dispatch(deleteProduct(id)),
    getById:  productId => dispatch(getById(productId)),
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);