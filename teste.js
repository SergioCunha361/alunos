var  validade =  require ( 'validator' ) ;

let nome = "Sergio"

console.log(validade.isEmpty(nome));

console.log(nome)

// function divide(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("Division by zero");
//     }
//     return a / b;
//   } catch (error) {
//     console.error("Error:", error.message);
//     return 0; // Or handle the error differently
//   }
// }

// console.log(divide(10, 2)); // Output: 5
// console.log(divide(10, 0)); // Output: Error: Division by zero