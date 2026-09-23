// Refer to Task 6 in your Instructions to complete this task

const limit = parseInt(prompt("¿Cuántas líneas deseas generar? "));
const resultados = [];

for (let i = 1; i <= limit; i++) {
  let output = "";
  
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  if (i % 7 === 0) output += "Woof";

  //se asigna el resultado al arreglo
  resultados.push(output || i);
}

// imprimo el arreglo completo una vez que el ciclo se acaba
console.log(resultados);