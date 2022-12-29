// Dado um número inteiro ( n ) , retorne a diferença entre o produto de seus dígitos e a soma de seus dígitos.




n = 44  //número proposto 

let str = n.toString();  //transforma o número em string

let strDigits = str.split('');  //transforma a string em um array de strings

const numDigits = [];  //array vazio onde armazenará os dígitos em forma de numeros inteiros

let soma = 0;   //valor padrão da variavel soma

let result = 0;

let produto = 1;  //valor padrão da variavel produto, (começa em 1 pois se colocado zero os valores do array não se multiplicarão)


for (let i = 0; i < strDigits.length; i++) {   //transforma as strings em numbers e as coloca em no array de numbers
    
    numDigits.push(Number(strDigits[i]));
    
}


for (let i = 0; i < numDigits.length; i++) {  //realiza a soma dos itens do array
    
    soma += numDigits[i];
    
}

for (let i = 0; i < numDigits.length; i++) {  //realiza a multiplicação dos itens do array
    
    produto *= numDigits[i];
    
}

result = produto - soma;   //retorna o resultado da diferença entre o produto e soma dos dígitos

console.log(result);


