function Vida ()
{
    this.vida = false;
    this.largura = 60;
    this.altura = 50;
    this.posicaoX = 0;
    this.posicaoY = 0;
    this.centroX = this.largura / 2;
    this.centroY = this.altura / 2;
    this.raio = this.altura / 2;
    this.imagem = new Image ();
    this.imagem.onload = function ()
    {
        
    };
    this.imagem.src = 'img/gloss.png';
    this.desenhar = function ()
    {
        contexto.drawImage (this.imagem, this.posicaoX, this.posicaoY, this.largura, this.altura);
    };
    this.proximo = function ()
    {
        this.posicaoY -= 5;
        if (this.posicaoY <= -this.altura)
        {
            this.vida = false;
        }
    };
}