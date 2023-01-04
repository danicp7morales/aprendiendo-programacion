//                MAP()
/*map() : Permite recorrer el array y modificar los elementos presentes
 en él, retornando un nuevo array con la misma longitud que el original. */

const array = [1, 2, 3, 4, 5, 6, 7];
const resultArray = array.map((element) => element + 10 / 2);
console.log(resultArray);

//SI QUIERO AGREGARLE ALGO EXTRA A TODO MI ARRAY
const arrayPalabras = ["dany", "sabry", "katy"];
const result = arrayPalabras.map((element) => element + "s");
console.log(result);






//    filter()         FILTER: LO MAS DE LO MAS
/*
filter() : Recorre el array y retorna un nuevo array
 con aquellos elementos que pasen una determinada condición. */

//podes filtrar lo que sea
const arrayfilter = [1, 2, 3, 4, 5, 6, 7];
const resultfilter = arrayfilter.filter(
  (element) => element === 3 || element === 7
);
console.log(resultfilter);

//ACA SACAMOS EL QUE QUEREMOS
const arrayfilter1 = ["sara", "dany", "tera"];
//     aca si el elemento no existe se vuelve a guardar
const resultfilter1 = arrayfilter1.filter((element) => element !== "tera");
console.log(resultfilter1);

//ACA BUSCAMOS LOS QUE QUERAMOS
const arrayfilter2 = ["sara", "dany", "tera"];

const resultfilter2 = arrayfilter2.filter(
  (element) => element === "tera" || element === "dany"
);
console.log(resultfilter2);




//           FOREACH() PUNTO FLOJO (DANY)
/*
forEach() : Permite iterar el contenido de un array.
 Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo.
*/

 const arrayForEach = ['daniel','sabrina','minni']
 const resultForEach = arrayForEach.forEach((element, i ) => {
   console.log(`${element} se encuentra en el indice ${i}`)
 } )

 console.log(resultForEach)


//                         METODO FIND
//TE TRAE EL ELEMENTO QUE BUSCAS SEA UN OBJETO UN STRIN UN NUMERO CUALQUIER COSA QUE SE 
//ENCUENTRE EN UN ARRAY

const inventario = [
  {nombre: 'manzanas', cantidad: 2},
  {nombre: 'bananas', cantidad: 0},
  {nombre: 'cerezas', cantidad: 5}
];

const resultado = inventario.find( fruta => fruta.nombre === 'cerezas' );

console.log(resultado);

//PUNTO FLOJO (DANY)
 //                        SORT() METODO DE ORDENAMIENTO
 //sort() : Ordena los elementos del array y retorna el arreglo ordenado. 
 //Los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto.
const arraySort = [1,2,3,4,5,6,7]
const alphabetsSort = ['a', 'e', 'b', 'k', 'p']

//ordenar de forma descendente
const descArraySort = arraySort.sort((a, b)  => a > b
? -1 : 1)
console.log(descArraySort)


//ordenar de forma ascendente
const ascArraySort = alphabetsSort.sort((a, b)  => a > b
? 1 : -1)
console.log(ascArraySort)


//           SOME() esto esta bueno por si queremos un valor booleano
/*
some() : Itera el array y retorna un booleano si como mínimo uno de los
 elementos presentes en el array pasa una condición determinada. Recibe un callback que se encargara de preguntar aquello que queremos dentro del array.
*/

const arraySome = [1,2,3,4,5,6,7];

//acapreguntamos si hay un elemento mayor a 4
const boleanoSome = arraySome.some(element => element > 4)
console.log(boleanoSome)


const boleanSome = arraySome.some(element => element < 0)
console.log(boleanSome)





//                     EVERY() TODOS DEBEN PASAR LA PRUEBA
/*
every() : Es similar al some(), ya que itera el array y retorna un booleano. 
Pero esta vez, para que dicho booleano sea true todos los elementos del array deberán pasar la condición dada.
*/

const arrayEvery = [1,2,3,4,5,6,7]

const booleanoEvery = arrayEvery.every(element => element > 4)
console.log(booleanoEvery)

const booleanEvery = arrayEvery.every(element => element < 10)
console.log(booleanEvery)



//                  CONCAT()
//concat() : Se utiliza para unir dos o más arrays. 
//Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

