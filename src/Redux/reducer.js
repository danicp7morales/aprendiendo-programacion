

import {ADD_PRODUCT,GET_PRODUCTS,GET_BY_ID , DELETE,LOADING,CLEAR} from './actionTypes'
//STATE, EL ESTADO GLOBAL
const initialState = {  //EL ESPACIO DE MI TIENDA DONDE SE ALMACENA TODO
    //POR AHORA CREAMOS UNA TIENDA CHIQUITA
    products : [],//EN ESTE ESPACIO VAN LOS PRODUCTOS
    productDetail : {},//ACA GUARDAMOS LOS DETALLES DE LOS PRODUCTOS
    localProducts : [],//ADD_PRODUCT = {...action.payload, id: localId++}, ACA GUARDAMOS LOS 
    //PRODUCTOS LOCALES 
    loading : false// CREACION DE AVISO SE ESTA 
    
    //PUEDEN AVER MUCHOS MAS ESPACIO EL QUE YO QUIERA, AGREGAR TODO LO QUE QUIERA
}


let localId = 1000;//CREAMOS UN ID PARA NO PISAR LOS PRODUCTOS QUE VENGAN DE UNA API

//EL NOMBRE DE MI TIENDA SE LLAMA REDUCER
export default function reducer (state = initialState, action){
//ACA SE EJECUTAN LA ACCIONES
    switch(action.type){//MIS TRABAJADORES QUE LO QUE HACE CADA UNO
        // EL NOMBRE DEL TRABAJADOR 
        case ADD_PRODUCT://QUIEN SE ENCARGA DE AGREGAR PRODUCTOS (ADD_PRODUCT)
            return{//ACA HACE UNA COPIA DE MI ESTADO PARA QUE NO SE PISE LA INFO QUE HAYA
        //LO QUE TIENE QUE HACER 
                ...state, //HACEMOS UNA COPIA DEL ESTADO ESTO SIEMPRE PARA NO PISAR LA INFO QUE HAYA 
                //            HACEMOS UNA COPIA DE LO QUE HAYA EN LOCAL PRODUCTS Y LE AGREGAMOS 
                //               LO QUE ME TRAIGA EL ACTION PAYLOAD DE ADD PRODUCT
                loading: false,//APAGAMOS EL LOADING
                localProducts:[...state.localProducts, {...action.payload, id: localId++}]
            }
        case GET_PRODUCTS://ESTE EMPLEADO SE ENCARGA DE BUSCAR LOS PRODUCTOS Y TRAERLOS A LA TIENDA
            return{
                ...state,//HACEMOS UNA COPIA DEL ESTADO ESTO SIEMPRE PARA NO PISAR LA INFO QUE HAYA
                
                products: action.payload
            }
        case GET_BY_ID://ESTE EMPLEADO SE ENCARGA DE LA PARTE DE BUSCAR POR ID EN LA TIENDA
            return {
                ...state,
                loading: false,
                productDetail: action.payload,
                products: [action.payload]
            }
        case DELETE:// ESTE EMPLEADO SE ENCARGA DE SACAR ELIMINAR LO QUE LE PIDEN DELA PARTE DE LOS 
        //PRODUCTOS LOCALES
            return {
                ...state,
                //ACA LE ESTOY DICIENDO QUE SE GUARDE TODOS MENOS EL QUE ES IGUAL
                localProducts: state.localProducts.filter(el => el.id !== action.payload),
                products: state.products.filter(el => el.id !== action.payload)
            }
        case LOADING://ESTE SE ENCARGA DE AVISAR QUE ESTAN TRABAJANDO
            return{
                ...state,
                loading: true
            }
        case CLEAR:
            return {
                ...state,
                productDetail:{}
            }


        default:
            return state;
    }
}