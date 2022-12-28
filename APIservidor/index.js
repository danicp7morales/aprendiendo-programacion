const express = require('express');

const server = express();

const morgan = require('morgan'); 

//aca me traigo server de este archivo NUESTRA RUTA PARA CADA SITIO
const product = require('./Routes/products.js') //NOS TRAEMOS LO QUE ESTE EN EXPORTACION EN PRODUCTS.JS
const clima = require('./Routes/clima.js'); 

//middleware PROPIO
function logger ( req, res, next) { 
    console.log(req.url)//si yo no pongo el next se quedaria aca y no avanzaria
    next();
}


server.use(morgan('dev'))//estos dos implicitamente tiene el next() ´por dentro
server.use(express.json())


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



server.use('/product', product)// aca le digo que se aplique en el index en /product/product=server de ese archivo
server.use('/clima', clima)
/*
server.use('/equipo', product)
server.use('/jardineria', product)
server.use('/materiales', product)
*/


//                req=> resivo/respondo <=res
server.get('/', logger, (req, res)=>{
    console.log('ok funciono el logger')
    res.send('<h1>Te Amo Sabry</h1>')// se puede poner codigo html 

})




//FINALIZAR MIS RUTAS 
server.get('*', (req, res)=>{
   // res.send('<h1>No Hay Nada Mas vamos el M4 STATUS 404</h1>')
   res.status(400).send('<h1>No Hay Nada Mas vamos el M4 STATUS 400</h1>')
   //res.send.status(400)


})











server.listen(3001, () => console.log('corriendo en el puerto 3001 DANY AGUANTE EL M3'))

//cannot get ( no lo encontro)