const arrayConcat = ['a', 'b', 'c']
const arrayConcatenar = ['d', 'e', 'f']

const resultArrayConcat = arrayConcat.concat(arrayConcatenar)
console.log(resultArrayConcat)






//                  INCLUDES() muy bueno te da un booleano
/*
includes() : Determina si un array incluye un determinado elemento y
 retorna un booleano según corresponda.
*/

const arrayIncludes1 = ['a', 'b', 'c']
const arrayIncludes2 = ['d', 'e', 'f']

console.log(arrayIncludes1.includes('a'))
console.log(arrayIncludes2.includes('a'))
console.log(arrayIncludes2.includes('a'))
console.log(arrayIncludes1.includes('f'))



//                    JOIN() exelente metodo
/*
join() : Une todos los elementos de un array en una cadena.
 Podemos pasarle como parámetro el carácter de separación que debe agregar entre los elementos.
 */

const arrayJoin = ['a', 'e', 'b', 'k', 'p'];

console.log(arrayJoin.join(''))
console.log(arrayJoin.join(' '))
console.log(arrayJoin.join(' *'))
console.log(arrayJoin.join('!'))
console.log(arrayJoin.join('!# '))
console.log(arrayJoin.join(' !#'))
console.log(arrayJoin.join(' ,'))
console.log(arrayJoin.join())



//                            REDUCE()
/*
reduce() : Aplica una función a un acumulador y a cada valor de una array 
(de izquierda a derecha) para reducirlo a un único valor.
*/

const arrayReductor = [1 ,29 ,3 ,41 ,5 ,60 ,7]
const resultReductor =  arrayReductor.reduce((accumulator, current) => accumulator * current)
const resultReductor1 =  arrayReductor.reduce((accumulator, current) => accumulator + current)

console.log(resultReductor)
console.log(resultReductor1)




//                     INDEXOF()
//  SIRVE PARA OBTENER EL INDICE DE UN ARREGLO
/*
indexOf() : Retorna el primer índice en el que se puede encontrar un
elemento dado en el array, ó retorna -1 si el elemento no esta presente.
*/

const arrayIndexOf = ['daniel','sabrina','minni', 'lucia', 'Odeth']
const resultArrayIndexOf = arrayIndexOf.indexOf('sabrina')
const resultArrayIndexOf1 = arrayIndexOf.indexOf('Odeth')
const resultArrayIndexOf2 = arrayIndexOf.indexOf('daniel')

console.log(resultArrayIndexOf)
console.log(resultArrayIndexOf1)
console.log(resultArrayIndexOf2)

let indice = resultArrayIndexOf
indice++
console.log(indice)



//                  FINDINDEX()
//RETORNA EL INDICE DEL PRIMER ELEMENTO ENCONTRADO
/*
findIndex() : Retorna el índice del primer elemento de un array que
cumpla con la función de prueba proporcionada. En caso contrario
devuelve -1.
*/

const arrayFindIndex = ['daniel','lucia','sabrina','minni', 'lucia', 'Odeth', 'lucia']
const resultArrayFindIndex = arrayFindIndex.findIndex(element => element === 'lucia')
const resultArrayFindIndex1 = arrayFindIndex.findIndex(element => element === 'minni')

console.log(resultArrayFindIndex)
console.log(resultArrayFindIndex1)






//  rellenador                     FILL()
//fill() : Cambia todos los elementos de un array por un valor estático,
//desde el índice de inicio hasta el índice final. Retorna el array modificado.
const arrayFill = [1,2,3,4,5,6,7]

//LLENAR CON 7 DESDE LA POSICION 4
console.log(arrayFill.fill(7, 4))









// AGREGAR AL FINAL                           PUSH
//push() : Añade uno o más elementos al final de un array y
// devuelve la nueva longitud del array.

const arrayPush = ['apple', 'orange', 'pear']

console.log(arrayPush.push('banana'))
console.log(arrayPush.push('anana'))
console.log(arrayPush.push('frutilla'))
console.log(arrayPush.push('pera'))
console.log(arrayPush.push('manzana'))
console.log(arrayPush)






//SACAR AL FINAL                        POP
//VA SACANDO DESDE EL ULTIMO ELEMENTO DE A UNO
//pop() : Elimina el último elemento de un array y lo devuelve. Este método
//cambia la longitud del array.

