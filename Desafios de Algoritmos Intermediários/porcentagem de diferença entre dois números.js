// Dados dois números A e B, onde o valor de ‘B’ é incrementado ou decrementado por alguma porcentagem de ‘A’. Sua tarefa é descobrir qual é a porcentagem de diferença entre esses dois valores.



let a = 20;
let b = 25;



const percent = ((b - a)/a) * 100;

console.log(`${parseInt(percent)}%`)   //utilizando parseInt para arredondar o resultado caso seja flutuante (o percentual entre 30 e 35 não é 16% e sim 16.6666 porém a saída esperada para este desafio seria 16% neste caso) 




