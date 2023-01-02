"use strict";//usamos el uso estricto

var express = require("express");//requerimos express

var router = express.Router();//ejecutamos el router de express

const models = require("../models/model");//requerimos el archivo de models/model

// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan
// Backend RUTAS

// EN MODEL TENEMOS TODAS NUETRA FUNCIONES QUE VA A REQUERIR NUESTRO RUTEO

// REQUEST = /houses le respondere lo que me traiga mi funcion listHouses me va a traer en un arreglo todas las houses
router.get("/houses", (req, res) => {//en caso de que sea requerido /houses rsepondemos
    //lo tramsformamos en json lo que me traigan desde el archivo models.con la funcion de listHouses
    res.json(models.listHouses())//el models hace referencia a mi arcivo model.js  
    //aca mi respuesta es en formato json 
})

// con post nos traemos la info desde el front a nuestra base de datos
router.post("/houses", (req, res) =>{
    const { house } = req.body;//lo que me ingresan en el body lo traigo a house
    //post : subir algo desde el body
    //aca ejecutamos nuestra funcion que tenemos en nuestro archivo model.js
    res.json(models.addHouse(house))
})
// obtener los personajes, devolvemos lo que me traigan desde la data base 
// EL GET ENVIA IMFORMACION AL FRONT
router.get("/characters", (req, res) => {
    res.json(models.listCharacters())//esta funcion me devuelve un listado de todos los personajes
})
// subimos a la data base los datos de como un formulario
// CON EL POST NOS TRAEMOS INFORMACION DESDE EL CLIENTE EL FRONT
// POST ES UN ENVIO DESDE EL LADO DEL CLIENTE QUE LO RESIVE MI BASE DE DATOS
router.post("/characters", (req, res) => {
    //con el destructuring nos traemos todo esto desde el lado del servidor del body
    const { name, lastName, house, dateOfBirth, isMuggle} = req.body; 
    //si no hay mensaje pasa al else, responde abajo en caso de que si msg es true 
    //mi respuesta es un status 404
    if(models.addCharacter(name, lastName, house, dateOfBirth, isMuggle).msg){
    res.status(404).send(models.addCharacter(name, lastName, house, dateOfBirth, isMuggle))
    }
    else{
       res.json(models.addCharacter(name, lastName, house, dateOfBirth, isMuggle))
    }
})

//router ejecutamos express Y HACEMOS UNA PETICION AL SERVIDOR
router.get("/characters/:houseName", (req, res) => {
    //nos traemos esta info desde el objeto params {}
    const { houseName } = req.params;
    //y esta info del fullname desde ? query
    const { fullName } = req.query;
    //ejecutamos lafuncion listCharacters con los valores houseName, fullName
    res.json(models.listCharacters(houseName, fullName))
})

//PETICION AL SERVIDOR SE EJECUTA DESDE EL LADO DEL FRONTEND 
router.get("/spells", (req, res) => {
    const { name } = req.query;
    res.json(models.showSpells(name));
})

//ENVIO A MI BASE DE DATOS DESDE EL FRONTEND ATRAVES DE UN CLIENTE
router.post("/spells", (req, res) => {
    //CON DESTRUCTURING TRAEMOS DESDE EL BODY  LA INFO
    const { name, id,  spellName, description } = req.body;
    res.status(201).json(models.addSpell(name, id, spellName, description))
})

//EL GET BUSCA LA INFO EN MI BASE DE DATOS Y SE LA ENVIA A MI FRONTEND O CLIENTE
router.get("/wand", (req, res) => {
    const { name } = req.body//DESDE EL BODY TRAEMOS EL NOMBRE Y CON ESA INFO EJECUTAMOS 
    //NUESTRA FUNCION SHOUWAND
    res.json(models.showWand(name))
})

router.post("/wand", (req, res) => {
    const { name, wood, core, length } = req.body
    res.status(201).json(models.addWand(name, wood, core, length))
})

module.exports = router;