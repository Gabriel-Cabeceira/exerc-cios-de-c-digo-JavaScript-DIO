// Dados um número "a" e um limite "N" desenvolva um código que some todos múltiplos de "a" até o limite "N".


const a = 3  // número indicado
const N = 18  //limite



const numeros = [] 
const multiplos = []
soma = 0



for (let i = a + 1; i <= N; i++){
    numeros.push(i)
}
  
for (i = 0; i < numeros.length; i++){
    const fatores = numeros[i]
    
    if(fatores % a === 0){
      multiplos.push(fatores)
    }
}

for (let i = 0; i < multiplos.length; i++){
    soma += multiplos[i];
}
  
console.log(a + soma);