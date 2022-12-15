let num = document.getElementById('fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { //!inLista = não está em lista
        valores.push(Number(num.value))
        let item = document.createElement('Option') //Criou a tag option dentro de list
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' // Vai limpar o res ao adicionar um novo elemento
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = '' // Sempre vai apagar após adcionar um número.
    num.focus() // Vai destacar a área do número.
}

function finalizar () {
    if (valores.length == 0) { //Se o vetor estiver vazio
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {            
            if (valores[pos] > maior) { // Teste para o maior valor
                maior = valores[pos]
            }
            if (valores[pos] < menor) { // Teste para o menor valor
                menor = valores[pos]
            }
            soma += valores[pos]
            media = soma/total
        }
        
        res.innerHTML = ''
        res.innerHTML += `<p>O total de elementos cadastrados foram ${total}.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

    }
}