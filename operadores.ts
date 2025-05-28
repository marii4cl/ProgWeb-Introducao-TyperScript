let a: number = 10;
let b: number = 14;

//aritimeticos (+,-,*,/,%)
console.log('soma', a + b);
console.log('subtração', a - b);
console.log('multiplicação', a * b);
console.log('divisão', a / b);
console.log('resto', a % b); /*percente*/

//relacionais
console.log('igual', a == b);
console.log('diferente', a != b);
console.log('maior que', a > b);
console.log('menor que', a < b);
console.log('maior ou igual', a >= b);
console.log('menor ou igual', a <= b);

//identidades restritas
console.log('identico', a === b);
console.log('não identico', a !== b);

//lógicos
let x: boolean = true;
let y: boolean = false;

console.log('AND', x && y);
console.log('OR', x || y);
console.log('NOT', !x);

//operador condicional
let idade: number = 17;
let acesso = idade >= 18 ? 'permitido beijar na boca' : 'não permitido'/* condicao ? valor se true : valor se false*/