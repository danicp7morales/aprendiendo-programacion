//OBJETOS
const persona = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
//accediendo

  person.lastName;

 
  person["lastName"];

  
  function OBJ() {return this.firstName + " " + this.lastName;}

 
   const perso = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  // eslint-disable-next-line no-global-assign
  name = person.fullName();

  name = person.fullName; //function() { return this.firstName + " " + this.lastName; }

  /*
  ¡No declare cadenas, números y booleanos como objetos!
Cuando se declara una variable de JavaScript con la palabra clave " new", la variable se crea como un objeto: 

x = new String();        
y = new Number();        
z = new Boolean();       */

//Los objetos usan nombres para acceder a sus "miembros". En este ejemplo, person.firstName devuelve John:
const personit = {firstName:"John", lastName:"Doe", age:46};


//agrega 4 propiedades:
const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

//El objeto x no es una copia de la persona. es persona _ Tanto x como persona son el mismo objeto.

//Cualquier cambio en x también cambiará de persona, porque x y persona son el mismo objeto.
const personf = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

const x = person;
x.age = 10;    


//APRENDIENDO
const data = {
    code: 42,
    items: [
      {
        id: 1,
        name: 'foo'
      }
    , 
    { 
        id: 2,
        name: 'bar'
    }
    ]
  }

  //COMO ACCEDER
  const item_name = data.items[1].name;

  const item_name2 = data['items'][1]['name'];


  /*Estoy intentando acceder a una propiedad pero solo obtengo undefined ¿espalda?
La mayor parte del tiempo cuando se undefined, el objeto/array simplemente no tiene una propiedad con ese nombre. */
  const foo ={ bar:{ baz: 42 }}
console.log(foo.baz); // undefined
console.log(foo.bar.baz); // 42

//PARA BUSCAR ALGO EN LA PROPIEDAD QUE NO CONOZCO, O PARA SABER LO QUE HAY
for (const prop in data) 

/*Dependiendo de la procedencia del objeto (y de lo que desee hacer),
 es posible que deba probar en cada iteración si la propiedad es realmente una propiedad del 
objeto o si es una propiedad heredada. Puedes hacer esto con Object#hasOwnProperty */
Object.hasOwnProperty

//Como alternativa a for...in con hasOwnProperty, puedes usar Object.keys[MDN] para 
//conseguir un array de nombres de propiedad:
Object.keys(data).forEach(function(prop)
  // `prop` is the property name
  // `data[prop]` is the property value
  );



  // ACCESOS

objectName.property      // person.age

objectName["property"]   // person["age"]

objectName[expression]   // x = "age"; person[x]    
//La expresión debe evaluarse como un nombre de propiedad.

//EL FOR IN  RECORRE LAS PROPIEDADES DE UN OBJETO
const person = {
  fname:" John",
  lname:" Doe",
  age: 25
};

for (let x in person) {
  txt += person[x];
}

//ADICION DE NUEVAS PROPIEDADES
person.nationality = "English";

//DELETE
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person.age;
delete person["age"];//El deleteoperador está diseñado para usarse en
// propiedades de objetos. No tiene efecto sobre variables o funciones.

//OBJETOS ANIDADOS
myObj = {
  name:"John",
  age:30,
  cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
  //ACCEDIENDO
myObj.cars.car2;

myObj.cars["car2"];

myObj["cars"]["car2"];

let p1 = "cars";
let p2 = "car2";
myObj[p1][p2];

//MATRICES Y OBJETOS ANIDADOS  //PRACTICAR ESTO MUCHO
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]},
    {name:"mercedes", models:["5500", "Pandita"]},
    {name:"chwroki", models:["5005", "Pand"]},
    {name:"unix", models:["57700", "Pandass"]},
    {name:"toyota", models:["50440", "Pandi"]},
    {name:"fress", models:["52200", "Pandahh"]},
  ]
}
//Para acceder a arreglos dentro de arreglos, use un bucle for-in para cada arreglo:

for (let i in myObj.cars) {//ACA NOS PARAMOS PRIMERO EN CARS
  x +=  myObj.cars[i].name ;//ACA EN X GUARDAMOS EL PRIMER OBJETO DE MI ARRAY
  for (let j in myObj.cars[i].models) {//ACA ACCEDEMOS A LA PROPIEDAD CARS EN LA POSICION I
    //DEL OBJETO DENTRO DE LA PROPIEDAD Y ACCEDEMOS A SU PROPIEDAD MODELS
    x += myObj.cars[i].models[j];//ACA EN X GUARDAMOS LOS VALORES
  }
}

/*
<script>
let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for (let i in myObj.cars) {
  x += "<h2>" + myObj.cars[i].name + "</h2>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j] + "<br>";
  }
}

document.getElementById("demo").innerHTML = x;
</script>


  LO QUE ME ENTREGA
Ford
Fiesta
Focus
Mustang
BMW
320
X3
X5
Fiat
500
Panda*/

 