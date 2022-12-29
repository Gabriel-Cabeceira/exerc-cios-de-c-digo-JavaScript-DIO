// Neste desafio temos N moedas que precisam ser organizadas em forma de triângulo, desse modo, você deverá escrever um programa que imprima a altura máxima que podemos alcançar usando essas N moedas.


let N = 15;
let n = 1 + 8*N;


function squareRoot(n) {   // Retorna a raiz quadrada de n
          
  let x = n;
  let y = 1;
  
  let e = 0.000001;
    
  while (x - y > e) {
    x = (x + y) / 2;
    y = n / x;
  }
             
  return x;
}
  
  
function findMaximumHeight(N) {
        
  let maxH = (-1 + squareRoot(n)) / 2;
             
  return Math.round(maxH);

}
  
console.log(findMaximumHeight(N))