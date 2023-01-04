//como acceder a un ARRAY
const array= ['casa', 'picina', ['coche', 'arbol',['niño', 'joven', 'claudio'] ,'jardin' ], 'luz']

console.log(array[0])
console.log(array[0])
console.log(array[3])
console.log(array[2][2][1])


const arrayObj = [
    {name:'dany'},
    {novia:'sabry'},
    {animal: 'minni'},
    {pais: 'argentina'}
]
//accedo al valor del objeto 
console.log(arrayObj[1].novia)
console.log(arrayObj[2].animal)
//accedo al objeto
console.log(arrayObj[3])
console.log(arrayObj[0])
console.log(arrayObj[7])


//objeto de array de objetos
const data = { 
    code: 42,
    items: [
     {  id: 1,
      name: 'foo',
      familia:[
        {
            padre:'marcial',
            madre:'lucia',
            hermanos:['andrea', 'marcela', 'monica', 'gabriela', 'lucia', 'julieta']
        }
      ]
     }
    , 
      {id: 2,
      name: 'bar'
      }
    ]
    };

console.log(data.items[0].familia[0].hermanos[2])
console.log(data.items[0].id)
console.log(data.items[1].name)
console.log(data.items[1].id)


//FOR IN recorre la propiedad del objeto

const obj = { a: 1, b: 2, c: 3 };
//el for in te trae la propiedad del objeto
for (const property in obj) {//traeme el valor que el objeto tiene en esta propiedad
  console.log(`${property}: ${obj[property]}`);
}


const arr =[1, 2, 3, 4 ]


//FOR OF recorre el valor de mi array
for (const prop of arr){
  let suma = prop + 10
  console.log(`${suma}`)
}




