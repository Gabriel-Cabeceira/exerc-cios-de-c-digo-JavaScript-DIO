// A saída será composta pelo array com os zeros devidamente duplicados. Caso não haja zero, retorne a própria matriz. 



const arr = [1, 0, 2, 3, 0, 4, 5, 0];

let newArray = []


for (let i = 0; i < arr.length; i++) {

    if(arr[i] !== 0){
        newArray.push(arr[i])
    }
    else{
        newArray.push(arr[i])
        newArray.push(arr[i])
    }
     
}

newArray.length = arr.length

console.log(newArray)