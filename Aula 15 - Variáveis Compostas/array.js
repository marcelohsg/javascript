let num = [5, 8, 2, 9, 3]
num.push(1) //Adicionou o número 
num.sort() //Coloca os elementos em ordem crescente
num.push(4) //Add o número, mas como veio após o push, não foi add na ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`) //Número que está na posição 0.
let pos = num.indexOf(8) //Indentifica a posição do valor escolhido, se não existir, vai tetornar o valor -1.
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}