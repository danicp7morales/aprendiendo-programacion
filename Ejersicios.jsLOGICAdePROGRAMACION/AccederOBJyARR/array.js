/* eslint-disable no-use-before-define */
/* eslint-disable no-array-constructor */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
const cars = ["Saab", "Volvo", "BMW"];

//AGREGAR
const car = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

//OTRA FORMA DE AGREGAR
// eslint-disable-next-line no-array-constructor
const carsa = new Array("Saab", "Volvo", "BMW");

//ACCEDER
const carso = ["Saab", "Volvo", "BMW"];
let carol = cars[0];

//CAMBIAR
const carsi = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";

//Las matrices son objetos, El typeofoperador en JavaScript devuelve "objeto"

//Los elementos de matriz pueden ser objetos
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

//Propiedades y métodos de matriz
// eslint-disable-next-line no-unused-expressions
cars.length   // Returns the number of elements
cars.sort()   // Sorts the array

//TECNICA PARA QUE LOS BUCLES NO TENGAN QUE CONTAR
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;

//Acceso al primer elemento del arreglo
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
let fruita = fruits[0];

//Acceso al último elemento del arreglo
const fruitsl = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];

//Elementos de matriz en bucle
//Una forma de recorrer una matriz es usando un forbucle:
const fruitsp = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let texto = "<ul>";
for (let i = 0; i < fLen; i++) {
  // eslint-disable-next-line no-use-before-define
  text += "<li>" + fruits[i] + "</li>";
}
// eslint-disable-next-line no-use-before-define
text += "</ul>";

//También puedes usar la Array.forEach()función:
const fruitsk = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruitsk.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}

//AGREGAR
const caja = ["Banana", "Orange", "Apple"];
caja.push("Lemon"); 

//También se puede agregar un nuevo elemento a una matriz usando la lengthpropiedad:
const fruyu = ["Banana", "Orange", "Apple"];
fruyu[fruyu.length] = "Lemon"; 

//ADVERTENCIA !
//Agregar elementos con índices altos puede crear "agujeros" indefinidos en una matriz:
const fruitsm = ["Banana", "Orange", "Apple"];
fruitsm[6] = "Lemon";  // Creates undefined "holes" in fruits

/*Banana
Orange
Apple
undefined
undefined
undefined
Lemon */

//BIEN
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
// eslint-disable-next-line no-unused-expressions
person.length;    // Will return 3
person[0];        // Will return "John"

//MAL
const personi = [];
personi["firstName"] = "John";
personi["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined

/*La diferencia entre matrices y objetos
En JavaScript, las matrices usan índices numerados .  

En JavaScript, los objetos usan índices con nombre . */

//NUEVA MATRIZ
const pointser = new Array();
const pointster = [];

//OJO
//Un error común
const pointp = [40];//40

//no es lo mismo que:

const points = new Array(40);//UNDEFINED CREA 40 UNDEFINED

//Cómo reconocer una matriz
const fruta = ["Banana", "Orange", "Apple"];
let type = typeof fruits;

//VERIFICAR SI ES UN ARRAY
Array.isArray(fruits);//TRUE O  FALSE


//El instanceofoperador devuelve verdadero si un objeto es creado por un constructor dado:

const fryte = ["Banana", "Orange", "Apple"];

fryte instanceof Array;//TRUE O FALSE , ES UN ARRAY



//Para iterar sobre todos los elementos del data.itemsarray, usamos un for círculo:
// eslint-disable-next-line no-use-before-define
for(let i = 0, l = data.items.length; i < l; i++) 

data.items.forEach(function(value, index, array){}) 

for (const item of data.items) {}

//CON RECURSIVIDAD
function getLeaf(node) { 
    if (node.leftChild) 
        return getLeaf(node.leftChild); // <- recursive call
    
    else if (node.rightChild) 
        return getLeaf(node.rightChild); // <- recursive call
    
    else  // node must be a leaf node
        return node;
}
//GUARDAR LOS TIPOS DE VALORES , SEPARAR DE LOS DE TIPOS OBJETOS CONN LOS DEMAS
        function toArray(obj) { 
        const result = [];
        for (const prop in obj) { 
            const value = obj[prop];
            if (typeof value === 'object') 
                result.push(toArray(value)); // <- recursive call
            
            else 
                result.push(value);
        }   
        
        return result;        
        }

//OTROS EJEMPLOS
        const data = { 
        code: 42,
        items: [
         {  id: 1,
          name: 'foo'
         }
        , 
          {id: 2,
          name: 'bar'
          }
        ]
        };
      
function objetoste(obj) { 
        const resultados = [];
        for (const prop in obj){ 
          const value = obj[prop];
          if (typeof value === 'object') {
            result.push(objetoste(value)); //recurisividad
          }
           else {

            result.push(value)
          }
            }
        return result;
      }
      
      
      console.log(toArray(data));   
      
      
//AYUDANTES
 console.log(data.items)
 //[ Object, Object ]

 console.log(data.items[1])
  Object
     2
     "bar"
     Object

//NO SE QUE ES ESTO
/*Según mi experiencia, el uso de funciones de orden superior en lugar de for o 
for..in los bucles dan como resultado un código sobre el que es más fácil razonar y, 
por lo tanto, más fácil de mantener. */



