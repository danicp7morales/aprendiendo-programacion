//SPREED

console.log( Math.max(3, 5, 1) ); 

//ACA ABAJO NO SE PUEDE
let arr = [3, 5, 1];

console.log( Math.max(arr) ); 

let arre = [3, 5, 1];

//hacemos una copia del arreglo con el spreed ...
console.log( Math.max(...arre) );



//BUSCANDO EL VALOR MAXIMO ENTRE X CANTIDAD DE ARRAYS DE NUMEROS
let arr1 = [5, -2, 3, 4];
let arr2 = [8, 3, -8, 1, 10, 44, 33];
let arr3 = [8, 3, -8, 1, 1777, 44, 33, 67, 88];
let arr4 = [8, 3, -8, 1, 10, 44, 33, 67, 88, 654];

//te busca el valor maximo entre dos arrays o mas
console.log( Math.max(...arr1, ...arr2, ...arr3, ...arr4) ); 



//COMBINANDO VALORES CON ARRAYS ejecuntando una funcion de buscar al mayor
let arruno = [1, -2, 3, 4];
let arrdos = [8, 3, -8, 1];
let arr55 = [8, 3, -8, 1, 10, 44, 33, 67, 88, 654];


console.log( Math.max(1, ...arruno, 2, 5, ...arrdos, 77, 25, ...arr55,) ); 



//COMBINANDO ARRAYS PARA AGREGAR TODOS ESOS VALORES EN UNO SOLO

let arr11 = [3, 5, 1];
let arr22 = [8, 9, 15];

let merged = [0, ...arr11, 2, ...arr22];

console.log(merged); 


//UNO PUEDE USAR EL SPREED ... PARA SEPARAR UNAPALABRAS O VARIAS
let str13= "Hola ";
let str17 = "Como estas";

console.log( [...str13, ...str17] ); 

let str21 = "Hola";

// Array.from convierte un iterable en un array
console.log( Array.from(str21) ); 




//referencia uno
let arr44 = [1, 2, 3];
//referencia dos distinta a la uno 
let arrCopy = [...arr44]; // separa el array en una lista de parameters
                        // luego pone el resultado en un nuevo array

// ¿los arrays tienen el mismo contenido?
console.log(JSON.stringify(arr44) === JSON.stringify(arrCopy)); // true

// ¿los arrays son iguales?
console.log(arr44 === arrCopy); // false (no es la misma referencia)

// modificando nuestro array inicial no modifica la copia:

arrCopy.push(4);

console.log(arr44); // 1, 2, 3, 4
console.log(arrCopy); // 1, 2, 3






//OBJETO                          SPREED CON OBJETOS

let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // separa el objeto en una lista de parámetros
                          // luego devuelve el resultado en un nuevo objeto

// ¿tienen los objetos el mismo contenido?
console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// ¿son iguales los objetos?
console.log(obj === objCopy); // false (no es la misma referencia)

// modificando el objeto inicial no modifica la copia:
//AGREGANDO
obj.d = 4;
obj.e = 5;
console.log(JSON.stringify(obj));  
console.log(JSON.stringify(objCopy)); 





let obj11 = { a: 1, b: 2, c: 3 };

let objCopy11 = { ...obj11 }; // separa el objeto en una lista de parámetros
                          // luego devuelve el resultado en un nuevo objeto

// ¿tienen los objetos el mismo contenido?
console.log(JSON.stringify(obj11) === JSON.stringify(objCopy11)); // true

// ¿son iguales los objetos?
console.log(obj11 === objCopy11); // false (no es la misma referencia)

// modificando el objeto inicial no modifica la copia:
obj11.d = 4;
obj11.e = 5;
obj11.f = 6;
obj11.g = 7;
obj11.h = 8;
obj11.i = 9;
obj11.j = 10;
obj11.k = 11;
console.log(JSON.stringify(obj11)); 
console.log(JSON.stringify(objCopy11)); 











//Parametros REST                     PARAMETROS REST...
function sum(a, b) {
    return a + b;
  }
  
  console.log( sum(  3, 4, 5) );
  console.log( sum( 1, 2, 3, 4, 5) );
  console.log( sum(  4, 5, 7) );


  //ESTE RESTO SIGNIFICA TODAS LAS VARIABLES QUE QUIERAS
  function sumAll(...loCantidadQueQuieras) { // args es el nombre del array
    let sumaTotal = 0;
  
    for (let loCantidadQueQuiera of loCantidadQueQuieras) sumaTotal += loCantidadQueQuiera;
  
    return sumaTotal;
  }
  
  console.log( sumAll(1) ); 
  console.log( sumAll(1, 2) ); 
  console.log( sumAll(1, 2, 3, 4) ); 

//                               todos los titulos que quieras...
  function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName ); // Julio Cesar
  
    // el resto va en el array titles
    // por ejemplo titles = ["Cónsul", "Emperador"]
    console.log( titles[0] ); // Cónsul
    console.log( titles[1] ); // Emperador
    console.log( titles[2] ); // Emperador
    console.log( titles.length ); // 2
  }
  // primer parametro, 2do , 3RESTO...
  showName("Julio", "Cesar", "Cónsul", "Emperador","Cónsulador");

  /*
  codigo de error
  function f(arg1, ...rest, arg2) { // arg2 después de ...rest no  puede ir nada?!
  // error
}
  */
function showNam() {
    
    console.log( arguments.length );
    console.log( arguments[0] );
    console.log( arguments[1] );
    console.log( arguments[2] );
    console.log( arguments[3] );
  
    // arguments es iterable
    // for(let arg of arguments) alert(arg);
  }
  
  // muestra: 2, Julio, Cesar
  showNam("Julio", "Cesar","Julian", "CesarCarp", );
  
  // muestra: 1, Ilya, undefined (no hay segundo argumento)
  showNam("Ilya");