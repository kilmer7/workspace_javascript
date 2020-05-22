// Variáveis do Jogo
var canvas, ctx, frames, alt, lar = 0;

// Funções Gerais
function clique(event){
  alert("clicou");
}

function main(){
  alt = window.innerHeight;
  lar = window.innerWidth;

  if(lar >= 500){
    lar = 600;
    alt = 600;
  }

  // Criando o Canvas
  canvas = document.createElement("canvas");
  canvas.width = lar;
  canvas.height = alt;
  canvas.style.position = "absolute";
  canvas.style.top = "0px";
  canvas.style.bottom = "0px";
  canvas.style.left = "0px";
  canvas.style.right = "0px";
  canvas.style.margin = "auto";
  canvas.style.border = "10px solid #000";

  ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);

  document.addEventListener("mousedown", clique);

  loop();
}

function loop(){
  update();
  draw();

  window.requestAnimationFrame(loop);
}

function update(){
  frames++;
}

function draw(){
  ctx.fillStyle = "#50beff";
  ctx.fillRect(0, 0, lar, alt);
}

main();