function Tiro ()
{
    this.tiro = false;
    this.largura = 14;
    this.altura = 19;
    this.posicaoX = nave.posicao + (nave.largura - this.largura) / 2;
    this.posicaoY = nave.altura;
    this.centroX = this.largura / 2;
    this.centroY = this.altura / 2;
    this.raio = this.largura / 2;
    this.imagem = new Image ();
    this.imagem.onload = function ()
    {
        
    };
    this.imagem.src = 'img/tiro2.png';
    this.atirar = function ()
    {
        this.tiro = true;
        this.posicaoX = nave.posicao + (nave.largura - this.largura) / 2;
        this.posicaoY = nave.altura;
    };
    this.desenhar = function ()
    {
        contexto.drawImage (this.imagem, this.posicaoX, this.posicaoY, this.largura, this.altura);
    };
    this.proximo = function ()
    {
        this.posicaoY += 5;
        if (this.posicaoY >= canvas.height)
        {
            this.tiro = false;
        }
    };
}