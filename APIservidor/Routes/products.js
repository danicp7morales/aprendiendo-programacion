const express = require('express')

const server = express.Router()// CON ESTO LO VOY A PODER LLEVAR  ANCLARLO EN MI INDEX.JS

//const {addProducts} = require('../controllers/index.js')
//DESDE EL MODULE DE CONTROLLERS ME TRAIGO LAS FUNCIONES QUE VAYA A NESESITAR
const {addProducts, getProducts} = require('../controllers')
//MI BASE DE DATOS
const productsNombres = [
    {id: 1, nombre: 'Tostadora',   price:40, seller:'dany'},
    {id: 2, nombre: 'Licuadora',   price:30, seller:'sabry'},
    {id: 3, nombre: 'Procesadora', price:35, seller:'luciano'},
    {id: 4, nombre: 'Plancha',     price:21, seller:'ludmila'},
    {id: 5, nombre: 'Microondas',  price:65, seller:'aylen'}
   
];
 



let id = 6;

//  (product/) EL REQ ME LO TRAE EL CLIENTE, Y LA RESPUESTA SE LA TENGO QUE DAR YO COMO SERVIDOR
server.get('/', (req, res) => {
    res.send(productsNombres)//ACA ENVIO LO QUE TENGO EN MI BASE DE DATOS EN PRODUCTSNOMBRES
})

server.get('/:id', (req, res) => {//POR PARAMS Y QUERYS LLEGAN STRING
    let {id} = req.params//ACA ASY POR DESTRUCTURACION NOS PODEMOS TRAER LO QUE VENGA POR PARAMS
    console.log(typeof id)
    
    //aca logica para buscar el id 
    let productsNombre = productsNombres.find(el => el.id === +id)//el + me lo tramsforma en un numero al string
    //otras posibilidades usar: parseInt , number , == , 
    if(productsNombre) return res.send(productsNombre)
    res.status(400).send('viva el M3 El id ingresado no es el correcto  ')
})

//EL POST ME TRAE INFORMACION HACIA MI BASE DE DATOS DESDE EL CLIENTE
server.post('/:name', (req, res) => {//NOS TRAEMOS POR PARAMETROS EL NOMBRE
    let {name} = req.params// POR PARAMETROS TRAEMOS EL NOMBRE
    let {price} = req.query// POR QUERY TRAEMOS EL PRECIO
    let {seller} = req.body// POR BODY TRAEMOS EL VENDEDOR
//                                             esto es lo que le llega al front
    if (!price || !seller) return res.send(400).send({error: 'datos incompletos'})//SI NO HAY PRECIO O NO HAY SELLER
   // if (!price || !seller) return res.send(400).json({error: 'datos incompletos'})

   productsNombres.push({ id:id++, name, price, seller })//ACA AGREGAMOS EL OBJETO
   res.send(productsNombres)//GUARDANDO EN PRODUCTS EL OBJETO , GUARDANDO EN MI BASE DE DATOS
   
}
)
 

server.post('/:name/:price', (req, res)=> {
    let {name, price} = req.params//NOS TRAEMOS POR PARAMETROS EL NOMBRE Y EL PRECIO
    let {seller} = req.body//Y POR BODY NOS TRAEMOS EL VENDEDOR

    addProducts({id: name.substring(0, 6)+ price, name, price, seller})//ACA AGREGO MI FUNCION PARA AGREGAR MI FUNCION 
    // 
    res.send(getProducts())
                           
})






module.exports = server
