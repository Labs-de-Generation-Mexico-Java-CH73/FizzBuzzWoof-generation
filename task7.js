// Refer to Task 7 in your Instructions to complete this task

const limit = parseInt(prompt("¿Cuántas líneas deseas generar? "));
const resultados = [];

// Arreglo provisto y extendido con más palabras para primos más altos
const buzzWords = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Apple", "Blackberry", "Compaq", "Dasung", "Hp", "Kodak", "LG", "Motorola", "Nokia",
  "Oracle", "Panasonic", "Radioshack", "Samsung", "Toyota", "Unisoc", "Verbatim", "Xerox", "Yazaki", "Zorax"]; 

// variable para controlar que variable del array de buzzwords sigue
let wordIndex = 0;

// Función para determinar si un número es primo. Esta función la copié de google y funciona
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 1; i <= limit; i++) {

  if (i % 2 !== 0 && isPrime(i)) {
    //aqui si todavia tenemos palabras del buzzwords, la usamos
    if (wordIndex < buzzWords.length) {
      resultados.push(buzzWords[wordIndex]);
      wordIndex++;
      
      //salta a la siguiente iteración para no aplicar FizzBuzz. Esta solución la tuve que sacar de google porque no encontraba el error
      continue;
    }
  }

  let output = "";
  
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  if (i % 7 === 0) output += "Woof";

  //agrego el resultado normal si no fue un primo impar o si se acabaron las buzzWords
  resultados.push(output || i);
}

//imprimo el arreglo final completo
console.log(resultados);