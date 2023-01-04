//CONSTRUCTOR OBJ

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  //CREANDO PERSONAS
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

//AGREGAR UNA PROPIEDAD A MI OBJETO
myFather.nationality = "English";

//AGREGANDO UNA FUNCIONABILIDAD
myFather.name = function() {
    return this.firstName + " " + this.lastName;
  };

  //OJO aca abajo
//No puede agregar una nueva propiedad a un constructor de objetos de la misma manera que 
//agrega una nueva propiedad a un objeto existente:

//Para agregar una nueva propiedad a un constructor, debe agregarla a la función del constructor:
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
  }

  // Create 2 Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// Display nationality
document.getElementById("demo").innerHTML =
"My father is " + myFather.nationality + ". My mother is " + myMother.nationality; 

//AGREGAR UN METODO A MI CONSTRUCTOR
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {
      return this.firstName + " " + this.lastName
    };
  }

  
// Constructor function for Person objects
function Person(firstName,lastName,age,eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.changeName = function (name) {
    this.lastName = name;
  }
}
// Create a Person object
const myMother = new Person("Sally","Rally",48,"green");

// Change last name
myMother.changeName("Doe");

// Display last name
document.getElementById("demo").innerHTML =
"My mother's last name is " + myMother.lastName;


//CONSTRUCTORES IMCORPORADOS                          LITERALES
new String()    // A new String object                   ''
new Number()    // A new Number object                    7
new Boolean()   // A new Boolean object              TRUE, FALSE
new Object()    // A new Object object                   {}
new Array()     // A new Array object                    []
new RegExp()    // A new RegExp object                  /()/
new Function()  // A new Function object                (){}
new Date()      // A new Date object


//PROTOTIPOS
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };



  //ITERAR POR UN OBJETO
const name = "W3Schools";

// List all Elements
let text = ""
for (const x of name) {
  text += x + "<br>";
}


const letters = ["a","b","c"];

// List all Elements
let texto = "";
for (const x of letters) {
  text += x + "<br>";
}

//NEXT
function myNumbers() {
    let n = 0;
    return {
      next: function() {
        n += 10;
        return {value:n, done:false};
      }
    };
  }

  
  // Create Iterable
const n = myNumbers();
n.next(); // 10
n.next(); // 20
n.next(); // 30


//ITERABLE HECHO EN CASA
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

let textl = ""
for (const num of myNumbers) {
  text += num +"<br>"
}


//OTRO
//Symbol.iterator Un iterable de JavaScript es un objeto que tiene un Symbol.iterator .
//es una función Symbol.iteratorque devuelve una next()función.

// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 110) {done = true}
      return {value:n, done:done};
    }
  };
}

// Create an Iterator
let iterator = myNumbers[Symbol.iterator]();

let text = ""
while (true) {
  const result = iterator.next();
  if (result.done) break;
  text += result.value +"<br>";
}
