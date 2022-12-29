// Dado uma string S, retorne os valores removendo todas as letras que aparecem de forma duplicada, restando apenas letras que aparecem uma vez.


const s = 'abbcddeof'; 

let newArray = [];

let result = ''; 
  

for (let i = 0; i < s.length; i++) { 

	newArray.push(s[i]) 
    
}


let filterArray = newArray.filter((este, i) => newArray.indexOf(este) === i);

result = filterArray.join('');

console.log(result);



