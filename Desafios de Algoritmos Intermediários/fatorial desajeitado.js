// O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n. Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação por uma rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de operações aritméticas. Além disso, a divisão neste caso sempre resulta em um número inteiro, por exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n.


let n = 10;

let r = n;

let finalResult = 0;

let opr = 1;  //1 = '*',   2= '/',   3= '+',   4= '-';


if(n <= 2){
    console.log(n);
}
else{
    while(n > 1){
        n = n - 1;

        if(opr === 1){
            r = r * n;
        }

        if(opr === 2){
            r = Math.round(r / n);
        }

        if(opr === 3){
            r = r + n;
        }

        if(opr === 4){
            finalResult += r;
            r = -n;
            opr = 0;
        }

        if (n == 1 && opr != 0) {
            finalResult += r;
        }

        opr++
    }
}

console.log(finalResult)



