
//TODAS ESTAS FUNCIONES PUEDEN SER EXPORTADAS HACIAS MIS RUTAS 

//ESTA SERIA COMO MI BASE DE DATOS
const productsNombres = [
    {id: 1, nombre: 'Tostadora',   price:40, seller:'dany'},
    {id: 2, nombre: 'Licuadora',   price:30, seller:'sabry'},
    {id: 3, nombre: 'Procesadora', price:35, seller:'luciano'},
    {id: 4, nombre: 'Plancha',     price:21, seller:'ludmila'},
    {id: 5, nombre: 'Microondas',  price:65, seller:'aylen'}
   
]

//let id = 6

 /*
const productsElectrinica = [
    {id:1 , nombre: 'netoobook', price:72},
    {id:2 , nombre: 'celular', price:50},
    {id:3 , nombre: 'auricular', price:10},
    {id:4 , nombre: 'parlantes', price:12},
    {id:5 , nombre: 'mouse', price:7}
]
*/


//FUNCIONES CONTROLLADORES

//AGREGA PRODUCTOS A MI BASE DE DATOS
function addProducts (el) {
     if(!productsNombres.includes(el)){//ACA SE PREGUNTA SI EL ELEMENTO INGRESADO NO SE 
        //ENCUENTRA EN MI BASE DE DATOS SI NO SE ENCUENTRA EL PRODUCTO ABAJO LO AGREGAMOS
        productsNombres.push(el);//
        return 'Producto agregado con exito';
     }else {
        throw new Error ('El producto ya existe')
       // throw 'El producto ya existe';//SI NO LE TIRAMOS ESTE ERROR
     }
}

//ES LO MISMO QUE LO ANTERIOR PERO HACIA OTRA BASE DE DATOS
/*function addProductsE (el) {
    if(!productsElectrinica.includes(el)){
       productsElectrinica.push(el);
       return 'Producto agregado con exito';
    }else {
       //throw new Error ('El producto ya existe')
       throw 'El producto ya existe';
    }
}
*/

//ESTA FUNCION ME RETORNA TODO LO QUE HAY EN MI BASE DE DATOS
function getProducts (){
    return productsNombres;
}
/*
function getProductsE (){
    return productsElectrinica;
}*/


//PONEMOS A TODAS MIS FUNCIONES EN EXPORTACION PARA PODER USARLAS EN MI RUTEO
module.exports = {addProducts, getProducts}