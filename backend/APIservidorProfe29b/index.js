//EN MI ARCHIVO INDEX VOY A TRATAR DE DEJARLO LO MAS LIMPIO POSIBLE
//NO PONERLES LAS RUTAS ACA , SI LAS RUTAS A ENRUTAR

//tarea crear nuevos middlewares

//server ,METODO(URL path, (req, res))

const express = require('express');//importo

const server = express();//aca aplicaremos todo 



//como traer mis combos de rutas
//aca me traigo server de este archivo NUESTRA RUTA PARA CADA SITIO
const product = require('./Routes/products.js') //NOS TRAEMOS LO QUE ESTE EN EXPORTACION EN PRODUCTS.JS
const clima = require('./Routes/clima.js'); 

//middleware PROPIO aca la descripcion
function logger ( req, res, next) { 
    console.log(req.url)//si yo no pongo el next se quedaria aca y no avanzaria
    next();//todos los middlewares siempre usan un next
}


//el metodo use habilita el middlewares para todo el servidor
const morgan = require('morgan'); //middleware watcher
//muestra las rutas en consolas
server.use(morgan('dev'))//estos dos implicitamente tiene el next() ´por dentro
server.use(express.json())

/*
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});*/


//las direcciones de los grupos de rutas
//primer path prefijado
server.use('/product', product)//products.js aca le digo que se aplique en el index en /product/product=server de ese archivo
server.use('/clima', clima)//clima.js
/*
server.use('/equipo', equipos)aca estan los archivos que me traje
//por cada ruta que tenga mi archivo adelante va a tener /equipo
server.use('/jardineria', jardin)
server.use('/materiales', material)
*/

//con middleawre 
//   req=> resivo/respondo <=res
server.get('/', logger, (req, res)=>{
    console.log('ok funciono el logger')
    res.send('<h1>Te Amo Sabry</h1>')// se puede poner codigo html 
    
})
/*sin middleware
server.get('/', (req, res)=>{
     res.send('<h1>Te Amo Sabry</h1>')// se puede poner codigo html 

})
*/

//FINALIZAR MIS RUTAS cualquier cosa que no exista caera aqui
server.get('*', (req, res)=>{
   // res.send('<h1>No Hay Nada Mas vamos el M4 STATUS 404</h1>')
   res.status(400).send('<h1>No existe la pagina a la que quiere acceder STATUS 400</h1>')
   //res.send.status(400)


})









const puerto = 3001;

server.listen(puerto, () => console.log('corriendo en el puerto 3001 DANY AGUANTE EL M3'))

//cannot get ( no lo encontro)