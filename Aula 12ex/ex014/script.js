var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >=1 && hora < 12) {
    img.src = 'imagens/fotomanha.jpg'
    msg.innerHTML += ' Bom Dia!'
} else if (hora >= 12 && hora <= 16) {
    img.src = 'imagens/fototarde.jpg'
    msg.innerHTML += ' Boa Tarde!'
    document.body.style.background = '#4bec46'
} else {
    img.src = 'imagens/fotonoite.jpg'
    msg.innerHTML += ' Boa Noite!'
    document.body.style.background = '#26008d'
}
