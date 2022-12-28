// Create a Set
const letters = new Set(["a","b","c"]);

// Display set.size
document.getElementById("demo").innerHTML = letters.size;



//AGREGAR
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

// Display set.size
document.getElementById("demo").innerHTML = letters.size;


//
// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add the Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);



// Create a Set
const letters = new Set(["a","b","c"]);

// List all entries
let text = "";
letters.forEach (function(value) {
  text += value;
})

//El método de valores ()
//El values()método devuelve un objeto Iterator que contiene todos los valores de un Conjunto:

Ejemplo
letters.values()   // Returns [object Set Iterator]


// Create an Iterator
const myIterator = letters.values();

// List all Values
let text = "";
for (const entry of myIterator) {
  text += entry;
}

letters.keys();//LLAVE
typeof letters;    // Returns object
  
letters instanceof Set;  // Returns true