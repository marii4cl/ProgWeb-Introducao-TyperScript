// === ARRAYA ===]

let notas: number[] = [6, 7.5, 8, 5];

//forEach
notas.forEach(n => console.log("notas: ", n)); //iterar elementos sobre elementos de uma coleção

//map
let notasAjustadas = notas.map(n => n + 0.5); //criar um novo elemento array com os resultados da chamada de uma função fornecida

//filter]
//criar um novo array contando somente elementos que atendem uma condição específica
let aprovados = notas.filter(n => n <= 6);

//push e pop
notas.push(10);//adiciona um elemento no final do array
notas.pop();//remover um elemento do final do array