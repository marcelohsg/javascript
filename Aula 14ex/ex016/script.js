function contar() {
    var finicio = window.document.getElementById ('inicio')
    var ffim = window.document.getElementById('fim')
    var fpasso = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    if (finicio.value.length == 0 || ffim.value.length == 0 || fpasso.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')        
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(finicio.value)
        var f = Number(ffim.value)
        var p = Number(fpasso.value)
        if(p <= 0) {
            window.alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (var c=i ; c <= f ; c += p ) {
                res.innerHTML += `\u{1F449}${c} `
            }
        } else {
            // Contagem regressiva
            for (var c = i ; c >= f ; c -= p) {
                res.innerHTML += `\u{1F449}${c} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}