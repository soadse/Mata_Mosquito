let cronometro = document.querySelector('.tempo')
let tempo = 61;
let vidas = 1
let largura = window.innerWidth;
let altura = window.innerHeight;

let intervalo = setInterval(() => {
    tempo --
    cronometro.innerHTML = tempo;
    if(tempo == 0) {
        window.location.href = 'win.html'
    }
}, 1000);

function posicaoRandomica(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3){
            window.location.href = 'gameOver.html'
        } else {
            document.getElementById('c' + vidas).src = '../imagens/coracao_vazio.png'
            vidas++
        } 
    }

    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    // Criar o elemento HTML
    let mosquito = document.createElement('img')
    mosquito.src = '../imagens/mosca.png'
    mosquito.className = `${tamanhoMosquito()} ${ladoMosquito()}`
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}
posicaoRandomica()

function tamanhoMosquito(){
    let random = Math.floor(Math.random() * 3)
    return random === 1 ? 'mosquito1' : random === 2 ? 'mosquito2' : 'mosquito3';
}
tamanhoMosquito()

function ladoMosquito(){
    let random = Math.floor(Math.random() * 2)
    return random === 1 ? 'ladoA' : 'ladoB';
}
ladoMosquito()

setInterval(()=>{
    posicaoRandomica()
}, 2000)



