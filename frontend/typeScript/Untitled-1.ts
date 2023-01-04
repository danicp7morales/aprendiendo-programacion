//            TYPOS DE OBJETOS EN TYPESCRIPT

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };


  //TypeScript puede inferir los tipos de propiedades en función de sus valores.

  const carro = {
    type: "Toyota",
  };
  carro.type = "Ford"; // no error
  //carro.type = 2;


 //PROPIEDADES OPCIONALES
 const carrito: { type: string, mileages?: number } = {
    type: "Toyota"
  };
  
  carrito.mileages = 2000;
  
  console.log(carrito);


// INDICE DE FIRMAS
//Las firmas de índice se pueden utilizar para objetos sin una lista definida de propiedades.
//aca abajo me dice que el indice va aser un string y su valor un numero
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25;
nameAgeMap.Mark = 23; 
//nameAgeMap.Mark = 'juan'; 


console.log(nameAgeMap)


//Las firmas de índice como esta también se pueden expresar con tipos de utilidad como Record<string, number>.

//Obtenga más información sobre tipos de utilidades como este en nuestro capítulo Tipos de utilidades de TypeScript












