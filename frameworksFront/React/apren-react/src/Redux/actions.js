






//A ESTAS FUNCIONES LAS VAN A IMPORTAR LOS COMPONENTES QUE NESESITEN MANEJAR EL STOCK DE MI CUENTA
import {ADD_PRODUCT,GET_PRODUCTS,GET_BY_ID , DELETE,LOADING,CLEAR} from './actionTypes'

//ACA VAMOS HACER LAS FUNCIONES CREADORAS DE LAS ACCIONES

//ESTA FUNCION ME LA PUEDO LLEVAR A TODOS LOS COMPONENTES QUE LA NESESITEN USANDO UN DISPATCH
//LE DIRIAMOS DESPACHAME ESTA ACCION POR FAVOR JE...
//ESTA ES UNA FUNCION CREADORAS DE ACCIONES


//ESTA FUNCION LLEVA ALGO A MI ESTADO GLOBAL DE MI REDUCER
export function addProduct (payload) {// ESTAS FUNCIONES SON USADAS POR LOS COMPONENTES
    //export function addPokemon (payload) {
        //SIEMPRE ESTAS FUNCIONES VAN A RETORNAR UN OBJETO {}
    return {
        type: ADD_PRODUCT,//HACIA QUE EMPLEDO VA ESTA INFO
        payload
    }//ESTO VIAJA A MI REDUCER INGRESA EL TYPE Y EL PAYLOAD,

}

//ESTA FUNCION ELIMINA ALGO DE MI REDUCER DESDE EL CLIENTE ME DICE QUE QUIERO ELIMINAR
export function deleteProduct (id) {
    return {
        type: DELETE,
        payload:id
    }

}
//ESTO SOLAMENTE ME MUESTRA UN LOADING
export function loading () {
    //SIEMPRE ESTAS FUNCIONES ME RETORNAN UN {} OBJETO
    return {
        type: LOADING,
    
    }

}

export function clear () {
    return {
        type: CLEAR,
    
    }

}


//ESTA FUNCION ME TRAE DATA DESDE UNA API
//FUNCION COMO OBTENER ALGO DE UNA API
export function getProducts () {
    //thunkMiddleware SE APLICA LA ASYNCRONIA
    return function (dispatch) {
        dispatch(loading())//HACEMOS UN DISPATCH 
        
        return fetch(``)
        //return fetch(`https://`)  
        .then(res => res.json())
        .then(res => (
            dispatch({
                type: GET_PRODUCTS,
               // type: GET_POKEMONS,
                payload: res
            })
        ))
        
    }

}

//QUE HACE ESTA FUNCION CREADORA LA PODES USAR EN CUALQUIER COMPONENTE QUE NESESITE ESTA INFO
//TE BUSCA EN UNA API EL PRODUCTO QUE TE PIDA EL COMPONENTE , QUE VENGAN DESDE LOS COMPONENTES
//DEL FRONT , DEL CLIENTE
//EN ESTE EJEMPLO BUSCARIA UNA FOTO POR ID QUE ME PASE EL CLIENTE ATRAVEZ DEL COMPONENTE DE IMAGEN 
//QUE DEBERIA CREAR   
export function getById (productId) {//OBTENER POR UN IDENTIFICADOR
    //thunkMiddleware
    return function (dispatch) { 
        dispatch(loading(`${productId}`));//ACA COMBIERTO A LOADING EN TRUE 
        //LUEGO DE QUE SE CARGO LA RESPUESTA DEL LADO DE LOS TRABAJADORES LO PONEN EN FALSE, UNA VEZ
        //QUE SE ENVIO LA RESPUESTA...            
        //INTERPOLANDO
        return fetch(`${productId}`)
        .then(res => res.json())
        .then(res => (
            dispatch({
                type: GET_BY_ID,
                payload: res
            })
        ))
        
    }

}


//las acciones son objetos que van a tener un {type:ADD_PRODUCT, i pueden tambien tener un payload}
//imformacion extra

//LAS ACTIONS CREATOR SON FUNCIONES CREADORAS DE ACCIONES
