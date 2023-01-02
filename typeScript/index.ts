//Explícito : escribir el tipo:
let firstName: string = "Dylan";
//Implícito : TypeScript "adivinará" el tipo, según el valor asignado:
let firstName1 = "Dylan";

let firstName2: string = "Dylan"; // type string
//firstName2 = 33;
console.log(firstName2)

const json = JSON.parse("55");

console.log(typeof json);


//                  TYPO ANY

//sin ANY me marca error
/*let u = true;
u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(u);*/


//ANY any es un tipo que deshabilita la verificación de
// tipos y permite efectivamente el uso de todos los tipos.
let v: any = true;
v = "string";
Math.round(v); 





//              UNKNOWNES
//Tipo: desconocido
//unknownes una alternativa similar, pero más segura, a any.

//unknownse usa mejor cuando no sabe el tipo de datos que se están escribiendo.
// Para agregar un tipo más tarde, deberá convertirlo.

//Casting es cuando usamos la palabra clave "as" para decir que la propiedad 
//o variable es del tipo casted.


//               NEVER
//Tipo: nunca
//neverefectivamente arroja un error cada vez que se define.

//let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
//neverrara vez se usa, especialmente por sí mismo, su uso principal es en genéricos avanzados.


//                UNDEFINED
//Tipo: indefinido y nulo
//undefinedy nullson tipos que hacen referencia a las primitivas de JavaScript undefinedy 
//null respectivamente.

//let y: undefined = undefined;
let z: null = null;

//Estos tipos no tienen mucho uso a menos que strictNullChecksesté habilitado 
//en el tsconfig.jsonarchivo.


//                                  ARREGLOS
//          VERY GOOD
const names: string[] = [];
names.push("Dylan");
names.push("Dany");

console.log(names) 



// SOLO LECTURA
//La readonlypalabra clave puede evitar que se cambien las matrices.

const nam: readonly string[] = ["Dylan"];
//nam.push("Jack"); //NO SE PUEDE HACER ESTO


//TypeScript puede inferir el tipo de una matriz si tiene valores.
const numbers = [1, 2, 3];

numbers.push(4); 

//numbers.push("2"); 

console.log(numbers);

let head: number = numbers[0]; 
console.log(head);





//                                     TUPLAS
/*  MATRICES TIPADAS
Una tupla es una matriz tipada con una longitud y tipos predefinidos para cada índice.

Las tuplas son excelentes porque permiten que cada elemento de la matriz sea un tipo de valor conocido.

Para definir una tupla, especifique el tipo de cada elemento en la matriz:*/

// define our tuple
let ourTupleS: [number, boolean, string];

// initialize correctly
ourTupleS = [5, false, 'Coding God was here'];


//Aunque tenemos un boolean, stringy numberel orden importa en nuestra tupla y generará un error.
// define our tuple 
//let ourTuple: [number, boolean, string];

// ESTO ESTA MAL POR QUE NO COINCIDEN SUS VALORES CON LO DE LAS TUPLAS
//ourTuple = [false, 'Coding God was mistaken', 5];







/*
Tupla de solo lectura
Una buena práctica es hacer tu tupla readonly .

Las tuplas solo tienen tipos fuertemente definidos para los valores iniciales: */
//EN ESTA TUPLA SE PUEDEN AGREGAR MAS STRING
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong',7, true);
console.log(ourTuple);



//Verá que las nuevas valueTuples solo tienen tipos fuertemente definidos para los valores 
//iniciales:
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
//te marca que esa propiedad no existe el en la propiedad readonly
//ourReadonlyTuple.push('Coding God took a day off');

console.log(ourReadonlyTuple)


/*
Tuplas con nombre
Las tuplas con nombre nos permiten proporcionar contexto para nuestros valores en cada índice.
*/
const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph)


//           DESCTRUCTURACION DE TUPLAS

//Dado que las tuplas son matrices, también podemos desestructurarlas.

const grap: [number, number] = [55.2, 41.3];
const [xi, yi] = grap;
console.log(xi)