const arrayPop = ['apple', 'orange', 'pear']

console.log(arrayPop.push('banana'))
console.log(arrayPop.push('anana'))
console.log(arrayPop.push('frutilla'))
console.log(arrayPop.push('pera'))
console.log(arrayPop.push('manzana'))
//sacando todos los elementos
console.log(arrayPop.pop())
console.log(arrayPop.pop())
console.log(arrayPop.pop())
console.log(arrayPop.pop())
console.log(arrayPop.pop())
console.log(arrayPop)
console.log(arrayPop.pop())
console.log(arrayPop.pop())
console.log(arrayPop.pop())
console.log(arrayPop)






//SACA AL COMIENZO              SHIFT()
/*EL SHIFT SACA DESDE EL PRIMER ELEMENTO DEL ARRAY DE ADELANTE
shift() : Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.

*/

const arrayShift = ['apple', 'orange', 'pear']
arrayShift.shift()

console.log(arrayShift)
arrayShift.shift()
console.log(arrayShift)




//AGREGA AL COMIENZO                 UNSHIFT()
/*
unshift() : Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
*/
const arrayUnShift = ['apple', 'orange', 'pear']
arrayUnShift.unshift('salero')

console.log(arrayUnShift)
arrayUnShift.unshift('banana')
console.log(arrayUnShift)








//                    mi cortador je... tijerasSLICE
//                            SLICE
/*NO MODIFICA EL ARRAY ORIGINAL
slice() : Devuelve una copia de una parte del array dentro de
 un nuevo array empezando por inicio hasta fin (fin no incluido). 
El array original no se modificará.
*/
//                   0    1    2    3    4    5
const arraySlice = ['a', 'e', 'b', 'k', 'p', 'd'];
//arranca por la posicion 2 trayendome la pocicion 2
//y tambien la 3 y lo que hay en la cuatro lo que 
//hay en la 5 no la trae
const resultArraySlice = arraySlice.slice(2, 5)

console.log(resultArraySlice)





//                       REVERSE()
/*
reverse() : Invierte el orden de los elementos de un array. 
El primer elemento pasa a ser el último y el último pasa a ser el primero.
*/

const arrayReverse = [1,2,3,4,5,6,7]

console.log(arrayReverse.reverse())





//                       SPLICE()  EL CIRUJANO
/*
splice() : Cambia el contenido de un array eliminando elementos
 existentes y/o agregando nuevos elementos. */

const arraySplice = ['apple', 'orange', 'pear'] 
//  posicion de ingreso 2  ,eliminar 0 ,agregar 'banana'
arraySplice.splice(   2,     0,    'banana')
console.log(arraySplice)
arraySplice.splice(0, 1)//se elimina apple
console.log(arraySplice)





//                          LASTINDEXOF()
/*
lastIndexOf() : Busca un elemento en un array y devuelve su posición.
 Comienza buscando por el final del array. Retorna -1 si el elemento no se encontrara.
*/
const arrayLastIndexOf = ['apple', 'banana', 'orange']

console.log(arrayLastIndexOf.lastIndexOf('orange'))
console.log(arrayLastIndexOf.lastIndexOf('papa'))
console.log(arrayLastIndexOf.lastIndexOf('banana'))
console.log(arrayLastIndexOf.lastIndexOf('apple'))




// ESTA BUENO HAY QUE PROFUNDIZAR
//                       FLAT()
/*
flat() : Crea una nuevo array con todos los elementos de sub-array concatenados
 recursivamente hasta la profundidad especificada.
*/

const arrayFlat = [1,2,3,4,5,[6,7],[8]]

const cajaFlat = arrayFlat.flat()
console.log(arrayFlat.flat())
console.log(cajaFlat)





//                       ISARRAY()
/*
isArray() : Determina si el valor pasado es un Array.
*/

console.log(Array.isArray([1,2,3,4,5,6,7]))
console.log(Array.isArray({nombre:'dany'}))
console.log(Array.isArray(undefined))
console.log(Array.isArray('apple'))





//                         FROM()
/*
from() : Crea una nueva instancia de Array a partir de un objeto iterable.
*/

console.log(Array.from('ghjkkls'))







