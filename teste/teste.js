let point = document.getElementById('point'); 
let largura = screen.width; 
let altura = screen.height; 

function posicao(){
    let randomWidth = Math.floor(Math.random() * largura); 
    let randomHeight = Math.floor(Math.random() * altura); 
    return { x: randomWidth, y: randomHeight};
}
function mover(x, y){ 
    point.style.left = x + 'px'; 
    point.style.top = y + 'px'; 
} 
setInterval(() => {
    let coordenadas = posicao(); 
    mover(coordenadas.x, coordenadas.y);
}, 3000)


// let point = document.getElementById('point');
// let largura = screen.width;
// let altura = screen.height;
// let randomWidth = Math.floor(Math.random() * largura);
// let randomHeigth = Math.floor(Math.random() * altura);
// document.body.appendChild(document.createElement('p')).innerHTML = altura;
// document.body.appendChild(document.createElement('p')).innerHTML = largura;
// document.body.appendChild(document.createElement('p')).innerHTML = randomWidth;
// document.body.appendChild(document.createElement('p')).innerHTML = randomHeigth;
// function mover(x, y){ 
//     point.style.left = x;
//     point.style.top = y;
// };
// mover(randomWidth, randomHeigth;
