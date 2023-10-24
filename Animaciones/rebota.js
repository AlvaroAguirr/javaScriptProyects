const lienzo = document.querySelector('#lienzo');
const ctx= lienzo.getContext('2d');

let idX = 1;
let idY = 1;

let Color=0;

function pelota(x,y){
ctx.fillStyle=`hsl(${Color},50%,50% )`;
Color+=1;
ctx.beginPath();
ctx.arc(x,y,40,0, Math.PI*2);
ctx.fill();
//ctx.stroke();
}

let directionX=1;
let directionY=1;

function cuadro(x,y){
    ctx.fillStyle=`hsl(${Color},50%,50% )`;
    Color+=0.05;
    ctx.fillRect(x,y,30,30)
}



setInterval(()=>{
    //ctx.clearRect(0,0,600,400)
    cuadro(idX,idY);
    if(directionX ===1 && directionY===1){
        idX+=5;
        idY+=5;
    } else if(directionX ===2 && directionY===1){
        idX-=5;
        idY+=5;
    } else if(directionX ===1 && directionY===2){
        idX+=5;
        idY-=5;
    } else {
        idX-=5;
        idY-=5;
    }
    if(idX>750)directionX=2;
    if(idX<10)directionX=1;
    if(idY>500)directionY=2;
    if(idY<10)directionY=1;
},10);