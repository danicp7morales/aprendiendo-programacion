"use strict";

//                                HARRY POTTER


//"`addCharacter` y `listCharacters`""Inicialmente devuelve un arreglo vacío"
var characters = [];

//arreglo vacio que me debuelve mi funcion listHouses
var houses = [];

//return personaje ? !personaje.wand.wood ? "el personaje no tiene varita" : personaje.wand : [];

module.exports = {
  reset: function () {
    // No es necesario modificar esta función (Ya está completa)
    characters = []; //todos los personajes
    houses = [];
  },

  //1

  listCharacters: function (house, fullName = false) {
    // Devuelve un arreglo con todos los personajes
    // Si recibe un nombre de house como parámetro debería filtrar solo los personajes de ella
    // Si recibe un segundo parámetro en true
    // debe devolver únicamente los nombres y apellidos de los personajes

    let arreglo = [];

    let indice = houses.indexOf(house);

    if (indice !== -1) {
      indice++;

      const result = characters.filter((element) => element.houseId === indice);

      if (fullName === true) {
        for (const obj of result) {
          arreglo.push(`${obj.name} ${obj.lastName}`);
        }

        return arreglo;
      }

      return result;
    }

    return characters;
  },

  addHouse: function (house) {
    // Agrega el nombre de una nueva casa verificando que no exista
    // Debe retornar el nombre de la casa agregado o existente
    if (houses.indexOf(house) === -1) {
      houses.push(house);
    }

    return house;
  },

  //"Inicialmente devuelve un arreglo de casas vacío"
  //DEVUELVE TODAS LAS CASAS
  listHouses: function () {
    // Devuelve un arreglo con todas las casas
    return houses;
  },

  //AGREGAR UN PERSONAJE
  addCharacter: function (name, lastName, house, dateOfBirth, isMuggle) {
    // Agrega un nuevo personaje, inicialmente su propiedad wand (varita) debe ser un objeto vacío
    // Adicionalmente va a ser necesario guardar, en su propiedad houseId, el número (id) de la casa y no su nombre
    // (que es lo que recibimos por parámetros)
    // El número de casa debe empezar desde 1 y no desde 0.
    // su propiedad spells (hechizos) será inicialmente un arreglo vacío
    // su propiedad yearOfBirth debe ser un número (pista: podemos sacarla de dateOfBirth)
    // si el nombre de la casa no esta en el arreglo de casas:
    // no debe agregarse el personaje al arreglo de personajes y debe devolver un objeto con un mensaje de error,
    // (mirar en los tests)
    // Si la casa existe y el personaje es agregado con éxito debe retornar el personaje creado

    let indice = houses.indexOf(house);

    if (indice === -1) return { msg: "La casa ingresada no existe" };

    let personaje = [];

    personaje = characters.find((pers) => pers.name === name);

    if (!personaje) {
      const character = {
        name,
        lastName,
        houseId: ++indice,
        dateOfBirth,
        yearOfBirth: parseInt(dateOfBirth.slice(6)),
        isMuggle,
        wand: {},
        spells: [],
      };

      characters.push(character);

      return character;
    } else {
      return personaje;
    }
  },

  //AGREGAR UN HECHIZO
  addSpell: function (name, id, spellName, description) {
    // recibe el nombre de un personaje, id del hechizo, nombre del hechizo y descripción del hechizo
    // debe encontrar en el arreglo de personajes al personaje que matchee con el nombre
    // recibido por parametro y debe agregar a su propiedad spells un nuevo objeto hechizo de la forma:
    //{id: id, spellName: spellName, description: description}
    // una vez agregado el hechizo debe retornar un objeto con un mensaje de éxito (ver el test de las rutas)
    // Si no se le pasa id, spellName o description no agrega el hechizo al personaje

    let personaje = [];

    personaje = characters.find((pers) => pers.name === name);

    if (personaje && id && spellName && description) {
      personaje.spells.push({
        id,
        spellName,
        description,
      });

      return { msg: "Hechizo agregado correctamente" };
    }

    return personaje;
  },

  //DEVUELVE TODOS LOS HECHIZOS
  showSpells: function (name) {
    // Devuelve todos los hechizos de un personaje en particular
    // Si no encuentra al personaje que matchee con el nombre recibido por parámetros
    // devuelve un arreglo vacío
    let personaje = [];

    personaje = characters.find((pers) => pers.name === name);

    return personaje ? personaje.spells : [];
  },

  //BUSCADOR DE UN PERSONAJE
  addWand: function (name, wood, core, length) {
    // Recibe : nombre de personaje (name), material de la varita (wood), núcleo de la varita (core) y largo de la varita (length)
    // Debe encontrar el personaje que matchee con el nombre recibido
    // Si no encuentra ningun personaje que matchee debe devolver un arreglo vacío
    // Si lo encuentra pero ese personaje YA TIENE asignada una varita en su propiedad "wand" debe devolver el siguiente string:
    // "Ya existe una varita para este personaje"
    // caso contrario debe agregar a la propiedad wand del personaje un objeto de la siguiente forma
    // {wood: wood, core: core, length: length}

    let personaje = [];

    personaje = characters.find((pers) => pers.name === name);

    if (personaje && !personaje.wand.wood) {
      personaje.wand = {
        wood,
        core,
        length,
      };
      return "varita agregada correctamente";
    } else if (personaje && personaje.wand.wood) {
      return "Ya existe una varita para este personaje";
    }
    return personaje ? personaje : [];
  },

  //DEVUELVE LA VARITA DE UN PERSONAJE
  showWand: function (name) {
    // Devuelve la varita de un personaje en particular
    // Si no encuentra al personaje que matchee con el nombre recibido por parámetros devuelve un arreglo vacío
    // Si el personaje en cuestión no tiene varita devuelve el string "el personaje no tiene varita"
    let personaje = [];

    personaje = characters.find((pers) => pers.name === name);

    return personaje
      ? !personaje.wand.wood
        ? "el personaje no tiene varita"
        : personaje.wand
      : [];
  },
};











