function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') //Criou uma tag img
        img.setAttribute('id', 'foto') //Criou um id='foto' para a tag img
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos: ${gênero} com ${idade} anos.</p>`
        res.appendChild(img) //adicionou a imagem 
    }
}