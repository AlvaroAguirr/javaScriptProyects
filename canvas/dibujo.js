const lienzo = document.querySelector('#lienzo');
const ctx= lienzo.getContext('2d');

ctx.beginPath();
ctx.fillStyle="#69be66";
ctx.arc(210,220,160,0, Math.PI *2);
ctx.fill();



ctx.fillStyle='#e0e21a';
ctx.beginPath();
ctx.moveTo(160,300);
ctx.lineTo(130,250);

ctx.lineTo(150,200);
ctx.lineTo(130,140);
ctx.lineTo(180,190);



ctx.lineTo(230,190);
ctx.lineTo(280,140);
ctx.lineTo(260,200);
ctx.arc(150, 249, 120,-0.4, Math.PI/7, false);
    ctx.lineTo(160,300);
ctx.fill();
ctx.stroke();

// relleno oreja iz
ctx.fillStyle="#000000"
ctx.beginPath();
ctx.moveTo(143,180);
ctx.lineTo(130,140);
ctx.lineTo(150,160);
ctx.fill();
//relleno oreja der

ctx.fillStyle="#000000"
ctx.beginPath();
ctx.moveTo(260,160);
ctx.lineTo(280,140);
ctx.lineTo(267,180);
ctx.moveTo(150,160);

ctx.fill();


ctx.beginPath();
ctx.fillStyle="#5c3613"
ctx.moveTo(230,230);
ctx.arc(230,230,10,0,Math.PI*2, true);
ctx.fill();
ctx.arc(170,230,10,0,Math.PI*2, true);
ctx.fill();


ctx.beginPath();
ctx.fillStyle="#ffffff";
ctx.arc(227,227,5,0,Math.PI*2, true);
ctx.fill();
ctx.arc(166,227,5,0,Math.PI*2, true);
ctx.fill();



ctx.beginPath();
ctx.fillStyle="#e92929"
ctx.arc(250,250,10,0,Math.PI*2, true);
ctx.fill();
ctx.arc(150,250,10,0,Math.PI*2, true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle="#5c3613"
ctx.moveTo(190,250);
ctx.lineTo(200,260);
ctx.lineTo(210,250);
ctx.fill();

      // Ejemplo de curvas cuadráticas
      ctx.fillStyle="#d66fa1"
      ctx.beginPath();
      ctx.moveTo(200, 290);
      ctx.quadraticCurveTo(170, 280, 200, 270);
      ctx.quadraticCurveTo(230, 280, 200, 290);
   ctx.fill();
 
      ctx.stroke();
    
  
  