const { brands, cars } = require('../utils');
const utils = require('../utils');
// ⚠️ No modificar nada arriba de esta línea ⚠️

/// =========================================================================== ///
/// =========================== 🚗 HENRY-CARS 🚗 ============================ ///
/// =========================================================================== ///

/*
  1️⃣ ***** EJERCICIO 1 ***** - addCars 1️⃣:
  🟢 Agregar un coche a utils.cars.
  🟢 Agregar el ID del mismo coche a la marca recibida por parámetros (brand).
  🟢 Si el coche ya existe en la base de datos, arrojar un Error('Este coche ya existe en la base de datos') 
  🟢 Si la marca ya existe en la base de datos, arrojar un Error('Esta marca ya existe en la base de datos')
  🟢 Retornar todos los coches si la operación fue exitosa.

  📢 PUNTOS A TENER EN CUENTA 📢
  1) Puedes acceder a los coches mediante *utils.cars*.
  2) Recuerda que el mensaje de error deben ser exactamente como lo pide el enunciado.
  3) Recuerda verificar si el coche que intentas agregar, ya existe en utils.cars.
  4) Investiga acerca de Throw Error() para devolver errores.
  */
  
const addCars = (car, brand) => {

let existeCar= cars.some(auto => auto.id === car.id)//true o false
let existeBrand= brands.some(marca => marca.name === brand)//true o false

if(existeCar === true) Throw 'Este coche ya existe en la base de datos';
if(existeBrand === true) Throw 'Este marca ya existe en la base de datos';

utils.brands.push({ name: brand, cards: car.id}) 
  
utils.cars.push(car);
return utils.cars;


  
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = addCars;




const utils = require('../utils');
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  2️⃣ ***** EJERCICIO 2 ***** - listCars 2️⃣:
  
  🟢 Los clientes pueden reservar con anticipación el color de su coche. Es por esto que necesitamos que filtres 
  y los coches que cumplan con dicho color.
  🟢 Si en la base de datos no hay coches con ese color, devolver un error que diga: "No hay coches con ese color 
  en la base de datos".

  📢 PUNTOS A TENER EN CUENTA 📢
  1) Puedes acceder a los coches a través de *utils.cars*.
  2) Recibirás el color por parámetro.
*/

const listCars = (color) => {

 const existeColor = utils.cars.find(auto => auto.color === color );

 if(existeColor === false) Throw "No hay coches con ese color en la base de datos";

 return existeColor;

};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = listCars;






const utils = require('../utils');
/*⚠️ No modificar nada arriba de esta línea ⚠️

  3️⃣ ***** EJERCICIO 3 ***** - updateCar 3️⃣:

  🟢 Debes buscar un coche recibido por parámetro dentro del array de utils.cars y actualizar las propiedades: new 
  y price. También agrégale una nueva propiedad llamada "electric".
  🟢 Si no encuentras el coche debes arrojar un error que diga: "No se encontro el coche solicitado".
  🟢 Si alguna de las propiedades del coche que recibimos es undefined, debe arrojar un error que diga: "Faltan 
  datos a completar".

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recuerda que el mensaje de error deben ser exactamente como lo pide el enunciado.
  2) Recuerda agregar la nueva propiedad "electric", ésta no se encuentra en examples.json.
  */

const updateCar = (car) => {

  const existeElAuto = utils.cars.find(auto => auto.id === car.id );

  if(!existeElAuto) Throw 'No se encontro el coche solicitado'
  if(car.new === undefined || car.price === undefined ) Throw 'faltan datos a completar'

  existeElAuto.new = car.new;
  existeElAuto.price = car.price;
  existeElAuto.electric = car.electric



};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = updateCar;




{
  "cars": [
    {
    "id": "adhkj123adsh3s1gsfud22",
    "model": "X5",
    "color": "Blue",
    "price": 20300,
    "new": false
  },
  {
    "id": "ada32j2312lk3j12ndas5d",
    "model": "207",
    "color": "White",
    "price": 20300,
    "new": false
  }
],
  "brands": [{                            
    "name": "BMW",                         
    "cars": ["adhkj123adsh3s1gsfud22"]     
  },                                       
  {       
    "name": "Mercedez Benz",
    "cars": ["ada32j2312lk3j12ndas5d"]  
  }]
}