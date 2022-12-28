const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

//Métodos como call(), apply()y bind()pueden hacer referencia thisa cualquier objeto .


//USO DE METODOS INTEGRADOS TOUPPERCASE
let message = "Hello world!";
let x = message.toUpperCase();//HELLO WORLD!

person.name = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
  };

//MOSTRAR OBJETOS DE JS
const personG = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  document.getElementById("demo").innerHTML =
  person.name + "," + person.age + "," + person.city;

//MOSTRAR CON BUCLES
const personP = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  let txt = "";
  for (let x in person) {
  txt += person[x] + " ";
  };
  
  document.getElementById("demo").innerHTML = txt;

  //Usando Object.values()
//Cualquier objeto de JavaScript se puede convertir en una matriz usando Object.values():

const personQ = {
  name: "John",
  age: 30,
  city: "New York"
};

const myArray = Object.values(person);

//CONVERTIR UN OBJETO EN UNA CADENA
const personW = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  let myString = JSON.stringify(person);
//{"name":"John","age":30,"city":"New York"}

//JSON.stringifyconvierte las fechas en cadenas:CONVIRTIENDO FECHAS 
///JSON.stringifyno encadenará funciones:
const personZ = {
    name: "John",
    today: new Date()
  };
  
  let myStringH = JSON.stringify(person);
  document.getElementById("demo").innerHTML = myString;

  //Esto se puede "arreglar" si convierte las funciones en cadenas antes de convertirlas en cadenas.
  const personM = {
    name: "John",
    age: function () {return 30;}
  };
  person.age = person.age.toString();
  
  let myStringK = JSON.stringify(person);
  document.getElementById("demo").innerHTML = myString;

  //También es posible encadenar arreglos de JavaScript:

  const arr = ["John", "Peter", "Sally", "Jane"];

let myStringD = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myString;


//ACCESORES
  //SET MODIFICAR
// Create an object:
const persons = {
  firstName: "John",
  lastName: "Doe",
  language: "NO",
  set lang(value) {
    this.language = value;
  }
};

// Set a property using set:
person.lang = "DANY";//SE PUEDE MODIFICAR

// Display data from the object:
document.getElementById("demo").innerHTML = person.language;

  //GET ACCEDER
  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
  };

  //OBJETO DEFINEPROPERTY 
  //El Object.defineProperty()método también se puede usar para agregar Getters y Setters:

  // Define object
const obj = {counter : 0};

// Define setters and getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

